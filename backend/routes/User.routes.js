const {Router}=require('express');

const userRouter=Router();

userRouter.get('/',(req,res)=>{
    res.send("Users Route")
});

module.exports={userRouter};