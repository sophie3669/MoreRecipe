//import Recipes from '../models/recipes';
class Recipe{

	static test(req, res){
		return res.status(200).send({
			message: "Hello world"
		})

	}

}

export default Recipe;