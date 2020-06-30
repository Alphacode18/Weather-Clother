const get404 = (request, response, next) => {
    response.render('404', {
       pageTitle: 'Page Not Found',
    }); 
 };

 exports.get404 = get404;