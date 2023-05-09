
const express = require('express');
const cors=require('cors');
require('dotenv').config();
const { userRouter } = require('./routes/User.routes');
const eyeglassRoutes  = require('./routes/Eyeglasses.routes');
const cartRouter = require('./routes/Cart.routes');
const { connection } = require('./configs/db');
const app = express();
app.use(cors())
app.use(express.json());
var colors = require('colors');
const morgan = require("morgan")
const { authrouter } = require('./routes/authRouter');
const { AdminModel } = require('./model/Admin.model');
const { Adminouter } = require('./routes/AdminRouter');
const { MustBeSigned } = require('./middleware/authenticate');
const orderRouter = require('./routes/Order.routes');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});


app.use('/user',userRouter);
app.use('/eyeglasses',eyeglassRoutes);
app.use(morgan("dev"))
app.use("/api/v1/auth", authrouter)
app.use("/admin",Adminouter)
app.use("/orders",orderRouter)

//authentication middleware will come here
app.use('/cart',MustBeSigned,cartRouter);

app.get("/", (req, res) => {
    res.send("<h1>Hello How Are You Man</h1>")
})


app.listen(process.env._PORT, async () => {
    try {
        await connection
        console.log(colors.info("Connected to DB!!"));
    } catch (error) {
        console.log(colors.warn(error));
        console.log(colors.error("Not connected to DB!!"));
    }
    console.log("server is running 8080");
});