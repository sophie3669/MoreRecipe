import {db} from '../models/recipedb';
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
    db.recipesdb.push(newRecipe);
    res.status(200).send(newRecipe);
     }

  getRecipe(req, res){
     res.status(200).send(db.recipesdb);

    } 
  deleteRecipe(req, res){
  	for(let i=0; i < db.recipesdb.length; i++){

  		if (parseInt(db.recipesdb[i].id,10) === parseInt(req.params.Id, 10)){
        db.recipesdb.splice(i, 1);
        return res.status(204).send({
          message: 'Recipe Deleted'
        });
      }
    }
    return res.status(404).send({
      message: 'Recipe Not found!'
    });    
}
  put(req, res) {
  const  id = req.params.Id;
  const { recipeName, category } = req.body;
  for (let i = 0; i < db.recipesdb.length; i++) {
    if (db.recipesdb[i].id === parseInt(id, 10)){
      db.recipesdb[i].recipeName = recipeName || db.recipes[i].recipeName;
      db.recipesdb[i].category = category || db.recipesdb[i].category;
      
      
      return res.status(200).send(db.recipesdb[i]);   
    } 
  }
  return res.status(404).send({
    message: 'Recipe Not found!'
  });
}
  
    
    
  }
  
export { Recipe };