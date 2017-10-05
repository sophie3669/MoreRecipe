let db = []

db.recipesdb = [{
 id:1,
 recipeName: "fried Rice",
 Category: "Continental dish",
 Ingredients: "rice, greenbean, green pepper, salt, sweetcorn"
},

{
id:2,
 recipeName: "Beans",
 Category: "AfricanDish",
 Ingredients: "Beans, oil, crayfish, salt"
},

{

 id: 3,
 recipeName: "PorridgeYam",
 Category: "AfricanDish",
 Ingredients: "yam, oil, crayfish"

}
 

];

db.reviews = [
{
	id: 1,
	recipeId: 1,
	userId: 3,
	review: 'this is a cool recipe'
},
{
	id: 2,
	recipeId: 1,
	userId: 3,
	review: 'Sorry what did I say again'
}
];

db.votes = [
	{
		id: 1,
		recipeId: 1,
		upVotes: [1, 2, 3],
		downVotes: [4]
	},
	]


export { db };
