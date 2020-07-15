const getRegister = (request, response, next) => {
    response.render('register', {
       pageTitle: 'Register',
    });
 };

const postRegister = (request, response, next) => {
    response.redirect('/registered');
};

exports.getRegister = getRegister;
exports.postRegister = postRegister;