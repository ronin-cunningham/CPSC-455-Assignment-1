function makeUL(array) {
    for(let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i].title)); // add to card from recipe array here!!!
		document.getElementById("recipe-list").appendChild(item);
    }
};

function submitRecipe() {

}

function clearValues() {

}

window.onload = function () {
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
	
	let recipes = JSON.parse(stringRecipes);
    makeUL(recipes);
};
