import { placesOfInterest } from "../data/discoverData.mjs";

function displayPlaces() {

    placesOfInterest.forEach(place => {
        const section = document.createElement('section');
        section.classList.add('place-card');

        section.innerHTML = `
        <div class:"place-card">
            <h2>${place.name}</h2>
            <figure><img src="images/${place.image}" alt="${place.name}"></figure>
            <p>${place.description}</p>
            <address>Address: ${place.address}</address>
            <button onclick="window.open('${place.url}', '_blank')">Learn more</button>
        </div>
        `;
    
        container.appendChild(section);
    });
}

const container = document.querySelector('.place-cards');
container.innerHTML = '';


displayPlaces();