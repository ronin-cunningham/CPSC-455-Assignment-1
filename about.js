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

recipes = JSON.parse(stringRecipes);

recipes.push({asd: 123});
