const Products = require('../models/product')
const getProducts = async (req, res) => {
  try {
    const product = await Products.find().exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Không hiển thị được" });
  }
};
const addProduct = async (req, res) => {
    try {
      const product = await Products(req.body).save();
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: "Không thêm được" });
    }
  };
module.exports = {
  getProducts,
  addProduct
};
