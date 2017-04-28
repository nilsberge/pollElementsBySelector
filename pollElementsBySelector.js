function pollElementsBySelector(sel, func) {
    'use strict';
    var elapsed = 0;
    var interval = 100;
    var limit = 2000;

    function qsa(slctr) {
        return document.querySelectorAll(slctr);
    }
    var foundElems = qsa(sel);
    var elemInterval;

    if (foundElems.length) {
        func(foundElems);
    } else {
        elemInterval = window.setInterval(function () {
                elapsed += interval;
                //window.console.log('elemInterval: ' + elemInterval + ', elapsed: ' + elapsed);

                foundElems = qsa(sel);
                if (foundElems.length || (elapsed >= limit)) {
                    window.clearInterval(elemInterval);
                    if (foundElems) {
                        func(foundElems);
                    }
                }
            }, interval);
    }
}
