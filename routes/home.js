const path = require('path');

const express = require('express');

const router = express.Router();

const root = require('../util/path');

router.get('/', (request, response, next) => {
   response.render('home', {
      pageTitle: 'Home Page',
   });
});

module.exports = router;