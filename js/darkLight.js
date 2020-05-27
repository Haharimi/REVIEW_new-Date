const darkLight_cb = document.querySelector(".darkLight_Cb");

function changeHandler () {
    document.body.classList.toggle('dark');
    
}

function init () {
    darkLight_cb.addEventListener("change", changeHandler);

}

init();