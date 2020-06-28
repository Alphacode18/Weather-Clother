const path = require('path');

const express = require('express');

const router = express.Router();

const root = require('../util/path');

router.get('/author', (request, response, next) => {
   response.render('author', {
      pageTitle: 'Author',
   });
});

module.exports = router;