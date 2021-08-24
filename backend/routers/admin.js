require("dotenv").config();
const express = require("express");
const productHelper = require("../helpers/productHelper");
const router = express.Router();

const upload  = require("../cloud/cloudinary")



router.post("/signup", userHelper.adminSignup);
router.post("/login",userHelper.adminlogin)
router.get("/view-products",(req, res) => {
  res.send("product list");
});

router.get("/add-products", (req, res) => {
  res.json({ success: true });
});

router.post("/add-products", async (req, res) => {

    product = req.body;
   
    const img = req.files.img.data
    const mimetype = req.files.img.mimetype;

    console.log(img,mimetype);

    const url = await upload(img,mimetype);

    console.log(url);
router.put("/update-products",productHelper.updateProduct)
router.delete("/delete-product",productHelper.deleteProduct)





    product.img_url = url
    productHelper.addProduct(product)
    
});




module.exports = router;
