const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const root = require('../util/path');
router.use(bodyParser.urlencoded({extended: true}));

router.get('/register', (request, response, next) => {
   response.sendFile(path.join(root, 'views', 'register.html')); 
});

router.post('/register', (request, response, next) => {
   console.log(request.body); 
   response.redirect('/registered'); 
 });

module.exports = router;