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
  updateProduct: async (req, res) => {
    const productId = req.params.id;
    const product = await ProductModel.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;    
      product.category = req.body.category;
      product.description = req.body.description;
      const updatedProduct = await product.save();
      res.send({ message: 'Product Updated', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }

  }
  
}