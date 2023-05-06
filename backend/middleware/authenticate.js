
const JWT = require("bcrypt")
const UserModel = require("../model/User.model.js")
const MustBeSigned = (req, res, next) => {
    {
        try {
            const decoded = JWT.verify(req.headers.authorization, process.env._PRIVATE_KEY)
            return req.user = decoded
            next()
        } catch (error) {
            console.log("error")
        }
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