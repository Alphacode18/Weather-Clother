//Core Module Import Statements
const path = require('path');


//Third Party Package Import Statements
const express = require('express');
const bodyParser = require('body-parser');

//Custom Module Import Statements
const homeRouter = require('./routes/home');

const app = express();

//Middleware

app.use('/', (request, response, next) => {
    next();
});

app.use(homeRouter);
//Server created and started

app.listen(3000);