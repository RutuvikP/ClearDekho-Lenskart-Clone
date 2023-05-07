const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
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
   
    role: {
        type: String,
        default: "admin"

    }
}, {
    timestamps: true,
    versionKey: false
})

const AdminModel = mongoose.model('admin', AdminSchema);

module.exports = { AdminModel };