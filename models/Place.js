const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  title: String,
  state: String,
  city: String,
  category: String,
  image: String,
  description: String,
  bestTime: String
});

module.exports = mongoose.model("Place", placeSchema);
