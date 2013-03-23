/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 3/2/13
 * Time: 8:19 PM
 * To change this template use File | Settings | File Templates.
 */


var selectedDetail;

var switchedDetail;
var prevSwitchedDetail;

var selectionsDetail = document.getElementById("details");

var detailLoopStatus = false; // status for detailLoop function.

// ---------------------------
// ---------------------------
// ----- detailAnimation -----
// ---------------------------
// ---------------------------

var detailAnimationStatus = false; // status for the detailAnimation for opening to see the content in the details area.
var detailCheckStatus = false; // stataus for the
var removeFinishStatus = false;

var height;

var startDetailHeight = 0;
var maxHeight;
var endDetailHeight;

var startDetailTop;
var endDetailTop = 135;


var detailMoveDelay = 0;
var detailAnimationDuration = .4;



function detailAnimation(){
    var rate = (sumTime - detailMoveDelay) / detailAnimationDuration;
    if(rate < 0) return;

    var currentHeight;
    var currentTop;

    if(rate > 1){
        currentHeight = endDetailHeight;
        currentTop = endDetailTop;
    }else{
        currentHeight = easeOutQuad(rate, startDetailHeight, endDetailHeight);
        currentTop = easeOutQuad(rate, startDetailTop, endDetailTop);

    }




    selectionsDetail.style.top = currentTop + "px";
    selectionsDetail.style.height = currentHeight + "px";
    selectedDetail.style.height = currentHeight + "px";


    if(rate > 1){
        detailAnimationStatus = false;
        detailLoopStatus = false;

    }
}


// ---------------------------
// ---------------------------
// -- detailRemoveAnimation --
// ---------------------------
// ---------------------------

var detailRemoveAnimationStatus;

var detailRemoveAnimationDuration = .3;


var startRemoveDetailHeight;
var endRemoveDetailHeight = 0;

var startRemoveDetailTop  = 135;
var endRemoveDetailTop;


function detailRemoveAnimation(){
    var rate = sumTime / detailRemoveAnimationDuration;
    if(rate < 0) return;

//    -----------

    var currentHeight;
    var currentTop;

    if(rate > 1){
        currentHeight = endRemoveDetailHeight;
        currentTop = endRemoveDetailTop;
    }else{
        currentHeight = easeLiner(rate, startRemoveDetailHeight, endRemoveDetailHeight);
        currentTop = easeLiner(rate, startRemoveDetailTop, endRemoveDetailTop);
    }

    selectionsDetail.style.top = currentTop + "px";
    selectionsDetail.style.height = currentHeight + "px";
    selectedDetail.style.height = currentHeight + "px";

    if(rate > 1){
        detailRemoveAnimationStatus = false;
        detailLoopStatus = false;

        detailCheckStatus = false;
        if(mobileStatus == false)         removeFinishStatus = true;


        selectionsDetail.style.display = "none";

        for (var j = 0; j < detail_wrappers.length; j++) {
            detail_wrappers[j].style.height = 0;
        }

    }

}

// ------------------------------
// ------------------------------
// -- detailSwitchingAnimation --
// ------------------------------
// ------------------------------


var detailSwitchAnimationStatus = false;

var detailSwitchAnimationDuration = .3;


var startSwitchHeight = 0;
var endSwitchHeight;


function detailSwitchingAnimation(){
    var rate = sumTime / detailSwitchAnimationDuration;
    if(rate < 0) return;

//    -----------
    var currentHeight;

    if(rate > 1){
        currentHeight = endSwitchHeight;
    }else{
        currentHeight = easeLiner(rate, startSwitchHeight, endSwitchHeight);
    }


    switchedDetail.style.height = currentHeight + "px";
    prevSwitchedDetail.style.height = (endSwitchHeight - currentHeight) + "px";
    prevSwitchedDetail.style.top = currentHeight + "px";


    if(rate > 1){

        detailSwitchAnimationStatus = false;
        detailLoopStatus = false;


        prevSwitchedDetail.style.height = "0";
        prevSwitchedDetail.style.top = "0";
        prevSwitchedDetail = switchedDetail;

    }

}