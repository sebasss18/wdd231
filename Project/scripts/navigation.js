const navButton = document.querySelector('#ham-button');
const navBar = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});
