const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors");

const routerProduct = require("./routes/product");
const routerCategory = require('./routes/categorys');
const routerCart = require('./routes/cart');
const routerUser = require('./routes/user');

const url = "mongodb+srv://gsix:gsix@atlascluster.uyqro.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(url);
    console.log("connect succsess");
  } catch (error) {
    console.log(error);
  }
}
connect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(routerProduct);
app.use(routerCategory);
app.use(routerCart)
app.use(routerUser)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Đang chạy cổng", PORT);
});
