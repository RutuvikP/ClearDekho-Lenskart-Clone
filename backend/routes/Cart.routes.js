const {Router}=require('express');
const CartModel = require('../model/Cart.model');

const cartRouter=Router();

// getting all the products of cart
cartRouter.get("/",async (req,res)=>{
    try {
        const cartData= await CartModel.find({userID:req.body.userID})
        res.send(cartData);
    } catch (error) {
        res.send({"msg":error.message})
    }
});

// for adding to cart
cartRouter.post("/addtocart",async(req,res)=>{
    try {
        const product=new CartModel(req.body);
        await product.save();
        res.send({"msg":"Product added to cart!!"})
    } catch (error) {
        res.send({"msg":error.message})
    }
});

// for updating product
cartRouter.patch("/update/:id",async (req,res)=>{
    const {id}=req.params
    const product=await CartModel.findOne({_id:id})
    if(product){
        if(product.userID==req.body.userID){
            await CartModel.findByIdAndUpdate({_id:id},req.body)
            res.send({"msg":`Product with ${id} has been updated!!`})
        }else{
            res.send({"msg":"You are not authorized to delete it!!"})
        }
    }else{
        res.send({"msg":"Product not found!!"})
    }
})

// delete product from cart
cartRouter.delete("/delete/:id",async (req,res)=>{
    const {id}=req.params
    const product=await CartModel.findOne({_id:id})
    if(product){
        if(product.userID==req.body.userID){
            await CartModel.findByIdAndDelete({_id:id})
            res.send({"msg":`Product with ${id} has been deleted!!`})
        }else{
            res.send({"msg":"You are not authorized to delete it!!"})
        }
    }else{
        res.send({"msg":"Product not found!!"})
    }
});

// emptying cart after checkout
cartRouter.delete("/deletemany",async(req,res)=>{
    try {
        await CartModel.deleteMany({userID:req.body.userID})
        res.send("Cart emptyed successfully!!")
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports=cartRouter;