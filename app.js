//Core Module Import Statements
const path = require('path');


//Third Party Package Import Statements
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middleware

app.use('/', (request, response, next) => {
    next();
});

//Server created and started

app.listen(3000);