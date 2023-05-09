const { Router } = require('express');
const { UserModel } = require('../model/User.model');

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (error) {
        res.send({ "msg": error.message })
    }
});



// 64538ee8c19aada34b435829
userRouter.delete("/delete/:id", async (req, res) => {

    const { id } = req.params
    const user = await UserModel.findOne({ _id: id })
    if (user) {
        await UserModel.findByIdAndDelete({_id:id})
        res.send({"msg":"User deleted successfully!!"})
    } else {
        res.send({ "msg": "user not found!!" })
    }
});

module.exports = { userRouter };