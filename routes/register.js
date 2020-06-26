const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const root = require('../util/path');

router.use(bodyParser.urlencoded({extended: true}));

const userData = [];

router.get('/register', (request, response, next) => {
   response.render('register');
});

router.post('/register', (request, response, next) => {
   userData.push(request.body);
   const name = request.body.name;
   const email = request.body.email;
   fs.appendFileSync('database.txt', `${name}#${email}\n`);
   response.redirect('/registered');
 }); 

exports.router = router;
exports.users = userData;