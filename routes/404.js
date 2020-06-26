const path = require('path');

const express = require('express');

const router = express.Router();

const root = require('../util/path');

router.use((request, response, next) => {
   response.render('404.pug'); 
});

module.exports = router;