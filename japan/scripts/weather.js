const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// global variable to hold the numeric temperature value
let currentTemperature = null;

// URL for the OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.60353&lon=140.16342&units=imperial&appid=4cc6b6e86f3c86ff543a193a1f1963bb';

// Asynchronous function to fetch current weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // for testing
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Display the current weather results and store the numeric temperature
function displayResults(data) {
  currentTemperature = data.main.temp; // save numeric value for wind chill calculations
  currentTemp.innerHTML = `Temperature: ${currentTemperature.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);

  // Update wind chill after temperature is set
  displayWindChillF();
}

// Invoke the API fetch function for current weather
apiFetch();

const forecastContainer = document.getElementById('weather-forecast');

// Fetch forecast data
async function fetchForecast() {
  const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=35.60353&lon=140.16342&units=imperial&appid=4cc6b6e86f3c86ff543a193a1f1963bb';
  try {
    const response = await fetch(forecastUrl);
    if (!response.ok) throw new Error(await response.text());
    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error('Error fetching forecast:', error);
  }
}

// Display the forecast data (filtered for forecasts around noon)
function displayForecast(data) {
  // Filter data for forecasts around noon each day and get the next 3 days
  const forecastList = data.list.filter(entry => entry.dt_txt.includes('12:00:00')).slice(0, 3);

  forecastList.forEach(forecast => {
    const date = new Date(forecast.dt_txt);
    const temp = forecast.main.temp.toFixed(0);
    const iconUrl = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    const desc = forecast.weather[0].description;

    const forecastItem = document.createElement('div');
    forecastItem.className = 'forecast-item';

    forecastItem.innerHTML = `
      <h4>${date.toLocaleDateString('en-US', { weekday: 'long' })}</h4>
      <img src="${iconUrl}" alt="${desc}" />
      <p>${temp}&deg;F - ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
    `;
    forecastContainer.appendChild(forecastItem);
  });
}

// Invoke forecast fetch
fetchForecast();

// -------------------------
// Wind Chill Functionality
// -------------------------
const windSpeedMph = 10; // in miles per hour

function calculateWindChillF(tempF, speedMph) {
  // Wind Chill (°F) = 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
  return (35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16)).toFixed(2);
}

function displayWindChillF() {
  // Ensure currentTemperature has been set from the API data
  if (currentTemperature !== null) {
    if (currentTemperature <= 50 && windSpeedMph > 3) {
      const windChill = calculateWindChillF(currentTemperature, windSpeedMph);
      document.getElementById("WindChill").textContent = `WindChill: ${windChill} °F`;
      document.getElementById("current-temp").textContent = `Temperature: ${currentTemperature.toFixed(0)} °F`;
      document.getElementById("wind").textContent = `Wind Speed: ${windSpeedMph} mph`;
    } else {
      document.getElementById("WindChill").textContent = 'WindChill: N/A';
      document.getElementById("current-temp").textContent = `Temperature: ${currentTemperature.toFixed(0)} °F`;
      document.getElementById("wind").textContent = `Wind Speed: ${windSpeedMph} mph`;
    }
  }
}
