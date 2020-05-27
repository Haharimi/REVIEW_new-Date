const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".clock_text"),
    amPm = clockContainer.querySelector(".amPm_text");

function getTime() {
    const time = new Date();
    let hours = time.getHours(); // 변수가 변하기때문에, const로 선언하면 error 발생
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
   
    if(hours >= 12) { // 시간이 12보다 클 떄, PM으로 변경 후, 12시간을 빼준다.
        amPm.innerText = 'PM';
        hours = hours - 12;
    }
        
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    //시간이 10보다 작으면 시간 앞에 0을 붙히도록 삼항연산자를 이용하여 표현 
    
}

function init() {
    getTime();
    setInterval(getTime, 1000); //1초 마다 getTime 함수 주기적으로 실행 

}

init();