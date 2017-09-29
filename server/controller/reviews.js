//check this well
import {recipedb} from '../models/recipedb';
class Review {
 
  add(req, res) {
    const { review, userId } = req.body;
    if(!review) {
      res.status(400).send({
        Message: 'Kindly add a review to this recipe'
      });
    } else {
      let l = recipedb.review.length;
      const id = 1 + l;
      db.review.push({
        id: id,
        category: category,
        ingredients: review
      });
      res.status(200).send(recipedb.review[id-1]);
    }
  }
}
export {Review};