const path = require('path');

const express = require('express');

const router = express.Router();

const root = require('../util/path');

router.get('/', (request, response, next) => {
   //response.sendFile(path.join(root, 'views', 'home.html')); 
   response.render('home');
});

module.exports = router;