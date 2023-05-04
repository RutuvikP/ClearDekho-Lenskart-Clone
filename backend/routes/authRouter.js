import express from "express";
import { forgotPasswordController, loginController, registerController, testController } from "../controllers/authController.js";
import { MustBeSigned, isAdmin } from "../middlewares/authMiddlewares.js";

const authrouter = express.Router()

authrouter.post("/register", registerController)





authrouter.post("/login", loginController)

authrouter.post("/forget-password", forgotPasswordController)


authrouter.get("/test", MustBeSigned, isAdmin, testController)

authrouter.get("/user-auth", MustBeSigned, (req, res) => {
    res.status(200).send({ ok: true })
})




//protected Admin route auth
authrouter.get("/admin-auth", MustBeSigned, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

export default authrouter