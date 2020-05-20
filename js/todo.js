const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    resetBtn = document.querySelector("button");

const TODOS_LS = 'toDos',
    CHECKED_TEXT = 'checked';

let toDos = [];

function text_decorate () {
    console.log("hi");
    liText.classList.add(CHECKED_TEXT);
}

function deleteList(event) {
    const ul = document.querySelector("ul");
    ul.innerHTML = ''; // HTML상에서 리스트 삭제 
    toDos = []; // localStorage의 toDos를 빈배열로 reset, localStorage 상에서 리스트 삭제
    saveToDos(); // 초기화된 toDos 저장 
    alert('to-do 리스트를 초기화하시겠습니까?');
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
    // localStorage에 key값은 todos, value값에 toDos 배열을 넣어준다
    // localstorage는 모든 값이 string 타입으로 저장되기때문에, toDos를 JSON.stringify를 통해 string 타입으로 변환하여 저장한다.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    const span = document.createElement("span");
    checkBox.setAttribute("type", "checkbox");
    const newId = toDos.length + 1;
    span.innerText = text; 
    li.appendChild(checkBox); // li에 checkBox 자식요소로 추가 
    li.appendChild(span); // li에 span 자식요소로 추가 
    li.id = newId; //li에 id 추가하기 
    toDoList.appendChild(li); //toDoList에 li 자식요소로 추가 
    const toDoObj = {
        text : text,
        id : newId //toDos가 빈 배열일 때 1로 표시
    };
    toDos.push(toDoObj); // toDOs배열에 toDoObj 추가 
    saveToDos(); // toDos 저장 
    checkBox.onclick = function() {
        if (checkBox.checked === true) {
            //체크박스가 체크 활성화일때는 checked 클래스 추가 
            span.classList.add(CHECKED_TEXT); 
        } else {
            //체크박스 체크 비활성화일때는 checked 클래스 삭제 
            span.classList.remove(CHECKED_TEXT);
        }
    };
}

function handleSubmit(event) {
    event.preventDefault(); // submit의 기본동작 제어 , refresh 방지
    const currentValue = toDoInput.value; // value값 가져오기 
    paintToDo(currentValue);
    toDoInput.value = ''; //submit처럼 값을 보냈을 때 Input의 value값을 초기화시켜주는 효과 
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        //locaslStorage에 저장된 데이터가 있다면
        const parsedToDos = JSON.parse(loadedToDos); // localStorage는 string으로 저장되기때문에 object로 변환해줌 
        parsedToDos.forEach(function(toDo) { 
        // forEach(), 배열의 각각 요소에 함수를 적용하는 것     
            paintToDo(toDo.text);
        })
    }

}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    resetBtn.addEventListener("click", deleteList);
}

init();