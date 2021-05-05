const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';
console.log(Recipe)
// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {

    // Run your code here, after you have insured that the connection was made
    (async function () {
      // CREATE
    
      // const res = await Recipe.create({
      //   title: "Spaghetti Bolognaise",
      //   level: "easy",
      //   ingredients: ["spaghetti", "tomat", "ail"],
      //   cuisine: "casserole",
      //   dishType: "italian",
      // });
      // console.log(res)
      const inserted = await Recipe.insertMany(data); // insert docs in db
      console.log(
        `seed recipes done : ${inserted.length} documents inserted in database !`
      );
      // READ
      // const catNamedFelix = await CatModel.findOne({ name: "felix" }); // single object
    
      // const catsNamedFelix = await CatModel.find({ name: "felix" }); // array of obj
    
       const Recipefind = await Recipe.find({title: "Rigatoni alla Genovese"}) 
       console.log(Recipefind)
      // UPDATE


    
      // UPDATE
      const updatedRecipe = await Recipe.findOneAndUpdate({ duration: 220 }, { duration: 100 });


      console.log(updatedRecipe)
      

      // DELETE
      const removedRecipe = await Recipe.deleteOne({
        title: "Carrot Cake",
      });
    })();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  console.log("finish")
