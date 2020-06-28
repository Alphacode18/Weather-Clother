const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const root = require('../util/path');

router.use(bodyParser.urlencoded({extended: true}));

const userData = [];

router.get('/register', (request, response, next) => {
   response.render('register', {
      pageTitle: 'Register',
   });
});

router.post('/register', (request, response, next) => {
   userData.push(request.body);
   const name = request.body.name;
   const email = request.body.email;
   const country = request.body.country;
   const state = request.body.state;
   const city = request.body.city;
   fs.appendFileSync('database.txt', `${name}#${email}#${country}#${state}#${city}\n`);
   response.redirect('/registered');
 }); 

exports.router = router;
exports.users = userData;