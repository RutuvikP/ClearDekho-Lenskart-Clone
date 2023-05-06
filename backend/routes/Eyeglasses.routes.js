const {Router}=require('express');
const { EyeglassesModel } = require('../model/Eyeglasses.model');

const eyeglassRoutes=Router();

// get request with functionalities

eyeglassRoutes.get('/',async (req,res)=>{
    const {brand,size,shape,color,orderBy}=req.query;
    const query={};
    if(brand){
        query.title={$in:brand};
    }
    if(size){
        query.size={$in:size}
    }
    if(shape){
        query.shape={$in:shape}
    }
    if(color){
        query.color={$in:color}
    }
    let sortObj={};
    if(orderBy=="asc"){
        sortObj.price=1
    }else if(orderBy=="desc"){
        sortObj.price=-1
    }
    try {
        const glasses= await EyeglassesModel.find(query).sort(sortObj);
        res.send(glasses);
    } catch (error) {
        res.send({"msg":error.message});
    }
});

// for getting single product
eyeglassRoutes.get('/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        const product=await EyeglassesModel.find({_id:id});
        res.send(product);
    } catch (error) {
        res.send({"msg":error.message});
    }
})

// adding products for admin only
eyeglassRoutes.post('/add',async(req,res)=>{
    try {
        const glasses=new EyeglassesModel(req.body)
        await glasses.save();
        res.send({"msg":"New eyeglasses added!!"});
    } catch (error) {
        res.send({"msg":error.message});
    }
});

// updating products for admin only
eyeglassRoutes.patch('/updae/:id',async(req,res)=>{
    const {id}=req.params
    try {
        await EyeglassesModel.findByIdAndUpdate({_id:id},req.body)
        res.send({"msg":`Product with ${id} has been updated!!`})
    } catch (error) {
        res.send({"msg":error.message});
    }
});

// deleting product for admin only
eyeglassRoutes.delete('/delete/:id',async(req,res)=>{
    const {id}=req.params
    try {
        await EyeglassesModel.findByIdAndDelete({_id:id})
        res.send({"msg":`Product with ${id} has been deleted!!`})
    } catch (error) {
        res.send({"msg":error.message});
    }
});

module.exports=eyeglassRoutes;