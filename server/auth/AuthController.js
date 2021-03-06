import express from 'express';
import router from express.Router();
import bodyParser from 'body-parser';
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config';

router.post('/register', function(req, res) {
    
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    User.create({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    }); 
  });