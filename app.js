//Core Module Import Statements
const path = require('path');


//Third Party Package Import Statements
const express = require('express');

//Custom Module Import Statements
const homeRouter = require('./routes/home');
const errorRouter = require('./routes/404');
const registerRouter = require('./routes/register');
const registeredRouter = require('./routes/registered');

const app = express();

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
app.use(errorRouter);
app.use(registerRouter);
app.use(registeredRouter);

//Server created and started

app.listen(3000);