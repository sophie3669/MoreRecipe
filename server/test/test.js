import chai from 'chai';
import chaiHttp from 'chai-http';
import recipedb from '../src/models';
import test from '../Server/test';
//import faker from 'faker';

const should = chai.should();
chai.use(chaiHttp);
describe("morerecipes", () => {
  it('shoud get the home page', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
  })it('shoud return 200 for get request', (done) => {
    chai.request(test)
      .getRecipe('/')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
    })
    it('shoud return 200 for delete request', (done) => {
      chai.request(test)
        .deleteRecipe('/')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
      })
      it('shoud return 200 for put request', (done) => {
        chai.request(test)
          .add('/')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
        })
  it('shoud return 200 for get request', (done) => {
    chai.request(test)
      .getRecipe('/')
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
    })
    it('shoud return 200 for delete request', (done) => {
      chai.request(test)
        .deleteRecipe('/')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
      })
      it('shoud return 200 for put request', (done) => {
        chai.request(test)
          .add('/')
          .end((err, res) => {
            res.should.have.status(200)
            done()
          })
        })
    
    it('should return 404 for un defined page', (done) => {
    chai.request(test)
      .get('/Server/test')
      .end((err, res) => {
        res.should.have.status(404)
        done()
      })
    })
})




