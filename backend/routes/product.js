const express = require('express')
const {
  getProducts, addProduct
} = require("../controllers/product");
const routerProduct = express.Router();


routerProduct.get("/products", getProducts);
routerProduct.post("/products", addProduct)

module.exports = routerProduct;
