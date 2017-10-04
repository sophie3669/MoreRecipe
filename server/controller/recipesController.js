import models from '../models';
import jwt from 'jsonwebtoken';
/**
 * @class MoreRecipe
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
    // console.log(req.body);
    return recipes
      .create(req.body).then((created) => {
        if (created) {
          res.status(200).send({
            message: 'Recipe added successfully'
          });
        } else {
          res.status(500).send({
            message: 'Whaaattt!!! Sorry try again!'
          });
        }
      });
  }
};
