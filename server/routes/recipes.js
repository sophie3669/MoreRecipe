import express from 'express';
import {Recipe} from '../controller/recipes';
const recipeController = new Recipe()

let router = express.Router();
router.post('/', recipeController.add)
router.get('/', recipeController.getRecipe)
router.delete('/', recipeController.deleteRecipe)







export default router;
