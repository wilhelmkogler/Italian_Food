const express = require("express");
const Termek = require("../models/Termek");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const termekek = await Termek.find();
    res.json(termekek);
  } catch (err) {
    console.error("Hiba a termékek lekérdezésénél:", err);
    res.status(500).json({ error: "Szerver hiba" });
  }
});

module.exports = router;
