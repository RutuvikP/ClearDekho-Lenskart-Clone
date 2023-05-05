const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // logic
    name: {
        type: String,

        trim: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,


    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true

    },
    address: {
        type: String,
        required: true,
        trim: true,

    },
    role:{
        type:String,
        required:true
    }
}, {
    timestamps: true,
    versionKey: false
})

const UserModel = mongoose.model('user', userSchema);

module.exports = { UserModel };