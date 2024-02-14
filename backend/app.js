const express = require("express")
const app = express();
const post = require("./routes/post")
const user = require("./routes/user");
const cookieParser = require("cookie-parser");
require("dotenv").config({path:"config/config.env"})
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit : "50mb",extended:true}));
app.use(post);
app.use(user);
app.use(cookieParser())
module.exports = app;