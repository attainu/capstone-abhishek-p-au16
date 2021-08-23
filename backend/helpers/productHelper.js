const ProductModel = require("../models/Products");

module.exports = {
  addProduct: async (product) => {
    const newProduct = ProductModel(product);
   
    await newProduct.save()
    
  },

  deleteProduct: async (req,res) => {
    let product = await ProductModel.findById(req.params.id)
    if(!product){
      return res.status(400).json({message:"product not find"})
    }
    await product.remove()
    res.status(200).json({message:"success"})
  },
  updateProduct: async (req,res) => {

  }
  
}