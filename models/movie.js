const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
  title: { type: String},
  description: { type: String},
  image:{ type: String},
  genre:	{ type: String},
  director:	{ type: String},
  originalyear:	{ type: String}
  },
);
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;