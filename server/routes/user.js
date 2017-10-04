import express from 'express';

import usercontroller from '../controller/usercontrollers';

const app = express.Router();

app.get('/api/recipes', (req, res) => res.status(200).send({
  message: 'Welcome to the morerecipe API!',
}));

app.post('/api/users/signup', usercontroller.createUser);
app.post('/api/users/signin', usercontroller.loginUser);

export default app;
