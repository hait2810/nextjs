const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cart: {
        type: [],
        require: true
    },
    infomation: {
        type: {},
        require: true
    },
    status: {
        type: Number,
        default: 0
    },
      totalprice: {
        type: Number,
        require: true
      }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);