var hourCount = 0;
var minCount = 0;
var secCount = 0;


function updateHour() {

    if (hourCount>=24) {
        hourCount =1;
    }
    else {
        hourCount++;
    }

   document.getElementsByClassName('alarmsetupHour')[0].textContent = `${hourCount}시`;
}
document.getElementById('hourCount').addEventListener('click', updateHour);



function updateMin() {

    if (minCount >= 60) {
        minCount = 0;
    }
    else {
        minCount++;
    }
    document.getElementsByClassName('alarmsetupMin')[0].textContent = `${minCount}분`;

}
document.getElementById('minCount').addEventListener('click', updateMin);
function updateSec() {

    if (secCount >= 60) {
        secCount = 0;
    }
    else {
        secCount++;
    }
    document.getElementsByClassName('alarmsetupSec')[0].textContent = `${secCount}초`;

}
document.getElementById('secCount').addEventListener('click', updateSec);

function updatealarm() {

    alarmUpdateFuction();

    document.getElementsByClassName('alarmsetupHour')[0].textContent = ``;
    document.getElementsByClassName('alarmsetupMin')[0].textContent = ``;
    document.getElementsByClassName('alarmsetupSec')[0].textContent = ``;

    
}
document.getElementById('add').addEventListener('click', updatealarm);


