const gtForm = document.querySelector(".js-nameForm"),
    gtInput = gtForm.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    tdForm = document.querySelector(".toDoForm");

const USER_LS = "currentUser",
    SHOWING_CN = "showing", // .showing {display : block;}
    HIDING_CN = "hiding";

function hideToDoForm () {
    tdForm.classList.add(HIDING_CN); // toDoForm 삭제
}

function saveName(text) {
    localStorage.setItem(USER_LS, text); // localStorage에 user 저장 
}

function handleSubmit(event) {
    event.preventDefault(); //event의 기본동작 제어 
    const currentValue = gtInput.value; // 현재의 value값을 얻기위해
    paintGreeting(currentValue); // 현재의 value값으로 인사하기
    saveName(currentValue); // localStorage에 user 저장
    tdForm.classList.remove(HIDING_CN); // toDoForm를 다시 보여주기위해 hiding 클래스 삭제

}

function askForName() {
    gtForm.classList.add(SHOWING_CN); // 이름을 요청하는 gtForm을 보여주기 위해서 showing 클래스 추가 
    gtForm.addEventListener("submit", handleSubmit);// submit 실행 시(enter쳤을 때), 새로고침되는 기본동작방지를 위해 이벤트 추가
}

function paintGreeting(text) {
    gtForm.classList.remove(SHOWING_CN); // form을 삭제하기위해, SHOWING_CN 삭제 
    greeting.classList.add(SHOWING_CN); // greeting을 보여주기 위해 SHOWING_CN 클래스 추가
    greeting.innerText = `Hello, ${text}!`; // greeting에 text 추가 
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        // localStorage에 저장된 유저가 없을 때, 유저의 이름을 물어본다.
        hideToDoForm(); // 이름이 입력되지않으면 todo 입력창 숨기기
        askForName();
        

    } else{
        // localStotage에 저장된 유저가 있을 때
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();