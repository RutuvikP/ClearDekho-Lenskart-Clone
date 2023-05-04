const mongoose=require('mongoose');

const cartSchema=mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    image:{type:String,required:true},
    userID:{type:String,required:true},
    userName:{type:String,required:true}
},{
    versionKey:false
})

const CartModel=mongoose.model('cart',cartSchema);

module.exports=CartModel;