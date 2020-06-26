const path = require('path');

const express = require('express');

const router = express.Router();

const root = require('../util/path');
const usersData = require('../routes/register');

router.get('/registered', (request, response, next) => {
   response.render('registered', {
      name: usersData.users[usersData.users.length - 1].name,
      email: usersData.users[usersData.users.length - 1].email,
   });
});

module.exports = router;