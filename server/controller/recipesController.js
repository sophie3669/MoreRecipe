import models from '../models';
import jwt from 'jsonwebtoken';
/**
 * @class recipe
 */
const recipes = models.recipe;
export default {
  /**
 *
 * @param {object} req 
 * @param {object} res
 * @return {object} json object
 */
  add(req, res) {
  
    return recipes
      .create(req.body).then((created) => {
        if (created) {
          res.status(200).send({
            message: 'Recipe added successfully'
          });
        } else {
          res.status(500).send({

            message: 'Sorry try again!'
          });
        }
      });
  },

  update(req, res) {
    const recipeid = parseInt(req.params.recipeId, 10);
    recipe.findById(recipeid)
      .then((Recipe) => {
        if (!Recipe) {
          res.status(404).json({
            status: 'Unsuccessful', message: 'Recipe Not Found'
          });
        } else {
          Recipe.update({
            recipename: req.body.recipename || Recipe.recipename,
            ingredients: req.body.ingredients ||Recipe.ingredients,
            category: req.body.category || Recipe.category,
            image: req.body.image || Recipe.image,
            upvote: req.body.upvote || Recipe.upvote,
            downvote: req.body.downvote || recipe.downvote,
          })
            .then((updatedRecipe) => {
              res.status(200).json({
                status: 'Successful', data: `${Recipe.recipename} has been updated`
              });
            });
        }
      })
      .catch(error => res.status(400).send(error));
    }
  
};
