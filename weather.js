const apikey = "349317e247a0b80dca7e6d894de865f8";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "kmph";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
      icon.src = "media/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "media/sun.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "media/raining.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "media/dizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "media/foggy.png";
    }
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});

checkweather();
