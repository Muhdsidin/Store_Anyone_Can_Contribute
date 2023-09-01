const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  Email: {
    type: String,
    require: true,
    trim: true,
  },
  Password: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  Mobile: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  OrderItem: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product' // Reference to another schema (if you have a separate product schema)
    },
}],
  cart: [{
    // You can define the structure of the cart items here
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product' // Reference to another schema (if you have a separate product schema)
    },
    quantity: Number,
  }]
});

module.exports = mongoose.model("User", UserModel);
