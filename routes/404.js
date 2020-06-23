const path = require('path');

const express = require('express');

const router = express.Router();

const root = require('../util/path');

router.use((request, response, next) => {
   response.send('<h1>404 Error: Page Not Found</h1>'); 
});

module.exports = router;