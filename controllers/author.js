const { get } = require("../routes/author");

const getAuthor = (request, response, next) => {
    response.render('author', {
       pageTitle: 'Author',
    });
 };

 exports.getAuthor = getAuthor;