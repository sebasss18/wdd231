const membershipModal = document.getElementById("membershipModal");

const membershipDetails = {
    NP: {
        title: "NP Membership",
        description: "Non-profit organizations. No cost. Access to public events."
    },
    Bronze: {
        title: "Bronze Membership",
        description: "Directory listing, event discounts, and limited advertising."
    },
    Silver: {
        title: "Silver Membership",
        description: "Priority listing, more event discounts, and monthly spotlight."
    },
    Gold: {
        title: "Gold Membership",
        description: "Premium listing, maximum exposure, and featured advertising."
    }
};

function displayMembershipDetails(level) {
    membershipModal.innerHTML = '';
    membershipModal.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${membershipDetails[level].title}</h2>
        <p>${membershipDetails[level].description}</p>
    `;

    membershipModal.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        membershipModal.close();
    });
}

document.querySelectorAll('.membership-cards button').forEach(button => {
    button.addEventListener('click', () => {
        displayMembershipDetails(button.dataset.level);
    });
});

const timestampField = document.querySelector('#timestamp');
timestampField.textContent = new Date().toISOString();