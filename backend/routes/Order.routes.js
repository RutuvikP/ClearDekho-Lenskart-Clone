const {Router}=require('express');
const { OrderModel } = require('../model/Orders.model');

const orderRouter=Router();

// getting all products in orders
orderRouter.get('/',async(req,res)=>{
    try {
        const products=await OrderModel.find();
        res.send(products);
    } catch (error) {
        res.send({"msg":error.message});
    }
})

// for adding products to orders
orderRouter.post('/',async(req,res)=>{
    //const payload={...req.body,status:"Placed"}
    try {
        await OrderModel.insertMany(req.body);
        res.send({"msg":"Product added to orders list!!"})
    } catch (error) {
        res.send({"msg":error.message})
    }
});

// for updating status
orderRouter.patch('/update/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        await OrderModel.findByIdAndUpdate({_id:id},req.body);
        res.send({"msg":`Status of product with ${id} has been updated!!`})
    } catch (error) {
        res.send({"msg":error.message});
    }
})

// for deleting 
orderRouter.delete('/delete/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        await OrderModel.findByIdAndDelete({_id:id},req.body);
        res.send({"msg":`Product with ${id} has been deleted!!`})
    } catch (error) {
        res.send({"msg":error.message});
    }
})

module.exports=orderRouter;