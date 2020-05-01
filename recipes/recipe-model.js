
// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

const db = require("../data/config");

    function  getRecipes(){
        return db("recipes")
    }

    function getShoppingList(recipe_id){
        if (!recipe_id) {
            return null;
        }
        
        return db("recipes_ingredients")
            .join("recipes", "recipes.id", "recipes_ingredients.recipes_id")
            .join("ingredients", "ingredients.id", "recipes_ingredients.ingredients_id").where({ recipe_id }).select("ingredients*").orderBy("ingredients.id");
}

function getInstructions(recipe_id) {
    return db("recipes")
        .join("instructions", "recipes.id", "instructions.recipes_id")
         .where({ recipe_id }).select("instructions*").orderBy("instructions.id");

}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}


