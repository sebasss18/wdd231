const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () =>{
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () =>{
    display.classList.remove("grid");
    display.classList.add("list");
});

async function displayCompanies() {
    const response = await fetch('data/members.json');
    const companies = await response.json();
    companies.forEach(company => {
        const section = document.createElement('section');
    
        section.innerHTML = `
        <h3>${company.companyName}</h3>

        <img src="images/${company.imageFile}" alt="${company.companyName}">
        <p>Phone: ${company.phone}</p>
        <a href="${company.websiteURL}" target="_blank">Visit Website</a>
        `;
    
        container.appendChild(section);
    });
}

const container = document.querySelector('.cards');
container.innerHTML = '';


displayCompanies();