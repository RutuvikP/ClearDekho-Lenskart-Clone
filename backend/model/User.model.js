const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    // logic
})

const UserModel=mongoose.model('user',userSchema);

module.exports={UserModel};