let stringDatabaseRecipes = JSON.stringify(
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

window.onload = function () {
	const recipes = updateDatabase(); // load from "database"
    makeUL(document.getElementById("recipe-list"), recipes);
};

// updates "database" if passed in new recipes array. Always returns current state of updated "database"
function updateDatabase(recipes) {
	if (recipes) {
		stringDatabaseRecipes = JSON.stringify(recipes);
	}
	return JSON.parse(stringDatabaseRecipes);
}

function deleteAllRecipeCards() {
	const recipes = updateDatabase([]);
	makeUL(document.getElementById("recipe-list"), recipes);
};

function makeRecipeCard(data) {
	// <li>
	// <div class="card">
	// 	<img src="img_avatar.png" alt="Avatar" style="width:100%">
	// 	<div class="container">
	// 		<h4><b>John Doe</b></h4>
	// 		<p>Architect & Engineer</p>
	// 	</div>
	// 	</div>
	// </li>
	let item = document.createElement('li');
	item.appendChild(document.createTextNode(data.title)); // TODO: add to card from recipe array here. Make sure to add a delete button for the "extra" thing requirement
	
	return item;
}

function makeUL(targetList, dataArray) {
	// Clear list before generating list
	while (targetList.firstChild) {
		targetList.removeChild(targetList.firstChild);
	}

	// Re-generate list
    for(const data of dataArray) {
		const card = makeRecipeCard(data);
		targetList.appendChild(card);
    }
};

function filled(newRecipe) {
	return (newRecipe.title.length > 0 && newRecipe.ingredients.length > 0 && newRecipe.instructions.length > 0);
}

function submitRecipe(event) {
	const newRecipe = Array.from(event.target.form.querySelectorAll("input"))
	.reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
	if (newRecipe.ingredients.length > 0) {
		newRecipe.ingredients = newRecipe.ingredients.split(",");
	}
	if (newRecipe.instructions.length > 0) {
		newRecipe.instructions = newRecipe.instructions.split(",");
	}
	if (filled(newRecipe) === true) {
		const recipes = updateDatabase();
		recipes.push(newRecipe);
		updateDatabase(recipes);
		makeUL(document.getElementById("recipe-list"), recipes);
		clearFormValues(event);
	}
}

function clearFormValues(event) {
	event.target.form.reset();
}

