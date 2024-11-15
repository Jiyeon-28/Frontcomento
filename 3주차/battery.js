let count = 100;

function updateCounter() {
    // `count`가 0 이상일 때만 감소시키고 업데이트
    if (count >= 0) {
        document.getElementsByClassName('battery')[0].textContent = `배터리 : ${count} %`;
        count--; // `count`를 1씩 감소
    }

    if (count == 0) {
        document.getElementsByClassName('time')[0].style.backgroundColor = 'black';  
    }
}

// 1초마다 카운터 업데이트
setInterval(updateCounter, 1000);

// 초기 호출
updateCounter();
