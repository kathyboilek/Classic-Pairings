const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  movie_id : { type: String, required: true }, //movie’s unique identifier
  sources: { type: Array, required: false }, 
  platform: { type: Array, required: false }, 
  genres: {type: String, required: false}, 
  regions: {type: Array, required: false},
  vintage: {type: String, required: false}
  },
);

const recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;