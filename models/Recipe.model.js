const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    // TODO: write the schema
    title: String,
    level: String,
    ingredients: Array,
    cuisine: String,
    dishType: String,
    image: String,
    duration: Number,
    creator: String,
    created: Date
},
{ timestamps: true }
);

const Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe;
