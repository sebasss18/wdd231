const membersFile = 'data/members.json';
const spotlightContainer = document.querySelector('#spotlight-cards');

async function getMembers() {
    const response = await fetch(membersFile);
    const data = await response.json();

    const filteredCompanies = data.filter(company => {
        return company.membershipLevel === 'Gold' || company.membershipLevel === 'Silver'
    });

    console.log(filteredCompanies);

    const shuffled = filteredCompanies.sort(() => 0.5 - Math.random());
    const count = Math.random() > 0.5 ? 2 : 3;
    const spotlights = shuffled.slice(0, count);

    console.log(spotlights);

    spotlights.forEach(company => {
        const section = document.createElement('section');
        section.classList.add('spotlight-card');

        section.innerHTML = `
        <h3>${company.companyName}</h3>

        <img src="images/${company.imageFile}" alt="${company.companyName}">
        <p>Phone: ${company.phone}</p>
        <p>Member Level: ${company.membershipLevel}</p>
        <a href="${company.websiteURL}" target="_blank">Visit Website</a>
        `;
    
        spotlightContainer.appendChild(section);
    });
}

getMembers();
