const temperature = 10;//in celcius
const windSpeed = 5;//km/h

function calculateWindChill(temp, speed){
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
}

function displayWindChill(){

    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate and display wind chill
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("WindChill").textContent = `WindChill: ${windChill} °C`;
        document.getElementById("temp").textContent =`Temprature: ${temperature} °C`;
        document.getElementById("wind").textContent=`Wind Speed: ${windSpeed} km/h`;
    } else {
        // Display "N/A" if conditions are not met
        document.getElementById("WindChill").textContent = 'WindChill: N/A';
        document.getElementById("temp").textContent =`Temprature: ${temperature} °C`;
        document.getElementById("wind").textContent=`Wind Speed: ${windSpeed} km/h`;
    }
}
document.addEventListener('DOMContentLoaded', displayWindChill);