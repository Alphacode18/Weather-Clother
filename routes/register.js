const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const registerController = require("../controllers/register");

router.use(bodyParser.urlencoded({extended: true}));

const userData = registerController.userData;

router.get('/register', registerController.getRegister);

router.post('/register', registerController.postRegister); 

exports.router = router;
exports.users = userData;