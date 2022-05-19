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
	window.recipes = [];
	makeUL(window.recipes);
};

function makeUL(targetList, data) {
	// Clear list
	while (targetList.firstChild) {
		targetList.removeChild(targetList.firstChild);
	}

	// Re-generate list
    for(let i = 0; i < data.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(data[i].title)); // add to card from recipe array here!!!
		targetList.appendChild(item);
    }
};

function filled(newRecipe) {
	return (newRecipe.title.length > 0 && newRecipe.ingredients.length > 0 && newRecipe.instructions.length > 0);
}

function submitRecipe() {
	const newRecipe = Array.from(document.querySelectorAll("#recipe-form input"))
	.reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
	if (newRecipe.ingredients.length > 0) {
		newRecipe.ingredients = newRecipe.ingredients.split(",");
	}
	if (newRecipe.instructions.length > 0) {
		newRecipe.instructions = newRecipe.instructions.split(",");
	}
	if (filled(newRecipe) === true) {
		window.recipes.push(newRecipe);
		makeUL(document.getElementById("recipe-list"), window.recipes);
	}
}

function clearFormValues() {
	// TODO!!!
}

window.onload = function () {
	window.recipes = JSON.parse(stringRecipes);
    makeUL(document.getElementById("recipe-list"), recipes);
};

