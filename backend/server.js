const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require('cloudinary')
const port = process.env.PORT || 5000;
const path = require("path")
const express = require("express")
connectDatabase()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})
app.use(express.static(path.join(__dirname, "./frontend/build")))

app.get("*",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"./frontend/build/index.html"),
        function(err){
            res.status(500).send(err)
        }
    )
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port ${port}`);
})