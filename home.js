let stringRecipes = JSON.stringify(
	[
		{
			title: "pizza",
			ingredients: ["dough", "salami", "cheese"],
			instructions: ["Need the dough", "add the salami and cheese", "bake in oven"]
		},
		{
			title: "pasta",
			ingredients: ["dough", "tomatoes", "cheese"],
			instructions: ["Need the dough", "add the tomatoes and cheese", "boil the pasta", "pour sauce"]
		},
	]
);

function deleteAllCards() {
	// TODO !!!
};

function makeUL(array) {
	// deleteAllCards();
    for(let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i].title)); // add to card from recipe array here!!!
		document.getElementById("recipe-list").appendChild(item);
    }
};

function submitRecipe() {
	const newRecipe = Array.from(document.querySelectorAll("#recipe-form input"))
	.reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
	newRecipe.ingredients = newRecipe.ingredients.split(",");
	newRecipe.instructions = newRecipe.instructions.split(",");
	window.recipes.push(newRecipe);
	makeUL(window.recipes);
}

function clearValues() {
	// TODO!!!
}

window.onload = function () {
	window.recipes = JSON.parse(stringRecipes);
    makeUL(recipes);
};


// TODO: left off at the bug that flashes the list and doesn't append to the list properly