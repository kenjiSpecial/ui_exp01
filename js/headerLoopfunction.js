/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 2/28/13
 * Time: 9:46 PM
 * To change this template use File | Settings | File Templates.
 */
// ----------------
// getElement for dom

var header = document.getElementById('header');
var headerSentence = document.getElementById("headerSentence");
var backgroundId = document.getElementById("open_background");



// ----------------
// variables for headerInit() function
var headerTopPosition;
var headerHeight = 70;


// ----------------
// variables for headerLoop() function
var headerCountLoopStatus = true;

var headerSentenceString = "Tour Google for a world of difference in how you search";
var headerSentenceNumber = headerSentenceString.length;
var headerSentenceCount = 0;

var headerSentenceTimeCount = 0.01;
var headerSentenceStartTime = 2;
var headerSentenceFinishTime;


// ----------------
// variables for headerMoveLoop() function
var headerMoveLoopStatus = false;

var headerMoveDelay = .6;
var headerMoveDuration = 0.8;

var startHeight;
var endHeight = 80;


// initializing header tag

headerInit();


function headerInit(){
    var headerLeftPosition = 60;

    headerTopPosition = (height - headerHeight)/3;

    header.style.left = headerLeftPosition + "px";
    header.style.top = headerTopPosition + "px";
}


function headerLoop(){

    if(sumTime < headerSentenceStartTime){
        var blicking = (((sumTime * 4) |0 ) % 2);

            if(blicking == 0){
                headerSentence.style.opacity = '0';
            }else{
                headerSentence.style.opacity = '100';
            }

        return;
    }else{
        headerSentence.style.opacity = '100';
    }


    headerSentenceCount = ((sumTime - headerSentenceStartTime)/headerSentenceTimeCount)|0;
    if(headerSentenceCount > headerSentenceNumber){
        headerCountLoopStatus = false;
        headerSentenceFinishTime = sumTime;

        headerMoveLoopStatus = true;
        headerSentence.textContent = headerSentenceString;
        startHeight = (height * .98)|0;

        return;
    }



    if( sumTime > headerSentenceStartTime){
        headerSentence.textContent = headerSentenceString.substring(0, headerSentenceCount) + "|";
    }
}


function headerMoveLoop(){

    var headerMoveLoopTime = sumTime - headerSentenceFinishTime - headerMoveDelay;
    if(headerMoveLoopTime < 0) return;

    var rate = headerMoveLoopTime / headerMoveDuration;

    var currentHeight;
    if(rate > 1) currentHeight = endHeight;
    else currentHeight = easeOutQuad(rate, startHeight, endHeight);

    if(currentHeight < headerTopPosition + headerHeight + 5) header.style.top = (currentHeight - headerHeight + 5) + "px";


    backgroundId.style.height = currentHeight + "px";

    if(rate > 1){
        headerMoveLoopStatus = false;
        loopStatus = false;
    }

}