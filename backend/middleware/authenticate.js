
const jwt = require("jsonwebtoken")
const UserModel = require("../model/User.model.js")
require('dotenv').config()
const MustBeSigned = (req, res, next) => {
    const token=req.headers.authorization
        if(token) {
            const decoded = jwt.verify(token, "Cart")
            if(decoded){
                req.body.userID=decoded.userID,
                req.body.userName=decoded.userName
                next()
            }else{
                res.send("Token doesn't match");
            }
        } else {
            res.send({"msg":"Please Login First!!"})
        }
}


// admin access 

const isAdmin = async (req, res, next) => {

    try {

        const user = await UserModel.findById(req.user._id)

        if (user.role !== 1) {

            return res.status(401).send({
                success: false,
                message: 'You are not allowed'

            })

        } else {
            next()
        }

    } catch (error) {

        res.send({ message: "Error" })

    }

}

module.exports = {
    isAdmin,
    MustBeSigned
}