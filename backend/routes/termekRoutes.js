const express = require("express");
const Termek = require("../models/Termek");

const router = express.Router();

// 🔹 GET – Minden termék lekérése
router.get("/", async (req, res) => {
  try {
    const termekek = await Termek.find();
    res.json(termekek);
  } catch (err) {
    console.error("Hiba a termékek lekérdezésénél:", err);
    res.status(500).json({ error: "Szerver hiba" });
  }
});

// 🔹 POST – Új termék hozzáadása
router.post("/", async (req, res) => {
  try {
    const ujTermek = new Termek(req.body);
    await ujTermek.save();
    res.status(201).json({ message: "Termék hozzáadva!" });
  } catch (err) {
    console.error("Hiba új termék hozzáadásánál:", err);
    res.status(500).json({ error: "Nem sikerült hozzáadni." });
  }
});

// 🔹 PUT – Termék módosítása
router.put("/:id", async (req, res) => {
  try {
    const frissitett = await Termek.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(frissitett);
  } catch (err) {
    console.error("Hiba termék frissítésénél:", err);
    res.status(500).json({ error: "Nem sikerült frissíteni." });
  }
});

// 🔹 DELETE – Termék törlése
router.delete("/:id", async (req, res) => {
  try {
    await Termek.findByIdAndDelete(req.params.id);
    res.json({ message: "Termék törölve." });
  } catch (err) {
    console.error("Hiba termék törlésénél:", err);
    res.status(500).json({ error: "Nem sikerült törölni." });
  }
});

module.exports = router;
