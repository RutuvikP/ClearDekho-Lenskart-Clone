const mongoose=require('mongoose');

const eyeglassesSchema=mongoose.Schema({
    title:{type:String,required:true},
    size:{type:String,required:true},
    rating:{type:Number,required:true},
    price:{type:Number,required:true},
    shape:{type:String,required:true},
    image:{type:String,required:true},
    color:{type:String,required:true}
},{
    versionKey:false
});

const EyeglassesModel=mongoose.model('eyeglass',eyeglassesSchema)

module.exports={EyeglassesModel};