const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require('cloudinary')
connectDatabase()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})
app.get("/", (req, res) => {
    res.json({ message: "Hello I am Backend" });
  });
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port ${process.env.PORT}`);
})