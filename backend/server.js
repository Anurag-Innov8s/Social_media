const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require('cloudinary')
const port = process.env.PORT || 5000;
const path = require("path")
const express = require("express")
const cors = require("cors")

connectDatabase()
app.use(cors());
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}));
// app.use(express.static(path.join(__dirname, "./frontend/build")))

// app.get("*",(req,res)=>{
//     res.sendFile(
//         path.join(__dirname,"./frontend/build/index.html"),
//         function(err){
//             res.status(500).send(err)
//         }
//     )
// })
app.get("/", (req, res) => {
    res.json({ message: "Hello I am Backend" });
  });
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port ${port}`);
})
