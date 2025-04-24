const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const termekRoutes = require("./routes/termekRoutes");
app.use("/api/termekek", termekRoutes);

const rendelesRoutes = require("./routes/rendelesRoutes");
app.use("/api/rendelesek", rendelesRoutes);


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
