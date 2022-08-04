const express = require('express')
const {
  getProducts, addProduct, updateProduct
} = require("../controllers/product");
const routerProduct = express.Router();


routerProduct.get("/products", getProducts);
routerProduct.post("/products", addProduct)
routerProduct.put('/products/:id', updateProduct)

module.exports = routerProduct;
