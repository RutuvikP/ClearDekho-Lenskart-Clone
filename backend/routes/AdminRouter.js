const express = require('express');
const { MustBeSigned} = require('../middleware/authenticate');
const { loginController,AdminController,testController} = require('../controllers/admincontroller');
const { AdminModel } = require('../model/Admin.model');
const Adminouter = express.Router()

Adminouter.get("/",async(req,res)=>{
    try {
        const admins=await AdminModel.find();
        res.send(admins)
    } catch (error) {
        res.send({"msg":error.message});
    }
})
Adminouter.post("/register", AdminController)
Adminouter.post("/login", loginController)

module.exports = {
    Adminouter
}