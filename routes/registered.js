const path = require('path');

const express = require('express');

const router = express.Router();

const root = require('../util/path');

router.get('/registered', (request, response, next) => {
   response.send('<h1>User Registered</h1>');
});

module.exports = router;