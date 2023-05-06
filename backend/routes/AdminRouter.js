const express = require('express');
const { MustBeSigned} = require('../middleware/authenticate');
const { loginController,AdminController,testController} = require('../controllers/authcontroller');
const Adminouter = express.Router()

Adminouter.post("/register", AdminController)
Adminouter.post("/login", loginController)

module.exports = {
    Adminouter
}