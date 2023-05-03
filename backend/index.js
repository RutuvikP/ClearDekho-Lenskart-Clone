const express=require('express');
const { userRouter } = require('./routes/User.routes');
const { connection } = require('./configs/db');

const app=express();

app.use('user',userRouter);

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