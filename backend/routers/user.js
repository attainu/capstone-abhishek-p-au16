const express = require("express");
const router = express.Router();
const userHelper = require("../helpers/userHelper");
const authenticate = require("../authentication/authentication");
const {userSignupValidater} = require("../validater")




router.post("/signup", userHelper.userSignup);
router.post("/login",userHelper.userlogin)





module.exports = router;
