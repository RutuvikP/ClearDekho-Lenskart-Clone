const jwt = require("jsonwebtoken");
const { AdminModel } = require("../model/Admin.model");
require('dotenv').config();

const Adminmiddleware = async (req, res, next) => {
    const token = req.headers.authorization
    const {email,password}=req.body;
    const user=await AdminModel.findOne({email,password})
    if (token && user) {

        let decoded = jwt.verify(token.split(" ")[1], process.env._PRIVATE_KEY)

        if (decoded) {
            next()
        } else {
            res.send("Admin Login  Failed")
        }
        console.log(decoded)
    } else {
        res.send("User not Found!!")
    }

}

module.exports = {
    Adminmiddleware
}