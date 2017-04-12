function pollForElement(sel, func) {
    'use strict';
    var elapsed = 0;
    var interval = 100;
    var limit = 2000;
    var foundElem = document.querySelector(sel);
    var elemInterval;

    if (foundElem) {
        func(foundElem);
    } else {
        elemInterval = window.setInterval(function () {
                elapsed += interval;
                //window.console.log('elemInterval: ' + elemInterval + ', elapsed: ' + elapsed);

                foundElem = document.querySelector(sel);
                if (foundElem || (elapsed >= limit)) {
                    window.clearInterval(elemInterval);
                    if (foundElem) {
                        func(foundElem);
                    }
                }
            }, interval);
    }
}
