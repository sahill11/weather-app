const city_name = document.querySelector("#city_name");
const min_cont = document.querySelector(".min-cont");
const weather_images = document.querySelector(".weather_img");

const api_Url = "https://api.openweathermap.org/data/2.5/weather?q="
const api_key = "c51d95ac473814054a72637d06fd0b8d"



async function checkWeather(city) {
    const response = await fetch(api_Url + `${city}&appid=` + `${api_key}`);
    const data = await response.json();
    console.log(data);

    if (data.cod == 404) {
        document.querySelector(".err_msg").innerHTML = data.message;
        min_cont.style.display ="none";
    }
    else {
        document.querySelector(".city_title").innerHTML = data.name;
        document.querySelector(".tempreture").innerHTML = Math.round(data.main.temp) + "&#176;C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"

        if (data.weather[0].main == "Clouds") {
            weather_images.src = "images/clouds.png"
        }

        else if(data.weather[0].main == "Rain"){
            weather_images.src = "images/rain.png"
        }

        else if(data.weather[0].main == "Clear"){
            weather_images.src = "images/rain.png"
        }

        else if(data.weather[0].main == "Mist"){
            weather_images.src = "images/mist.png"
        }

        else if(data.weather[0].main == "Drizzle"){
            weather_images.src = "images/drizzle.png"
        }

        else if(data.weather[0].main == "Snow"){
            weather_images.src = "images/snow.png"
        }

    }


}

function giveResult() {

    if (city_name.value === '') {
        alert("Please Enter City Name")
    }

    else {
        checkWeather(city_name.value);
        min_cont.style.display ="block";

    }


    city_name.value = '';
}

