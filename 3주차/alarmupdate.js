let alarmCount = 0;
const alarmMax = 3;

function alarmUpdateFuction() {

    if (alarmCount>= alarmMax) {
        alert("3개까지 작성할 수 있습니다.");
        return;
    }

    const alarmUpdateElem = document.getElementsByClassName('alarmupdate')[0];
    const message = document.createElement('div'); // 새 div 생성
    message.textContent = "알람이 업데이트되었습니다."; // 메시지 설정
    alarmUpdateElem.appendChild(message);

    var hour = updateHour();
    var min = updateMin();
    var sec = updateSec();

    const updatetime = `${hourCount}시 ${minCount}분 ${secCount}초`;
    const newAlarm = document.createElement('div'); // 새 div 생성
    newAlarm.textContent = updatetime; // 새 알람 내용 설정
    alarmUpdateElem.appendChild(newAlarm);
    alarmCount++;

    hourCount = 0;
    minCount = 0;
    secCount = 0;

}

//document.getElementsByClassName('alarmupdate')[0].textContent = alarmUpdateFuction();
