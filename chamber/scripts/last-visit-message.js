const messageDiv = document.querySelector('#lastVisitMessage');
const now = Date.now()
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    messageDiv.textContent = "Welcome! Let us know if you have any questions."
} else {
    const lastVisitTime = parseInt(lastVisit, 10);
    const diffMs = now - lastVisitTime;
    const diffDays = Math.floor(diffMs / (1000*60*60*24));

    if (diffDays < 1) {
        messageDiv.textContent = 'Back so soon! Awesome!'
    } else if (diffDays === 1){
        messageDiv.textContent = 'You last visited 1 day ago.'
    } else {
        messageDiv.textContent = `You last visited ${diffDays} days ago.`
    }

    localStorage.setItem('lastVisit', now);
}