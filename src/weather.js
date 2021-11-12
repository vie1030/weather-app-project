function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let highTemperatureElement = document.querySelector("#highTemperature");
  highTemperatureElement.innerHTML = Math.round(response.data.main.temp_max);
  let lowTemperatureElement = document.querySelector("#lowTemperature");
  lowTemperatureElement.innerHTML = Math.round(response.data.main.temp_min);
  let feelElement = document.querySelector("#feel");
  feelElement.innerHTML = Math.round(response.data.main.feels_like);
}

let apiKey = "867dcf6bb3756e0001b67ad06b6f1ecd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
