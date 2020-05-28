const darkLight_cb = document.querySelector(".darkLight_Cb");
const OUTBOX = document.querySelector(".outBox");

function changeHandler () {
    OUTBOX.classList.toggle('darkMode');
    
}

function init () {
    darkLight_cb.addEventListener("change", changeHandler);

}

init();