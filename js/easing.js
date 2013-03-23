/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 3/1/13
 * Time: 10:23 AM
 * To change this template use File | Settings | File Templates.
 */

function easeLiner(rate, startVal, endVal){
    return rate * (endVal - startVal) + startVal;
}

function easeOutQuad(rate, startVal, endVal){
    return -1 * (endVal - startVal) * rate * (rate - 2) + startVal;
}