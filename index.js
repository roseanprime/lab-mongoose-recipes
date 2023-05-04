const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

//Method 1 : Using Async Await

const manageRecipes = async () => {
  try {
    // Connection to the database "recipe-app"
    const dbConnection = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to the database: "${dbConnection.connection.name}"`);

    // Before adding any recipes to the database, let's remove all existing ones
    await Recipe.deleteMany();

    // Run your code here, after you have insured that the connection was made

    
    const myRecipe = {
      title: "Asian Glazed Chicken Thighs",
      level: "Amateur Chef",
    ingredients: [
        "1/2 cup rice vinegar",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt to taste",
        "8 skinless, boneless chicken thighs"
      ],
      cuisine: "Asian",
      dishType: "main_course",
      image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 40,
      creator: "Chef LePapu"
    }

     await Recipe.create(myRecipe)
     console.log(myRecipe);

//Iteration 3-Insert multiple recpes
let allRecipes = await Recipe.insertMany(data)
console.log(allRecipes);


//Iteration 4 -Update Recipe
let updateRecipes = await Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100});
console.log(updateRecipes);

//Iteration 5- Removr=e a recipe
let removeRecipes = await Recipe.deleteOne({title: 'Carrot Cake'});
console.log(removeRecipes);

 mangoose.disconnect()
  } catch (error) {
    console.log(error);
  }
};

manageRecipes();