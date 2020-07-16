const Sequelize = require('sequelize');

const User = require('../models/user');

const getRegister = (request, response, next) => {
    response.render('register', {
       pageTitle: 'Register',
    });
 };

const postRegister = (request, response, next) => {
    const name = request.body.name;
    const email = request.body.email;
    const country = request.body.country;
    const state = request.body.state;
    const city = request.body.city;
    User.create({
        name: name,
        email: email,
        country: country,
        state: state,
        city: city
    })
    .then(response.redirect('/registered'))
    .catch(err => {
        console.log(err);
    })
};

exports.getRegister = getRegister;
exports.postRegister = postRegister;