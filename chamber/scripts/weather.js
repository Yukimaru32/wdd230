// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL for the OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.60353&lon=140.16342&units=imperial&appid=4cc6b6e86f3c86ff543a193a1f1963bb';

// Asynchronous function to fetch data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // for testing

      // Display data in HTML
      displayResults(data);

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Display results function
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

// Invoke API fetch function
apiFetch();

const forecastContainer = document.getElementById('weather-forecast');

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

function displayForecast(data) {
  // Clear the forecast container first


  // Filter data for forecasts around noon each day
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

