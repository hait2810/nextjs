const Products = require('../models/product')
const getProducts = async (req, res) => {
  try {
    const product = await Products.find().exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Không hiển thị được" });
  }
};
module.exports = {
  getProducts
};
