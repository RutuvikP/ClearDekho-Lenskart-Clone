const {Router}=require('express');
const { UserModel } = require('../model/User.model');

const userRouter=Router();

userRouter.get('/',async(req,res)=>{
    try {
        const users=await UserModel.find();
        res.send(users);
    } catch (error) {
        res.send({"msg":error.message})
    }
});

module.exports={userRouter};