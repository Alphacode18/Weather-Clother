const getHome = (request, response, next) => {
    response.render('home', {
       pageTitle: 'Home Page',
    });
};

exports.getHome = getHome;