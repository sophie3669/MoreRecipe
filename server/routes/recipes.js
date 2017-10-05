import express from 'express';
import MoreRecipes from '../controller';
// import { Review } from "../controller/reviews";
const recipes = MoreRecipes.recipesController;
// const recipeController = new Recipe();
// const reviewController = new Review();

const router = express.Router();
router.post('/api/recipes', recipes.add);

router.put('/api/recipes/:recipeId', recipes.update);
// router.delete('/api/recipes/:recipeId', recipes.delete);
// router.get('/api/recipes', recipes.getRecipe);

//router.put('/api/recipes/:recipeId', recipes.update);
//router.delete('/api/recipes/:recipeId', recipes.delete);
//router.get('/api/recipes', recipes.getRecipe);
// router.post('/api/recipes/:recipeId/reviews', recipes.reviewRecipe);
// router.post('/api/recipes/:recipeId/vote', recipes.vote);

export default router;
