const express = require('express');
const ProductModel = require('../models/Products');

const router = express.Router();



router.get('/view-products',(req, res)=>{
    res.send("product list")
})

router.get('/add-products',(req, res)=>{
    res.send("form to add product")
})

router.post('/add-products',async(req, res)=>{
   try{ product = req.body
    const newProduct = ProductModel(product)
    const savedProduct = await newProduct.save()
    console.log(savedProduct)
    res.redirect("/admin/view-products")
}
    catch(err){ return res.json({error:true})}

})

module.exports = router