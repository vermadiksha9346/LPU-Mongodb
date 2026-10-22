const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { productRouter } = require("./routes/product.routes");
const { paymentRouter } = require("./routes/payment.route");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/",(req, res)=>{
    res.send("Hii , Welcome from Backend Server");
});

app.use("/api",userRouter);
app.use("/api",productRouter);
app.use("/api",paymentRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error Starting Server:", error);
    }
    console.log("Server is running on http://localhost:${Port}");
}) 