import express from 'express';
// import { Recipe } from '../controller/recipes';
import { MoreRecipe } from '../controller/recipeController';
// import { Review } from "../controller/reviews";

// const recipeController = new Recipe();
// const reviewController = new Review();
const MoreRecipes = new MoreRecipe();

const router = express.Router();
router.post('/api/recipes', MoreRecipes.add);
router.put('/api/recipes/:recipeId', MoreRecipes.update);
router.delete('/api/recipes/:recipeId', MoreRecipes.delete);
router.get('/api/recipes', MoreRecipes.getRecipe);
router.post('/api/recipes/:recipeId/reviews', MoreRecipes.reviewRecipe);
router.post('/api/recipes/:recipeId/vote', MoreRecipes.vote);

export default router;
