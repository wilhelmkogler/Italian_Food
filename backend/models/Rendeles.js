const mongoose = require("mongoose");

const rendelesSchema = new mongoose.Schema({
  customer: {
    name: String,
    address: String,
    phone: String,
    payment: String,
  },
  items: [
    {
      _id: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rendeles", rendelesSchema, "rendelesek");
