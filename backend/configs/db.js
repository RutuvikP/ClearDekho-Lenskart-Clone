const mongoose=require('mongoose');
require('dotenv').config();

const connection=mongoose.connect(process.env._MONGO_URL)

module.exports={connection};