const dateTitle = document.querySelector(".js-date");

function getDay() {
    const today = new Date();
    const years = today.getFullYear(); // 년도 가져오기
    const months = today.getMonth() + 1; // 월 가져오기
    const dates = today.getDate(); // 일 가져오기
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const days = week[today.getDay()]; // 요일 가져오기 

    dateTitle.innerText = `${years}년 ${months}월 ${dates}일 ${days}`
}

function init() {
    getDay();
}

init();