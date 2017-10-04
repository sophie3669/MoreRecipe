const usercontroller = require('../controller').usercontrollers;

module.exports = (app) => {
  app.get('/api/recipes', (req, res) => res.status(200).send({
    message: 'Welcome to the morerecipe API!',
  }));

  app.post('/api/recipes', usercontroller.create);
};