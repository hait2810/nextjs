const Products = require('../models/product')
const Categorys = require('../models/categorys')
const getProducts = async (req, res) => {
  try {
    const product = await Products.find().exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "Không hiển thị được" });
  }
};
const getProduct = async (req, res) => {
  try {
    const product = await Products.findById({_id:req.params.id}).exec();
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
  const updateProduct = async (req, res) => {
    try {
      const product = await Products.findByIdAndUpdate(
        { _id: req.params.id },
        req.body
      ).exec();
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: "Không sửa được" });
    }
  };
  const removeProduct = async (req, res) => {
    try {
      const product = await Products.findByIdAndDelete(
        { _id: req.params.id }
      ).exec();
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: "Không xoá được" });
    }
  };

  const getProductbyCategory = async (req, res) => {
    try {

      const category = await Categorys.findOne({_id: req.params.id }).exec();
      const product = await Products.find({category}).exec();
  
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: "Không hiển thị được" });
    }
  };
module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  removeProduct,
  getProduct,
  getProductbyCategory
};
