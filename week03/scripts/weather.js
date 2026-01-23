const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');

// API-KEY
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.60&units=metric&appid=b3f145e7b1b6fa6139d09b5719bc01f6';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json()
            displayResults(data);
        } else {
            const errorText = await response.text();
            throw new Error(errorText);
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDesc.textContent = desc;
}

apiFetch();