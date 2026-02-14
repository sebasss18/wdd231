import { displayRecipeSteps } from './recipes-modal.js';

const container = document.querySelector('.featured-recipe');

async function displayRecipes() {
    const response = await fetch('data/recipes.json');
    const data = await response.json();
    const recipes = data.recipes;

    let index = localStorage.getItem('recipeIndex');
    if (index === null) {
        index = 0;
    } else {
        index = Number(index);
    }

    container.innerHTML = '';

    const recipe = recipes[index];
    const section = document.createElement('section');
    section.classList.add('card');

    section.innerHTML = `
    <img src="${recipe.image || 'placeholder.jpg'}" alt="${recipe.name}">
        <div class="featured">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button data-id="${recipe.id}">View Recipe</button>
        </div>
    `;
    const button = section.querySelector('button');
    button.addEventListener('click', () => {
        displayRecipeSteps(Number(recipe.id));
    });

    container.appendChild(section);

    index = (index + 1) % recipes.length;
    localStorage.setItem('recipeIndex', index);
}

displayRecipes();