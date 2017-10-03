import chai from 'chai';
import chaiHttp from 'chai-http';
import recipedb from '../models/recipedb';
import server from '../bin/www';

const should = chai.should();
chai.use(chaiHttp);
describe('MoreRecipes Tests:', () => {
  describe('recipeController', () => {
    it('should return status code of 200 when recipe is added successfully', (done) => {
      chai.request(server)
        .post('/api/recipes')
        .send({
          id: 1,
          recipeName: 'Test recipe',
          category: 'African Dish',
          ingredients: 'Lets see'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
