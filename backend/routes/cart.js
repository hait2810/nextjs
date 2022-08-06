const express = require("express");
const {
    removeCart,
    getCarts,
    getCart,
    addCart,
    updateCart
} = require("../controllers/cart");
const routerCart = express.Router();

routerCart.get("/carts", getCarts);
routerCart.get("/carts/:id", getCart);
routerCart.post("/carts", addCart);
routerCart.put("/carts/:id", updateCart);
routerCart.delete("/carts/:id", removeCart);

module.exports = routerCart;