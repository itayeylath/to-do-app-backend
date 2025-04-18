import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Spotter backend is running" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
