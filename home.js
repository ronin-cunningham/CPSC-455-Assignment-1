let stringDatabaseRecipes = JSON.stringify(
	[
		{
			title: "Pizza",
			ingredients: ["dough", " salami", " cheese"],
			instructions: ["Knead the dough", " add the salami and cheese", " bake in oven"],
			uniqueId: Math.random().toString(16).slice(2)
		},
		{
			title: "Pasta",
			ingredients: ["dough", " tomatoes", " cheese"],
			instructions: ["Knead the dough", " add the tomatoes and cheese", " boil the pasta", " pour sauce"],
			uniqueId: Math.random().toString(16).slice(2)
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

function deleteRecipeCard(button) {
	const targetId = button.id;
	const recipes = updateDatabase();
	const newRecipes = recipes.filter(function(e) { return e.uniqueId !== targetId })
	updateDatabase(newRecipes);
	makeUL(document.getElementById("recipe-list"), newRecipes);
}

function makeRecipeCard(data) {
	let item = document.createElement('li');
	item.innerHTML = 
	`<div id="card-${data.uniqueId}" class="card">
		<div class="card-buttons">
			<button id="${data.uniqueId}" class="delete-card" onclick="deleteRecipeCard(this)"><b>X</b></button>
		</div>
		<div class="container">
			<div class="card-header">
				<h2><b>${data.title}</b></h2>
			</div>
			<div class="container">
				<div class="container">
					<h4>Ingredients</h4>
					<p>${data.ingredients}<p>
				</div>
				<div class="container">
				<h4>Instructions</h4>
				<p>${data.instructions}<p>
				</div>
			</div>
		</div>
	</div>`;
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
	newRecipe.uniqueId = Math.random().toString(16).slice(2);
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
