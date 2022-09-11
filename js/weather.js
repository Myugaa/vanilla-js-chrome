const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "11fdeb22eb292e9aa17ec01dd78ec46f";

function onGeoOK(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `Currently: ${data.weather[0].main}, ${data.main.temp}°C @`;
    });
}
function onGeoError(){
  alert("Sorry, we can't locate you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);