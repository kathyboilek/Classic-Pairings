const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  description: {type: String, required: false},
  image: {type: String, required: false},
  label: {type: String, required: false},
  countrystate: {type: String, required: false},
  region: {type: String, required: false},
  winetype: {type: String, required: false},
  varietal: {type: String, required: false},
  style: {type: String, required: false},
  taste: {type: String, required: false},
  body: {type: String, required: false}
  },
);

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;