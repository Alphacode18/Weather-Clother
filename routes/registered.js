const express = require('express');

const router = express.Router();

const registeredController = require('../controllers/registered');

router.get('/registered', registeredController.getRegistered);

module.exports = router;