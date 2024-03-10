/* The line `const apiKey = "your_api_key_here";` is declaring a constant variable named `apiKey` and
assigning it the value `"your_api_key_here"`. This is typically used as a placeholder to indicate
that the actual API key should be inserted in place of `"your_api_key_here"`. Developers should
replace this placeholder value with their actual API key obtained from the OpenWeatherMap API or any
other API being used in the code. */
const apiKey = "your_api_key_here";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/cloud.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/sun.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/snow.png";
        } else {
            weatherIcon.src = "img/cloud.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})