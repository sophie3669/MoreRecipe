import {recipesdb} from '../models/recipedb';
class Recipe{

	add(req, res){

		// const name = req.body.name;
		const {id, recipeName, category, ingredients} = req.body;
         if(!recipeName){

            return res.status(400).send({ meessage: "kindly add a recipe"});

         }
         if(!category){

         	return res.status(400).send({message: "you need to select a category"});
         }
        if(!ingredients){

        	return res.status(400).send({message: "your ingredients details will be well appreciated"});
        }

        let newRecipe ={

     recipeName: recipeName,
     category: category,
     ingredients: ingredients,

        }
    recipesdb.push(newRecipe);
    res.status(200).send(newRecipe);
     }

  getRecipe(req, res){
     res.status(200).send(recipesdb);

    } 
  deleteRecipe(req, res){
  	for(let i=0; i < recipesdb.length; i++){

  		if (recipesdb[i].Id === parseInt(req.params.userId, 3)){
        recipesdb.splice(i, 1);
        return res.status(204).send({
          message: 'Recipe Deleted'
        });
      }
    }
    return res.status(404).send({
      message: 'Recipe Not found!'
    });    
}
  
    
  }
  
export { Recipe };