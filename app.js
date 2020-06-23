//Core Module Import Statements
const path = require('path');


//Third Party Package Import Statements
const express = require('express');
const bodyParser = require('body-parser');

//Custom Module Import Statements
const homeRouter = require('./routes/home');
const errorRouter = require('./routes/404');

const app = express();

//Middleware

app.use('/', (request, response, next) => {
    next();
});

//Static Serving
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser
app.use(bodyParser.urlencoded({extended: true}));

//Router Usage

app.use(homeRouter);
app.use(errorRouter);

//Server created and started

app.listen(3000);