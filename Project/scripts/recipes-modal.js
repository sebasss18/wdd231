const membershipModal = document.getElementById("recipesModal");

const recipes = {
  1: {
    name: "Mole",
    ingredients: [
      "4 dried chiles (pasilla, mulato, ancho)",
      "2 cloves garlic",
      "1 small onion",
      "2 tomatoes",
      "1 small plantain",
      "2 tbsp almonds",
      "2 tbsp peanuts",
      "1 tbsp sesame seeds",
      "1/2 tsp ground cloves",
      "1/2 tsp cinnamon",
      "1/4 tsp black pepper",
      "1 cup chicken broth",
      "50g Mexican chocolate",
      "4 cooked chicken pieces",
      "Salt to taste",
      "Vegetable oil for frying"
    ],
    steps: [
      "Toast dried chiles on a hot skillet without burning them.",
      "Soak the toasted chiles in hot water until soft.",
      "Fry garlic, onion, tomatoes, plantain, nuts, seeds, and spices.",
      "Blend everything with the soaking liquid until smooth.",
      "Simmer the sauce with chicken broth and chocolate.",
      "Add chicken and cook until flavors combine."
    ]
  },

  2: {
    name: "Tacos al Pastor",
    ingredients: [
      "500g pork shoulder, thinly sliced",
      "2 tbsp achiote paste",
      "1/2 cup pineapple juice",
      "2 cloves garlic",
      "2 tbsp vinegar",
      "1 tsp cumin",
      "1 tsp oregano",
      "1 tsp chili powder",
      "Fresh pineapple slices",
      "Corn tortillas",
      "Onion and cilantro",
      "Salsa"
    ],
    steps: [
      "Blend achiote, pineapple juice, garlic, vinegar, and spices.",
      "Marinate pork for at least 4 hours.",
      "Cook the pork until caramelized.",
      "Slice meat thinly.",
      "Warm tortillas.",
      "Serve with onion, cilantro, pineapple, and salsa."
    ]
  },

  3: {
    name: "Chiles Rellenos",
    ingredients: [
      "6 poblano peppers",
      "200g melting cheese",
      "4 eggs",
      "Vegetable oil",
      "Salt",
      "Tomato sauce"
    ],
    steps: [
      "Roast peppers until skins blister.",
      "Steam peppers and peel skins.",
      "Remove seeds carefully.",
      "Stuff with cheese.",
      "Prepare egg batter.",
      "Fry until golden.",
      "Serve with tomato sauce."
    ]
  },

  4: {
    name: "Pozole",
    ingredients: [
      "2 cups hominy",
      "500g pork or chicken",
      "2 cloves garlic",
      "1 onion",
      "Bay leaves",
      "Guajillo and ancho chiles",
      "Oregano",
      "Salt",
      "Lettuce, radish, lime"
    ],
    steps: [
      "Cook hominy until tender.",
      "Boil meat with garlic and onion.",
      "Blend rehydrated chiles into sauce.",
      "Combine hominy, meat, and sauce.",
      "Simmer gently.",
      "Serve with toppings."
    ]
  },

  5: {
    name: "Tamales",
    ingredients: [
      "2 cups masa harina",
      "1 1/2 cups broth",
      "1/2 cup lard",
      "Baking powder",
      "Salt",
      "Filling of choice",
      "Corn husks"
    ],
    steps: [
      "Mix masa with broth and lard.",
      "Prepare filling.",
      "Soak corn husks.",
      "Spread masa and add filling.",
      "Fold husks.",
      "Steam for 1–2 hours."
    ]
  },

  6: {
    name: "Enchiladas",
    ingredients: [
      "Corn tortillas",
      "2 cups enchilada sauce",
      "Shredded chicken or cheese",
      "Onion",
      "Crema",
      "Cheese"
    ],
    steps: [
      "Warm tortillas.",
      "Dip tortillas in sauce.",
      "Fill with chicken or cheese.",
      "Roll tortillas.",
      "Top with sauce.",
      "Bake until hot.",
      "Serve with crema and cheese."
    ]
  },

  7: {
    name: "Guacamole",
    ingredients: [
      "3 ripe avocados",
      "1 lime",
      "1/4 onion",
      "1 tomato",
      "Cilantro",
      "Salt"
    ],
    steps: [
      "Mash avocados.",
      "Add lime juice.",
      "Mix onion, tomato, and cilantro.",
      "Season with salt.",
      "Serve immediately."
    ]
  },

  8: {
    name: "Quesadillas",
    ingredients: [
      "Corn or flour tortillas",
      "Cheese",
      "Optional meat or vegetables"
    ],
    steps: [
      "Heat tortilla.",
      "Add cheese and filling.",
      "Fold tortilla.",
      "Cook until cheese melts.",
      "Serve hot."
    ]
  },

  9: {
    name: "Sopes",
    ingredients: [
      "Masa harina",
      "Beans",
      "Meat",
      "Lettuce",
      "Cheese",
      "Salsa"
    ],
    steps: [
      "Form thick tortillas.",
      "Cook on griddle.",
      "Pinch edges.",
      "Fry lightly.",
      "Top with beans and toppings.",
      "Serve warm."
    ]
  },

  10: {
    name: "Tostadas",
    ingredients: [
      "Corn tortillas",
      "Beans",
      "Meat or seafood",
      "Lettuce",
      "Crema",
      "Cheese"
    ],
    steps: [
      "Fry tortillas until crispy.",
      "Spread beans.",
      "Add meat.",
      "Top with lettuce, crema, and cheese.",
      "Serve immediately."
    ]
  }
};

function displayRecipeSteps(id) {
    const modal = membershipModal;
    const recipe = recipes[id];
    modal.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${recipe.name}</h2>
        <h3>Ingredients</h3>
        <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Steps</h3>
        <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
    modal.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
    modal.close();
    });
}

document.querySelectorAll('.recipe-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        displayRecipeSteps(button.dataset.id);
    });
});