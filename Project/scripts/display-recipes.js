const cardsContainer = document.querySelector('.cards');

async function displayRecipes() {
  const response = await fetch('data/recipes.json');
  const data = await response.json();
  const recipes = data.recipes;

  cardsContainer.innerHTML = '';

  recipes.forEach(recipe => {
    const section = document.createElement('section');
    section.classList.add('recipe-cards');

    section.innerHTML = `
      <img loading="lazy" src="${recipe.image || 'placeholder.jpg'}" alt="${recipe.name}" width="200px" height="auto">
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      <button data-id="${recipe.id}">View Recipe</button>
    `;
    const button = section.querySelector('button');
    button.addEventListener('click', () => {
    displayRecipeSteps(recipe.id);
    });
    cardsContainer.appendChild(section);
  });
}

displayRecipes();