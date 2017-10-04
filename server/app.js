import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import recipe from './routes/recipes';

import user from './routes/user';

const app = express();

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', user);
app.use('/',recipe);

app.get('/', (req, res) => {
    res.status(200).send({
	 message: 'Welcome to more Recipes!'
	 
 });
});


app.use((req, res, next ) => {
 const err = res.status(404).send({
 	Error: '404: Sorry Page Not Found'
 })
 next(err)
});

export default app;