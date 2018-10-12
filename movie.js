const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    genres: {
        type: String,
        require: true
    },
    movies: {
        type: string,
        require: true 
    },
    sources: {
        type: String,
        required: true
    }
});

const movie = mongoose.model("Movie", movieSchema);

module.exports = Movie