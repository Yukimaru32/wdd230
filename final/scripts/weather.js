// Select DOM elements
const currentTemp = document.querySelector('#current-temp');
const currentMoisture = document.querySelector('#current-moisture');
const forecastContainer = document.getElementById('weather-forecast');

// Global variable to hold the numeric temperature value
let currentTemperature = null;

// URL for the OpenWeatherMap API (current weather)
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=35.60353&lon=140.16342&units=imperial&appid=4cc6b6e86f3c86ff543a193a1f1963bb';

// Asynchronous function to fetch current weather data
async function fetchCurrentWeather() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching current weather:", error);
  }
}

// Display the current temperature and moisture (humidity)
function displayCurrentWeather(data) {
  currentTemperature = data.main.temp;
  currentTemp.innerHTML = `Temperature: ${currentTemperature.toFixed(0)}°F`;
  currentMoisture.innerHTML = `Humidity: ${data.main.humidity}%`;
}

// Invoke the API fetch for current weather
fetchCurrentWeather();

// Asynchronous function to fetch forecast data
async function fetchForecast() {
  const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.60353&lon=140.16342&units=imperial&appid=4cc6b6e86f3c86ff543a193a1f1963bb';
  try {
    const response = await fetch(forecastUrl);
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error("Error fetching forecast:", error);
  }
}

// Display the one-day forecast for tomorrow at 3:00 PM
function displayForecast(data) {
  // Determine tomorrow's date in the format YYYY-MM-DD.
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDateStr = tomorrow.toISOString().split('T')[0];

  // Find the forecast entry for the next day at 15:00:00
  const forecastEntry = data.list.find(entry =>
    entry.dt_txt.startsWith(tomorrowDateStr) && entry.dt_txt.includes("15:00:00")
  );

  if (forecastEntry) {
    const forecastDate = new Date(forecastEntry.dt_txt);
    const forecastTemp = forecastEntry.main.temp.toFixed(0);
    const iconUrl = `https://openweathermap.org/img/w/${forecastEntry.weather[0].icon}.png`;
    const desc = forecastEntry.weather[0].description;

    forecastContainer.innerHTML = `
      <div class="forecast-item">
        <h4>Forecast for ${forecastDate.toLocaleDateString('en-US', { weekday: 'long' })} at 3 p.m.</h4>
        <img src="${iconUrl}" alt="${desc}" />
        <p>${forecastTemp}°F - ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
      </div>
    `;
  } else {
    forecastContainer.innerHTML = "<p>Forecast for tomorrow at 3:00 PM is not available.</p>";
  }
}

// Invoke the API fetch for forecast data
fetchForecast();