document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display weather info on the home page if applicable.
    if (document.getElementById('current-temp')) {
        fetchWeather();
    }
    
    // Load pricing data on the Rentals page if applicable.
    if (document.getElementById('pricing-table')) {
        loadPricing();
    }
});

function closeBanner() {
    const bannerContainer = document.getElementById('banner-container');
    if (bannerContainer) {
        bannerContainer.style.display = 'none';
    }
}

function fetchWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel,mx&appid=${apiKey}&units=metric`;

    // Current weather fetch
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(currentData => {
            document.getElementById('current-temp').innerText = currentData.main.temp + " °C";
            document.getElementById('current-humidity').innerText = currentData.main.humidity + "%";
            
            // Update banner with today's high temperature
            const banner = document.getElementById('weather-banner');
            if (banner) {
                banner.innerText = "Today's High: " + currentData.main.temp_max + " °C";
            }
            
            // Display each weather data point (icon, main, description)
            const weatherDetails = document.getElementById('weather-details');
            weatherDetails.innerHTML = "";
            currentData.weather.forEach(item => {
                const weatherItem = document.createElement('div');
                weatherItem.className = 'weather-item';
                weatherItem.innerHTML = `
                  <img src="http://openweathermap.org/img/wn/${item.icon}@2x.png" alt="${item.description}">
                  <strong>${item.main}</strong><br>
                  ${item.description}
                `;
                weatherDetails.appendChild(weatherItem);
            });
        })
        .catch(err => console.error("Error fetching current weather:", err));

    // Fetch forecast data for tomorrow at 15:00
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Cozumel,mx&appid=${apiKey}&units=metric`;
    fetch(forecastUrl)
        .then(response => response.json())
        .then(forecastData => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowDateStr = tomorrow.toISOString().split('T')[0];
            let forecastFound = false;
            forecastData.list.forEach(item => {
                if (!forecastFound && item.dt_txt.startsWith(tomorrowDateStr) && item.dt_txt.includes("15:00:00")) {
                    document.getElementById('tomorrow-temp').innerText = item.main.temp + " °C";
                    forecastFound = true;
                }
            });
        })
        .catch(err => console.error("Error fetching forecast:", err));
}

