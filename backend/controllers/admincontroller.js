const JWT = require("jsonwebtoken")
require('dotenv').config();
const {AdminModel} = require("../model/Admin.model");
const AdminController = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name) {
            return res.send({ error: "Name is Required" });
        }
        if (!email) {
            return res.send({ error: "Email is Required" });
        }
        if (!password) {
            return res.send({ error: "Password is Required" });
        }
        if (!phone) {
            return res.send({ error: "Phone no is Required" });
        }



        const exisitingUser = await AdminModel.findOne({ email });

        if (exisitingUser) {
            return res.status(200).send({
                success: true,
                message: "Already Register please login",
            });
        }
        const hashedPassword = await hashPassword(password);
      
        const user = await new AdminModel({
            name,
            email,
            phone,
            password: hashedPassword,
            role:"admin"
        }).save();

        res.status(201).send({
            success: true,
            message: "Admin Registered Successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            error,
        });
    }
};

//POST LOGIN
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }
        //check user
        const user = await AdminModel.findOne({ email });
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "Email is not registerd",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }
        //token
        const token = await JWT.sign({userName:user.name}, process.env._PRIVATE_KEY, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "Admin login successfull",
            user,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
};


const testController = (req, res) => {
    try {
        res.send("Protected Routes");
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};


const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        return hashedPassword
    } catch (error) {
        console.log("Error hashing password")
    }
}


const comparePassword = async (password, hashedPassword) => {


    return bcrypt.compare(password, hashedPassword)

}


module.exports = {
    AdminController, loginController, testController
}