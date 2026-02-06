import { placesOfInterest } from "../data/discoverData.mjs";

function displayPlaces() {
    const fragment = document.createDocumentFragment();

    placesOfInterest.forEach((place, index) => {
        const section = document.createElement('section');
        section.classList.add('place-card');

        section.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
            <img src="images/${place.image}" alt="${place.name}" width="350" height="250" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
            </figure>
            <p>${place.description}</p>
            <address>Address: ${place.address}</address>
                        <button class="btn" onclick="window.open('${place.url}', '_blank')">Learn more</button>
        `;

        fragment.appendChild(section);
    });

    container.appendChild(fragment);
}

const container = document.querySelector('.place-cards');
container.innerHTML = '';

displayPlaces();