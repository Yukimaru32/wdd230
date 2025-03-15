// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL for the OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.60&lon=140.13&units=imperial&appid=4cc6b6e86f3c86ff543a193a1f1963bb';

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