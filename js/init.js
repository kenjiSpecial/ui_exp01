/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 3/1/13
 * Time: 8:11 AM
 * To change this template use File | Settings | File Templates.
 */

function init(){
    var panelWidth = 240;
    var panelWrappers = document.getElementsByClassName('panel_wrapper');


    for(var i = 0; i < panelWrappers.length; i++){
        panelWrappers[i].style.left = (panelWidth * i) + "px";
    }
}

init();