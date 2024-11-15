function updatetime() {
    var now = new Date();
    var date = ["일", "월", "화", "수", "목", "금", "토"];
    var dayofWeek = date[now.getDay()];
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    var hour = now.getHours();
    var minute = now.getMinutes().toString().padStart(2, '0');
    var second = now.getSeconds().toString().padStart(2, '0');

    let ampm = 'AM';
    let displayhour = hour;

    // AM/PM 설정 및 12시간 형식으로 변환
    if (hour >= 12) {
        ampm = 'PM';
        displayhour = hour % 12 || 12; // 0일 때 12로 설정
    }

    const timeString = `${year}-${month}-${day} (${dayofWeek}) ${displayhour}:${minute}:${second} ${ampm}`;
    document.getElementsByClassName('time')[0].textContent = timeString;
}

// 1초마다 시간 업데이트
setInterval(updatetime, 1000);

updatetime(); // 초기 호출
