const Cart = require("../models/cart");

const getCarts = async (req, res) => {
  try {
    const cart = await Cart.find().exec();
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: "Không hiển thị được" });
  }
};
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findById({ _id: req.params.id }).exec();
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: "Không hiển thị được" });
  }
};



const addCart = async (req, res) => {
  try {
    const cart = await Cart(req.body).save();
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: "Không thêm được" });
  }
};

const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    ).exec();
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: "Không sửa được" });
  }
};
const removeCart = async (req, res) => {
  try {
    const cart  =  await Cart.findByIdAndDelete({ _id: req.params.id }).exec();
    res.json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
    removeCart,
    getCarts,
    getCart,
    addCart,
    updateCart
};