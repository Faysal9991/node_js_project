const express = require('express');
const userRoute = express.Router();
const {getAllUsers,validate,signUp} = require('../contorller/user-controller');


userRoute.get('/allUser',getAllUsers);
userRoute.post('/signup',validate,signUp);

module.exports = userRoute;