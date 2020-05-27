const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "66d632d1a097f94e3d72d426acdef5f6";

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`) // 서버에 요청
    .then(function(response){ // 첫번째 인자는 response로 받는다 
        return response.json(); 
        // 요청에 대한 응답을 JSON형태로 파싱
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${Math.floor(temperature)}℃, ${place}`;
        //js데이터를 body에 보여준다 
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj)); 
    //localstorage의 key, value 값은 모두 string 타입으로 저장되기때문에 변환시켜준다. number -> string
}

function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = { // 객체의 key,  value 값이 동일할 때에는 한번만 써줘도 된다.
        latitude,       // localStorage에 객체로 value에 저장하기위해서 객체에 넣어준다.    
        longitude
    };
    saveCoords(coordsObj); // localStorage에 위치 저장 
    getWeather(latitude, longitude); // 날씨 가져오기

}

function handleError() {
    console.log('cant not access to location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) { 
        // localStorage에 좌표값이 저장되어있지않다면
        askForCoords(); // 좌표값을 물어본다
    } else { 
        //  좌표값이 있다면, 날씨를 가져온다
        const parseCoords = JSON.parse(loadedCoords); // localStorage은 striong 으로 저장되기때문에 json객체로 변환시켜준다
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();