const cardsContainer = document.querySelector('.cards');

async function displayRecipes() {
  const response = await fetch('data/recipes.json');
  const data = await response.json();
  const recipes = data.recipes;

  cardsContainer.innerHTML = '';

  recipes.forEach(recipe => {
    const section = document.createElement('section');
    section.classList.add('full-recipe-card');

    section.innerHTML = `
      <img loading="lazy" src="${recipe.image || 'placeholder.jpg'}" alt="${recipe.name}" width="200px" height="auto">
      <h3>${recipe.name}</h3>
        <h4>Ingredients</h4>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h4>Steps</h4>
        <ul>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ul>
    `;

    cardsContainer.appendChild(section);
  });
}

displayRecipes();