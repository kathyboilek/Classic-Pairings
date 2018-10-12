const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wineSchema = new Schema({
    WineID: {
        type: String,
        require: true
    },
    Vintage: {
        type: Date,
        default: Date.now() 
    },
    Color: {
        type: String,
        required: true
    }
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine