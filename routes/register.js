const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const root = require('../util/path');
router.use(bodyParser.urlencoded({extended: true}));

router.get('/register', (request, response, next) => {
   response.render('register');
});

router.post('/register', (request, response, next) => {
   fs.appendFileSync('database.txt', `${request.body.name}#${request.body.email}\n`);
   response.redirect('/registered'); 
 });

module.exports = router;