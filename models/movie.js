const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movie_id: { type: String }, //movie’s unique identifier
  genres: {type: String},
  purchase_web_sources: [{
      source: { type: String},
      display_name: { type: String},
      id: { type: Number},
      link: { type: String},
      app_name: { type: String},
      app_download_link: { type: String},
      formats: {
        price: { type: Number},
        format: { type: String},
        type: { type: String }
      },
  purchase_ios_sources: [{
      source: { type: String},
      display_name: { type: String},
      id: { type: Number},
      link: { type: String},
      app_name: { type: String},
      app_download_link:{ type: String},
      formats: {
        price: { type: Number},
        format: { type: String},
        type: { type: String }
      },
  purchase_android_sources: [{
      source: { type: String},
      display_name: { type: String},
      id: { type: Number},
      link: { type: String},
      app_name: { type: String},
      app_download_link: { type: String},
      formats: {
        price: { type: Number},
        format: { type: String},
        type: { type: String }
      },
    }]
  }]
}]
});
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;