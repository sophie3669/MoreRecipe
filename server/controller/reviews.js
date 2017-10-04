import { db } from '../models/recipedb';
class Review {
 
  add(req, res) {
    const { review, userId, category } = req.body;
    if(!review) {
      res.status(400).send({
        Message: 'Kindly add a review to this recipe'
      });
    } else {
      let l = db.reviews.length;
      const id = 1 + l;
      db.reviews.push({
        id: userId,
        category: category,
        ingredients: review
      });
      res.status(200).send(db.recipedb.review[id-1]);
    }
  }
}
export {Review};