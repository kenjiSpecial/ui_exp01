window.requestAnimFrame = (function () {
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var width = window.innerWidth;
var height = window.innerHeight;


//    -----------------------
//    the variable about time
var dt = 0;
var sumTime = 0;
var lastTime = new Date().getTime();
var curTime;

//    variable about function of loop
var loopStatus = true;

// detect the mobile of not.
var mobileStatus = false;
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
    mobileStatus = true;
}
