const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  lwin: { type: String, required: true }, //wine’s unique identifier
  wine: { type: String, required: true }, 
  color: { type: Enum, required: true }, 
  country: {type: String, required: false}, 
  regions: {type: Array, required: false},
  vintage: {type: String, required: false}
  },
);

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;