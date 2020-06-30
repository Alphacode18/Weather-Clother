const userData = [];
const fs = require('fs');

const getRegister = (request, response, next) => {
    response.render('register', {
       pageTitle: 'Register',
    });
 };

const postRegister = (request, response, next) => {
    userData.push(request.body);
    fs.writeFileSync('database.json', JSON.stringify(userData));
    response.redirect('/registered');
};

exports.getRegister = getRegister;
exports.postRegister = postRegister;
exports.userData = userData;