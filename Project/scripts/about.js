import './navigation.js';
import './date.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.about-form');
    const tsInput = document.getElementById('timestamp');
    if (!form || !tsInput) return;

    form.addEventListener('submit', () => {
        tsInput.value = new Date().toISOString();
    });
});