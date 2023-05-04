const express=require('express');
const cors=require('cors');
const { userRouter } = require('./routes/User.routes');
const { connection } = require('./configs/db');
const eyeglassRoutes  = require('./routes/Eyeglasses.routes');
const cartRouter = require('./routes/Cart.routes');

const app=express();
app.use(cors())
app.use(express.json());

app.use('/user',userRouter);
app.use('/eyeglasses',eyeglassRoutes);

//authentication middleware will come here
app.use('/cart',cartRouter);

app.listen(8080,async ()=>{
    try {
        await connection
        console.log("Connected to DB!!");
    } catch (error) {
        console.log(error);
        console.log("Not connected to DB!!");
    }
    console.log("server is running 8080");
});