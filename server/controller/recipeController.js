import { db } from '../models/recipedb';
/**
 * @class MoreRecipe
 */
class MoreRecipe {
  /**
 *
 * @param {object} req 
 * @param {object} res
 * @return {object} json object
 */
  add(req, res) {
    const { id, recipeName, category, ingredients } = req.body;
    if (recipeName && category && ingredients) {
      if (typeof recipeName === 'string' &&
          typeof category === 'string' &&
          typeof ingredients === 'string') {
        const newId = db.recipesdb.length + 1;
        const appendRecipeData = db.recipesdb.push({
          id: newId,
          recipeName,
          category,
          ingredients
        });
        if (appendRecipeData) {
          res.status(200).send({
            message: 'Recipe added successfully',
            recipes: db.recipesdb
          });
        } else {
          res.status(500).send({
            message: 'Whaaattt!!! Sorry try again!'
          });
        }
      } else {
        res.status(400).send({
          message: 'Recipe data must be in strings!'
        });
      }
    } else {
      res.status(400).send({
        message: 'Incomplete recipe data!'
      });
    }
  }

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @return {json} json object
   */
  update(req, res) {
    const id = req.params.recipeId;
    let foundId = false;
    const { recipeName, category, ingredients } = req.body;
    if (typeof parseInt(id) === 'number' &&
  typeof recipeName === 'string' &&
  typeof category === 'string' &&
  typeof ingredients === 'string') {
      for (let iterate = 0; iterate < db.recipesdb.length; iterate += 1) {
        if (db.recipesdb[iterate].id === parseInt(id, 10)) {
          db.recipesdb[iterate].recipeName = recipeName || db.recipesdb[iterate].recipeName;
          db.recipesdb[iterate].category = category || db.recipesdb[iterate].category;
          db.recipesdb[iterate].ingredients = recipeName || db.recipesdb[iterate].ingredients;
          foundId = true;
          return res.status(200).send({
            message: 'Recipe updated successfully',
            recipes: db.recipesdb[iterate]
          });
        }
      }
      if (!foundId) {
        return res.status(404).send({
          message: 'Recipe not found'
        });
      }
    } else {
      res.status(404).send({ message: 'invalid parameter' });
    }
  }

  /**
 * 
 * @param {object} req 
 * @param {object} res 
 * @return {json} json object
 */
  delete(req, res) {
    const id = req.params.recipeId;
    let foundId = false;
    for (let iterate = 0; iterate < db.recipesdb.length; iterate += 1) {
      if (db.recipesdb[iterate].id === parseInt(id, 10)) {
        db.recipesdb.splice(iterate, 1);
        foundId = true;
      }
    }
    if (foundId) {
      return res.status(200).send({
        message: 'Item removed successfully!',
        recipes: db.recipesdb
      });
    } else {
      return res.status(404).send({
        message: 'Recipe not found'
      });
    }
  }
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @return {json} json object 
   */
  getRecipe(req, res) {
    res.status(200).send(db.recipesdb);
  }

  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @return {json} json object 
   */
  reviewRecipe(req, res) {
    const id = req.params.recipeId;
    const { userId, review } = req.body;
    let foundId = false;
    if(typeof parseInt(id, 10) === 'number' &&
    typeof parseInt(userId, 10) === 'number' && 
    typeof review === 'string') {
      for (let iterate = 0; iterate < db.recipesdb.length; iterate += 1) {
        if (db.recipesdb[iterate].id === parseInt(id, 10)) {
          foundId = true;
        }
      }
      const newId = db.reviews.length + 1;
      if (foundId) {
        const appendreviewRecipe = db.reviews.push({
          id: newId,
          recipeId: id,
          userId,
          review
        });
        if (appendreviewRecipe) {
          res.status(200).send({
            message: 'Recipe review added successfully',
            recipes: db.reviews
          });
        }
      } else {
        res.status(404).send({
          message: 'Recipe not found!'
        });
      }
           
    } else {
      res.status(400).send({
        message: 'Invalid parameter!'
      })
    }
  }
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @return {json} json object 
   */
  vote(req, res){
    
  }
}

export { MoreRecipe };
