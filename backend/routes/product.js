const express = require('express')
const {
  getProducts, addProduct, updateProduct, removeProduct,getProduct,getProductbyCategory
} = require("../controllers/product");
const routerProduct = express.Router();


routerProduct.get("/products", getProducts);
routerProduct.post("/products", addProduct)
routerProduct.get("/products/:id", getProduct)
routerProduct.put('/products/:id', updateProduct)
routerProduct.delete('/products/:id', removeProduct)
routerProduct.get('/productsbycategory/:id', getProductbyCategory)

module.exports = routerProduct;
