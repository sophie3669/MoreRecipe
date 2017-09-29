import express from 'express';
import {Recipe} from '../controller/recipes';
import {Review} from "../controller/reviews";
const recipeController = new Recipe()
const reviewController = new Review();

let router = express.Router();
router.post('/', recipeController.add);
router.put('/:Id', recipeController.put)
router.get('/', recipeController.getRecipe);
router.delete('/:Id', recipeController.deleteRecipe);
router.post('/reviews', reviewController.add);







export default router;
