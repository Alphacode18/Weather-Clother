const getRegistered = (request, response, next) => {
   response.render('registered', {
       pageTitle: 'Registration Successful'
    });
 };

 exports.getRegistered = getRegistered;