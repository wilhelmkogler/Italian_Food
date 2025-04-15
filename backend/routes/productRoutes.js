const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
    try {
      const products = await Product.find();
      console.log("Lekérdezett termékek:", products); // <-- EZ FONTOS!
      res.json(products);
    } catch (err) {
      console.error("Hiba a termékek lekérdezésénél:", err);
      res.status(500).json({ error: "Server error" });
    }
  });
  

module.exports = router;
