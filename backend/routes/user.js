const express = require("express")
const {register,
      login, 
      followUser, 
      logout, 
      updatePassword, 
      updateProfile, 
      deleteMyProfile,
      myProfile,
      getUserProfile,
      getAllUsers,
      forgotPassword,
      resetPassword,
      getMyPosts,
      getUserPosts}
      = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();
router.post("/register",register)
router.post("/login",login)
router.route("/follow/:id").get(isAuthenticated,followUser);
router.route("/logout").get(isAuthenticated,logout);
router.route("/update/password").put(isAuthenticated,updatePassword);
router.route("/update/profile").put(isAuthenticated,updateProfile);
router.route("/delete/me").delete(isAuthenticated,deleteMyProfile)
router.route("/me").get(isAuthenticated,myProfile)
router.route("/user/:id").get(isAuthenticated, getUserProfile);
router.route("/users").get(isAuthenticated, getAllUsers);
router.route("/forgot/password").post(forgotPassword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/my/posts").get(isAuthenticated,getMyPosts)
router.route("/user/posts/:id").get(isAuthenticated,getUserPosts)


module.exports=router;