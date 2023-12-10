const express = require('express');
const userRoute = require('./backhand/routes/user_routes');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(userRoute);


module.exports = app;