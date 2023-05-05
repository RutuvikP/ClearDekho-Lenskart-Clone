// const authenticate=(req,res,next)=>{
//     // logic
// }

const JWT = require("bcrypt")
const UserModel = require("../model/User.model.js")
const MustBeSigned = (req, res, next) => {
    const token=req.headers?.authorization
        if(token) {
            const decoded = JWT.verify(token, process.env._PRIVATE_KEY)
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