const express = require("express");
const router = express.Router();
const Rendeles = require("../models/Rendeles");

router.post("/", async (req, res) => {
  try {
    const ujRendeles = new Rendeles(req.body);
    await ujRendeles.save();
    res.status(201).json({ message: "Rendelés sikeresen mentve!" });
  } catch (err) {
    console.error("Rendelés mentési hiba:", err);
    res.status(500).json({ error: "A rendelés mentése nem sikerült." });
  }
});

router.get("/", async (req, res) => {
  try {
    const rendelesek = await Rendeles.find().sort({ createdAt: -1 });
    res.json(rendelesek);
  } catch (err) {
    console.error("Rendelések lekérési hiba:", err);
    res.status(500).json({ error: "A rendelések lekérése nem sikerült." });
  }
});

module.exports = router;
