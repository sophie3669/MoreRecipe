import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import recipes from './routes/recipes';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', recipes);

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