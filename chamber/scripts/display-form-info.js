const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
    <p><strong>Name:</strong> ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p><strong>Organizational Title:</strong> ${myInfo.get('organization-title')}</p>
    <p><strong>Phone:</strong> ${myInfo.get('phone')}</p>
    <p><strong>Email:</strong> ${myInfo.get('email')}</p>
    <p><strong>Business:</strong> ${myInfo.get('organization')}</p>
    <p><strong>Membership Level:</strong> ${myInfo.get('membership')}</p>
    <p><strong>Description:</strong> ${myInfo.get('description')}</p>
`;