// VARIABLES
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-weather');
const captionDesc = document.querySelector('figcaption');

// API-KEY
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=29.07&lon=-110.99&units=metric&appid=b3f145e7b1b6fa6139d09b5719bc01f6';

// ASYNC FUNCTION
async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            displayResults(data);
            displayForecast(data);
        } else {
            const errorText = await response.text();
            throw new Error(errorText);
        }

    } catch (error) {
        console.log(error);
    }
}

//DISPLAY RESULTS FUNCTION
function displayResults(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}


//DISPLAY WEATHER FORECAST
function displayForecast(data) {
    let days = document.querySelector('#weather-forecast');
    days.innerHTML = '';
    for (let i = 8; i <= 24; i += 8) {
        const forecast = data.list[i];
        const date = new Date(forecast.dt * 1000);

        const dow = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = forecast.main.temp;

        days.innerHTML += `<p>${dow}: ${temp}&deg;C</p>`;
    }
}

apiFetch();