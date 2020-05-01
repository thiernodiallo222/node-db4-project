
// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

const db = require("../data/config");

    function  getRecipes(){
        return db("recipes")
    }

    function getById(recipe_id){
        if (!recipe_id) {
            return null;
        }
        return db("recipes").where("recipes.id", recipe_id ).first();
}

    function getShoppingList(recipe_id){
        if (!recipe_id) {
            return null;
        }
    return db.select("i.id ", "i.name", "i.quantity")
    .from("recipes as r")
    .join("recipes_ingredients as ri", "r.id", "ri.recipes_id")
    .join("ingredients as i", "i.id", "ri.ingredients_id")
    .where("r.id", recipe_id)
    .orderBy("i.id", "asc");          
}

function getInstructions(recipe_id) {
    return db.select("i.rank", "r.name", "i.title", "i.content")
    .from("recipes as r")
    .join("instructions as i", "r.id", "i.recipes_id")
    .where("r.id", recipe_id)
    .orderBy("i.rank");
}

module.exports = {
    getRecipes,
    getById,
    getShoppingList,
    getInstructions,
}


