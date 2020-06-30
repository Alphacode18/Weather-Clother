const userData = require('./register').userData;

const getRegistered = (request, response, next) => {
   response.render('registered', {
       pageTitle: 'Registration Successful',
       name: userData[userData.length - 1].name,
    });
 };

 exports.getRegistered = getRegistered;