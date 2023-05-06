const express = require('express');
// const { forgotPasswordController, loginController, registerController, testController } = require('../controllers/authController')
const { MustBeSigned, isAdmin } = require('../middleware/authenticate');
const { forgotPasswordController ,loginController,registerController,testController} = require('../controllers/authcontroller');
// forgotPasswordController
const authrouter = express.Router()
// forgotPasswordController

authrouter.post("/register", registerController)





authrouter.post("/login", loginController)

authrouter.post("/forget-password", forgotPasswordController)


authrouter.get("/test", MustBeSigned, isAdmin, testController)

authrouter.get("/user-auth", MustBeSigned, (req, res) => {
    res.status(200).send({ ok: true })
})




//protected Admin route auth
// authrouter.get("/admin-auth", MustBeSigned, isAdmin, (req, res) => {
//     res.status(200).send({ ok: true });
// });

// export default authrouter
module.exports = {
    authrouter
}