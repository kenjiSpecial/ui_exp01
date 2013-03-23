/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 2/28/13
 * Time: 8:09 PM
 * To change this template use File | Settings | File Templates.
 */

function loop() {
//        calculation of the time

    curTime = new Date().getTime();
    dt = (curTime - lastTime) / 1000;

    lastTime = curTime;
    sumTime += dt;


    if (headerCountLoopStatus) headerLoop();
    if (headerMoveLoopStatus) headerMoveLoop();

    if (loopStatus) requestAnimFrame(loop);
}

loop();


function detailLoop(){

    curTime = new Date().getTime();
    dt = (curTime - lastTime) / 1000;

    lastTime = curTime;
    sumTime += dt;

    if(detailAnimationStatus) detailAnimation();
    if(detailRemoveAnimationStatus) detailRemoveAnimation();
    if(detailSwitchAnimationStatus) detailSwitchingAnimation();


    if(detailLoopStatus) requestAnimFrame(detailLoop);
}
