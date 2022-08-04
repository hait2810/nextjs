const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routerProduct = require("./routes/products");
const routerCategory = require("./routes/categorys");
const routerUser = require("./routes/user");
const url =
  "mongodb+srv://haidev:ahai2001@cluster0.ziydc.mongodb.net/?retryWrites=true&w=majority";
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
app.use(routerUser)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Đang chạy cổng", PORT);
});
