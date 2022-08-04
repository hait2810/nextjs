const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors");

const routerProduct = require("./routes/product");
const routerCategory = require('./routes/categorys');

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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Đang chạy cổng", PORT);
});
