const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipe: [{
    title: { type: String}, //Title of the recipe
    image_url: { type: String}, // URL of the image
    source_url: { type: String}, // Original Url of the recipe on the publisher's site
    f2f_url:  { type: String}, //Url of the recipe on Food2Fork.com
    publisher:  { type: String}, //Name of the Publisher
    publisher_url:  { type: String}, //Base url of the publisher
   }]
  
  },
);


//To get recipes use:  https://www.food2fork.com/api/get 

const recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;