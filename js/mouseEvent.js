/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 3/2/13
 * Time: 8:20 AM
 * To change this template use File | Settings | File Templates.
 */

// ==========================
// ==========================
// == setting the variable ==
// ==========================
// ==========================

var panel_wrappers = document.getElementsByClassName("panel_wrapper");
var details_remove = document.getElementsByClassName("detail_remove");
var detail_wrappers = document.getElementsByClassName("detail");

var main_panel = document.getElementById("main_panel");


var switcedRightTag;

var removePanelTag;


// ================================
// ================================
// == section.panels mouse event ==
// ================================
// ================================

for (var i = 0; i < panel_wrappers.length; i++) {
    var panel_wrapper = panel_wrappers[i];
    panel_wrapper.onmouseover = function (e) {
        if(removeFinishStatus) return;

        if (detailCheckStatus == false) {
            var target = e.target || e.srcElement;
            var targetParent = target.parentNode.parentNode;
            var targetPanels = targetParent.parentNode;

            targetParent.className = targetParent.className + " hover_top";
            targetPanels.className = targetPanels.className + ' tin';

            for (i = 0; i < panel_wrappers.length; i++) {

                if (targetParent == panel_wrappers[i]) {
                    if (i - 1 >= 0) {
                        panel_wrappers[i - 1].className = panel_wrappers[i - 1].className + " hover_left";
                    }

                    if (i + 1 <= panel_wrappers.length - 1) {
                        panel_wrappers[i + 1].className = panel_wrappers[i + 1].className + " hover_right";
                    }
                }

            }
        }

    }

    panel_wrapper.onmouseout = function (e) {
        if(removeFinishStatus){
            removeFinishStatus = false;
            return;
        }

        var target = e.target || e.srcElement
        var targetParent = target.parentNode.parentNode;
        var targetPanels = targetParent.parentNode;

        var targetClassName = targetParent.className;
        var targetPanelsName = targetPanels.className;



        if (detailCheckStatus == false) {

            for (i = 0; i < panel_wrappers.length; i++) {

                if (targetParent == panel_wrappers[i]) {
//                this is left side class
                    if (i - 1 >= 0) {
                        panel_wrappers[i - 1].className = panel_wrappers[i - 1].className.substr(0, panel_wrappers[i - 1].className.length - 11);
                    }

//                this is right side class
                    if (i + 1 <= panel_wrappers.length - 1) {
                        panel_wrappers[i + 1].className = panel_wrappers[i + 1].className.substr(0, panel_wrappers[i + 1].className.length - 12);
                    }
                }

            }


            var targetClassNameLength = targetClassName.length;
            targetParent.className = targetClassName.substr(0, targetClassNameLength - 10);


            var targetPanelsNameLength = targetPanelsName.length;
            targetPanels.className = targetPanelsName.substr(0, targetPanelsNameLength - 4);
        }


    }


    panel_wrapper.onmousedown = function (e) {


        if(detailSwitchAnimationStatus) return;
        if(removeFinishStatus) return;
        if (detailCheckStatus == false) {
            var details = document.getElementById("details");
            details.style.display = "block";

            var target = e.target || e.srcElement

            var targetParent = target.parentNode.parentNode;
            var targetParentID = targetParent.id;
            var targetClassName = targetParent.className;

            for (i = 0; i < panel_wrappers.length; i++) {

                if (targetParent == panel_wrappers[i]) {
//                this is left side class
                    if (i - 1 >= 0) {
                        panel_wrappers[i - 1].className = panel_wrappers[i - 1].className.substr(0, panel_wrappers[i - 1].className.length - 11);
                    }

//                this is right side class
                    if (i + 1 <= panel_wrappers.length - 1) {
                        panel_wrappers[i + 1].className = panel_wrappers[i + 1].className.substr(0, panel_wrappers[i + 1].className.length - 12);
                    }
                }

            }

            var targetClassNameLength = targetClassName.length;
            targetParent.className = targetClassName.substr(0, targetClassNameLength - 10);
            targetParent.className = targetParent.className + " selected";

//        use this varibable in
            removePanelTag = targetParent;


            detailCheckStatus = true;

            detailLoopStatus = true;
            detailAnimationStatus = true;

            var selectedDetailID = "detail_" + targetParentID;
            selectedDetail = document.getElementById(selectedDetailID);
            prevSwitchedDetail = selectedDetail;

            maxHeight = window.innerHeight - 135;
            startDetailTop = window.innerHeight;
            endDetailHeight = 600;

            main_panel.className = "panels detail_selected";

            if (maxHeight > 600) endDetailHeight = maxHeight;

            sumTime = 0;
            lastTime = new Date().getTime();


            detailLoop();

        }else{

            var target = e.target || e.srcElement

            var targetParent = target.parentNode.parentNode;
            var targetParentID = targetParent.id;

            var switchedDetailID = "detail_" + targetParentID;
            switchedDetail = document.getElementById(switchedDetailID);

            if(switchedDetail == prevSwitchedDetail){

                return;
            }






            maxHeight = window.innerHeight - 135;
            endSwitchHeight = 600;
            if(maxHeight > 600) endSwitchHeight = maxHeight;

            sumTime = 0;
            lastTime = new Date().getTime();

            detailLoopStatus = true;
            detailSwitchAnimationStatus = true;


            prevSwitchedDetail.style.zIndex = 1;
            switchedDetail.style.zIndex = 2;

            if(switcedRightTag != undefined){

                switcedRightTag.className = switcedRightTag.className.substr(0, switcedRightTag.className.length - 12);
                switcedRightTag = undefined;

            }

            targetParent.className = targetParent.className + " selected";
            removePanelTag.className = removePanelTag.className.substr(0, removePanelTag.className.length - 9);

            removePanelTag = targetParent;

            for (i = 0; i < panel_wrappers.length; i++) {

                if (targetParent == panel_wrappers[i]) {
                    ////                this is right side class
                    if (i + 1 <= panel_wrappers.length - 1) {

                        panel_wrappers[i + 1].className = panel_wrappers[i + 1].className + " hover_right";
                        switcedRightTag = panel_wrappers[i + 1]
                    }
                }


            }

            detailLoop();
//            from here, manipulate the targetParent


        }

    }
}


// ================================
// ================================
// == section.panels mouse event ==
// ================================
// ================================

for (var j = 0; j < details_remove.length; j++) {
    var detail_remove = details_remove[j];

    detail_remove.onmousedown = function (e) {


//        **** info ****
//        e.target -> icon
//        e.target.parentNode -> a tag
//        e.target.parentNode.parentNode -> <div class="detail_remove">
//        e.target.parentNode.parentNode.parentNode -> <div class="detailContent">
//        e.target.parentNode.parentNode.parentNode.parentNode -> <section class="detail red" id="detail_search">
//        e.target.parentNode.parentNode.parentNode.parentNode.parentNode -> <section id="details">

        main_panel.className = "panels";
        removePanelTag.className = removePanelTag.className.substr(0, removePanelTag.className.length - 9);

        detailLoopStatus = true;
        detailRemoveAnimationStatus = true;

        startRemoveDetailHeight = endDetailHeight;
        endRemoveDetailTop = window.innerHeight;

        sumTime = 0;
        lastTime = new Date().getTime();

        detailLoop();

        if(switcedRightTag != undefined){

            switcedRightTag.className = switcedRightTag.className.substr(0, switcedRightTag.className.length - 12);
            switcedRightTag = undefined;
        }


    }

}


// ================================
// ================================
// =====  mouse scroll event ======
// ================================
// ================================

//adding the event listerner for Mozilla
var scrollPosX = 0;
window.onscroll = function(e) {
    scrollPosX = window.pageXOffset;

    var detail_section_id = document.getElementById("details")
    detail_section_id.style.left = scrollPosX + "px";
}