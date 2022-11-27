const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

mongoose.connect("mongodb://mymongo:27017");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  console.log("getting, thinssgs");

  const animales = await Animal.find();
  return res.send(animales);
});

app.get("/crear", async (req, res) => {
  console.log("creatsasdading");

  const asd = await Animal.create({tipo:'monster', state: 'happy'})
  return res.status(200).send(asd);
});

app.listen(3000, () => console.log("cocdo"));
