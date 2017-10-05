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
            message: "Sorry try again!"
          });
        }
      }),
  }}

        update(req,res){
          const id = req.params.recipeId;
          const userid= req.params.userid;
          let foundId = false;
          let founduserid = false;
          const { recipeName, category, ingredients } = req.body;
          if (typeof parseInt(id) === 'number' &&
          typeof parseInt(userid) == 'number' &&
        typeof recipeName === 'string' &&
        typeof category === 'string' &&
        typeof ingredients === 'string') {
            for (let iterate = 0; iterate < recipes.length; iterate += 1) {
            
              if (recipes[iterate].id === parseInt(id, 10) && recipes[iterate].userid == parseInt(userid)) {
                recipes[iterate].recipeName = recipeName || recipes[iterate].recipeName;
                recipes[iterate].category = category || recipes[iterate].category;
                recipes[iterate].ingredients = recipeName || recipes[iterate].ingredients;
                foundId = true;
                return res.status(200).send({
                  message: 'Recipe updated successfully',
                  recipes: recipes[iterate]
                });
              }
            }
            if (!foundId) {
              return res.status(404).send({
                message: 'Recipe not found'
              });
            }
            if(!founduserid){
              return resizeBy.result(404).send({
                message: 'customer not found',
              })
            }
          } else {
            res.status(404).send({ message: 'invalid parameter' });
          }
        }
     };

     /**
 * 
 * @param {object} req 
 * @param {object} res 
 * @return {json} json object
 */
  delete(req, res) {
    const id = req.params.recipeId;
    const userid: req.params.userid;
    let foundId = false;
    for (let iterate = 0; iterate < db.recipesdb.length; iterate += 1) {
      if (recipes[iterate].id === parseInt(id, 10)) {
        recipes.splice(iterate, 1);
        foundId = true;
      }
    }
    if (foundId) {
      return res.status(200).send({
        message: 'Item removed successfully!',
        recipes: recipes
      });
    }
    return res.status(404).send({
      message: 'Recipe not found'
    });

  }

      /**
   * 
   * @param {object} req 
   * @param {object} res
   * @return {json} json object 
   */
  getRecipe(req, res) {
    res.status(200).send(recipes);
  }

        };
