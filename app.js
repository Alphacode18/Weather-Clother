//Core Module Import Statements
const path = require('path');


//Third Party Package Import Statements
const express = require('express');

//Custom Module Import Statements
const homeRouter = require('./routes/home');
const authorRouter = require('./routes/author')
const errorRouter = require('./routes/404');
const registerData = require('./routes/register');
const registeredRouter = require('./routes/registered');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Middleware

app.use('/', (request, response, next) => {
    next();
});

//Static Serving
app.use(express.static(path.join(__dirname, 'public')));

//Router Usage

app.use(homeRouter);
app.use(authorRouter);
app.use(registerData.router);
app.use(registeredRouter);
app.use(errorRouter);

//Server created and started

app.listen(port);
console.log(`The Application Is Hosted On Port ${port}`);