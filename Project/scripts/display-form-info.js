const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
    <p><strong>Name:</strong> ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p><strong>Phone:</strong> ${myInfo.get('phone')}</p>
    <p><strong>Email:</strong> ${myInfo.get('email')}</p>
    <p><strong>Favorite Dish:</strong> ${myInfo.get('dish')}</p>
    <p><strong>Date Submitted:</strong> ${myInfo.get('timestamp')}</p>
`;