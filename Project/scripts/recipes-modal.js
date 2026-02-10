const membershipModal = document.getElementById("recipesModal");

const recipes = {
    1: {
        name: "Mole",
        steps: [
            "Toast dried chiles (pasilla, mulato, ancho) on a hot comal or skillet, being careful not to burn them to avoid bitterness.",
            "Soak the toasted chiles in hot water until softened, reserving the soaking liquid.",
            "Fry aromatics like garlic, onion, tomatoes, plantain, almonds, peanuts, sesame seeds, and spices such as cloves, cinnamon, and pepper until fragrant.",
            "Grind all ingredients together, adding the reserved chile soaking liquid slowly, to form a thick, smooth sauce.",
            "Simmer the sauce in a pot with chicken broth, adding Mexican chocolate and stirring constantly to prevent burning.",
            "Add cooked chicken pieces to the sauce and let them simmer for a while to absorb the rich flavors before serving."
        ]
    },
    2: {
        name: "Tacos al Pastor",
        steps: [
            "Make a marinade by blending achiote paste, pineapple juice, garlic, vinegar, and spices like cumin, oregano, and chili powder.",
            "Marinate thin slices of pork shoulder in the mixture for at least 4 hours or overnight in the fridge.",
            "Stack the marinated meat on a vertical spit, layering with fresh pineapple slices in between.",
            "Cook the meat slowly on a rotating spit near a heat source until it's tender, slightly charred, and caramelized.",
            "Slice the cooked meat thinly off the spit and warm it briefly on a hot griddle.",
            "Serve the meat on warm corn tortillas, topped with diced onion, chopped cilantro, pineapple chunks, and your choice of salsa."
        ]
    },
    3: {
        name: "Chiles Rellenos",
        steps: [
            "Roast poblano peppers directly over an open flame or on a comal until their skins blister and blacken.",
            "Place the roasted peppers in a covered container or plastic bag to steam for 15 minutes, which helps loosen the skins.",
            "Peel off the charred skin carefully, then make a slit to remove seeds and veins without tearing the pepper.",
            "Fill the peppers with your choice of cheese (like queso Oaxaca) or seasoned ground meat.",
            "Separate eggs and beat the egg whites until stiff peaks form, then gently fold in the yolks to make a fluffy batter.",
            "Dip the stuffed peppers into the egg batter, then fry in hot oil until golden and puffed.",
            "Serve hot with a freshly made tomato sauce or salsa ranchera."
        ]
    },
    4: {
        name: "Pozole",
        steps: [
            "Soak dried hominy (nixtamalized corn) overnight, then cook it with calcium hydroxide (lime) to remove the hulls until kernels 'pop' open and become tender.",
            "Simmer pork or chicken with garlic, onion, bay leaves, and salt until the meat is tender and flavorful.",
            "Prepare a red chili sauce by rehydrating guajillo and ancho chiles, then blending them with garlic, onion, and spices.",
            "Combine the cooked hominy, meat, and chili sauce in a large pot, simmering gently to marry the flavors.",
            "Serve pozole garnished with shredded lettuce or cabbage, sliced radishes, chopped onion, dried oregano, lime wedges, and tostadas."
        ]
    },
    5: {
        name: "Tamales",
        steps: [
            "Prepare masa dough by mixing masa harina (corn flour), warm broth (usually chicken), melted lard or vegetable shortening, baking powder, and salt until smooth and fluffy.",
            "Make your filling, such as shredded pork cooked in red or green sauce, cheese with chilies, or sweet fillings.",
            "Soak dried corn husks in warm water to soften them for wrapping.",
            "Spread a thin layer of masa on the smooth side of each husk, add a spoonful of filling in the center, then fold the husk to enclose the tamal.",
            "Arrange tamales standing upright in a steamer and steam for 1 to 2 hours, checking occasionally to add water and avoid burning.",
            "Tamales are done when the masa separates easily from the husk and feels firm to the touch."
        ]
    },
    6: {
        name: "Enchiladas",
        steps: [
            "Prepare a chili sauce by simmering dried chiles with tomatoes, garlic, and spices, then blend until smooth.",
            "Soften corn tortillas by briefly frying or dipping in warm oil to make them pliable.",
            "Fill each tortilla with shredded chicken, cheese, or refried beans.",
            "Roll the tortillas tightly and place them seam-side down in a baking dish.",
            "Pour the chili sauce evenly over the rolled enchiladas, sprinkle with cheese, and bake until bubbly and the cheese is melted."
        ]
    },
    7: {
        name: "Guacamole",
        steps: [
            "Mash ripe avocados with a fork or molcajete until smooth but slightly chunky.",
            "Add freshly squeezed lime juice to prevent browning and add brightness.",
            "Mix in finely chopped white onion, diced tomato, chopped cilantro, and minced serrano chili (optional for heat).",
            "Season with salt to taste.",
            "Serve immediately with tortilla chips or as a side for tacos."
        ]
    },
    8: {
        name: "Quesadillas",
        steps: [
            "Heat a corn or flour tortilla on a hot skillet over medium heat.",
            "Sprinkle shredded cheese (like Oaxaca or Chihuahua) evenly over half the tortilla.",
            "Add optional fillings such as cooked chicken, mushrooms, or squash blossoms.",
            "Fold the tortilla over the fillings and cook until the cheese melts and the tortilla is golden brown on both sides.",
            "Serve hot with salsa, sour cream, or guacamole."
        ]
    },
    9: {
        name: "Sopes",
        steps: [
            "Prepare a thick masa dough and shape it into small, round, flat discs about 1/4 inch thick.",
            "Cook the discs on a hot griddle or skillet until they develop a slight crust on each side.",
            "Pinch the edges of each disc upward to form a raised border that holds toppings.",
            "Top the sopes with refried beans, shredded meat, shredded lettuce, crumbled cheese, Mexican crema, and salsa.",
            "Serve immediately to enjoy the contrast of crunchy exterior and soft interior."
        ]
    },
    10: {
        name: "Tostadas",
        steps: [
            "Fry corn tortillas in hot oil until crisp and golden brown, then drain excess oil on paper towels.",
            "Spread a layer of refried beans evenly over each crispy tortilla.",
            "Add cooked shredded meat, chicken, or seafood on top of the beans.",
            "Garnish with shredded lettuce or cabbage, crumbled queso fresco, diced tomatoes, sliced avocado, and a drizzle of Mexican crema.",
            "Serve as a crunchy, flavorful snack or light meal."
        ]
    }
};

function displayRecipeSteps(id) {
    const modal = membershipModal;
    const recipe = recipes[id];
    modal.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${recipe.name}</h2>
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