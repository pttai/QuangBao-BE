const express = require('express');
const userController = require('../../controller/userController');

const route = express.Router();


route.post('/',userController.Login);
module.exports = route;



