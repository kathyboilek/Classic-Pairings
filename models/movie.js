const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movie_id: { type: String, required: true }, //movie’s unique identifier
  purchase_web_sources: { type: Array, required: false},
  purchase_android_sources: { type: Array, required: false }, 
  purchase_ios_sources: { type: Array, required: false }, 
  genres: {type: String, required: false}, 
  },
);

purchase_web_sources: [
  {
    source: String,
    display_name: String,
    id: Number,
    link: String,
    app_name: String,
    app_download_link: String,
    formats: {
      price: { type: Number},
      format: { type: String},
      type: {
        type: { type: String }
      },
    },
  }
]
purchase_ios_sources: [
  {
    source: String,
    display_name: String,
    id: Number,
    link: String,
    app_name: String,
    app_download_link: String,
    formats: {
      price: { type: Number},
      format: { type: String},
      type: {
        type: { type: String }
      },
    },
  }
]
purchase_android_sources [
  {
    source: String,
    display_name: String,
    id: Number,
    link: String,
    app_name: String,
    app_download_link: String,
    formats: {
      price: { type: Number},
      format: { type: String},
      type: {
        type: { type: String }
      },
    },
  }
]


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;