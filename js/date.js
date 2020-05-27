const dateTitle = document.querySelector(".js-date"),
    DATETEXT1 = dateTitle.querySelector(".dateText1"),
    DATETEXT2 = dateTitle.querySelector(".dateText2");

function getDay() {
    const today = new Date();
    const years = today.getFullYear(); // 년도 가져오기
    const months = today.getMonth() + 1; // 월 가져오기
    const dates = today.getDate(); // 일 가져오기
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const days = week[today.getDay()]; // 요일 가져오기 

    DATETEXT1.innerText = `${days}`;
    DATETEXT2.innerText = `${years}.${months}.${dates}`;
}

function init() {
    getDay();
}

init();