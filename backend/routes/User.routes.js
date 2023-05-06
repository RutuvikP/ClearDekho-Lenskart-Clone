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
    const user = await UserModel.find({ _id: id })
    if (user) {
        if (user.userID == req.body.userID) {
            await UserModel.findByIdAndDelete({ _id: id })
            res.send({ "msg": `user with ${id} has been deleted!!` })
        } else {
            res.send({ "msg": "You are not authorized to delete it!!" })
        }
    } else {
        res.send({ "msg": "user not found!!" })
    }
});

module.exports = { userRouter };