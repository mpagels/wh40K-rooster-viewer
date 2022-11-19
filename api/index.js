import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = process.env.DB_URL;

mongoose.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}?retryWrites=true&w=majority`
);

const rostertSchema = mongoose.Schema({
  selection: [
    { id: { type: String }, content: { type: String }, body: { type: String } },
  ],
});

const Rooster = mongoose.model("rooster", rostertSchema);

app.get("/api/rooster", async (req, res) => {
  const result = await Rooster.find({});
  res.json({ result });
});

app.get("/api/rooster/:id", async (req, res) => {
  const { id } = req.params;
  const rooster = await Rooster.find({});
  const result = rooster[0].selection.find((unit) => unit.id === id);
  res.json({ result });
});

app.post("/api/rooster", async (req, res) => {
  await Rooster.deleteOne({});
  const data = req.body;
  const rooster = new Rooster({ selection: data.data });
  const result = await rooster.save();
  res.json({ result });
});

module.exports = app;
