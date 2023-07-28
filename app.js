require('dotenv').config();

const express = require("express");
const app= express();
const connectDB=require("./db/connect");
const port=5000;

const products_routes=require("./routes/products");


app.get("/",(req,res) => {
    res.send("hii,harsh here")
});
app.use("/api/products",products_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(port,() => {
            console.log(`running at port ${port}`);

        });
    }catch(error){
        console.log(error);
    }
    

    };


    

start();

