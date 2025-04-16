const mongoose = require("mongoose");

const termekSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Termek", termekSchema, "termekek");
