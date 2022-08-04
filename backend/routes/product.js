const express = require('express')
const {
  getProducts
} = require("../controllers/product");
const routerProduct = express.Router();

routerProduct.get("/products", getProducts);
module.exports = routerProduct;
