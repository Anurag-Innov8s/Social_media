const express = require("express")
const {register, login, followUser, logout, updatePassword, updateProfile} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();
router.post("/register",register)
router.post("/login",login)
router.route("/follow/:id").get(isAuthenticated,followUser);
router.route("/logout").get(isAuthenticated,logout);
router.route("/update/password").put(isAuthenticated,updatePassword);
router.route("/update/profile").put(isAuthenticated,updateProfile);

module.exports=router;