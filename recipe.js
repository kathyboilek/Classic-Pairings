const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now() 
    },
    url: {
        type: String,
        required: true
    }
});

//NEED HELP WITH EXTRACTING THIS. FORGOT HOW TO DO THIS PART
// "recipes": [{
//     "publisher": "Allrecipes.com",
//     "social_rank": 99.81007979198002, 
//     "f2f_url": "https://www.food2fork.com/recipes/view/29159", 
//     "publisher_url": "http://allrecipes.com", 
//     "title": "Slow-Cooker Chicken Tortilla Soup", 
//     "source_url": "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",
//     "page":1}]

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe