const express = require("express");
const router = express.Router();
const userHelper = require("../helpers/userHelper");
//const {userSignupValidater} = require("../validater")
//const {isAuthenticatedUser} = require("../authentication/authentication");




router.post("/signup", userHelper.userSignup);
router.post("/login",userHelper.userlogin)
router.get("/logout",userHelper.userLogout)
router.get("/cart",(req, res)=> {
    res.send ("hello!");
})




module.exports = router;
