const express = require('express');

const router = express.Router();

const authorController = require('../controllers/author');

router.get('/author', authorController.getAuthor);

module.exports = router;