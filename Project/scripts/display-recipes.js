const container = document.querySelector('.cards');

async function displayRecipes() {
  const response = await fetch('data/recipes.json');
  const data = await response.json();
  const recipes = data.recipes;

  container.innerHTML = '';

  recipes.forEach(recipe => {
    const section = document.createElement('section');
    section.classList.add('recipe-card');

    section.innerHTML = `
      <h3>${recipe.name}</h3>
      <img src="${recipe.image || 'placeholder.jpg'}" alt="${recipe.name}">
      <p>${recipe.description}</p>
    `;

    container.appendChild(section);
  });
}

displayRecipes();