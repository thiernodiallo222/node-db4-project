
const db = require("../data/config");

function get() {
    return db("ingredients");
}

   function getById(id){
        if (!id) {
            return null;
        } else {
        return db("ingredients").where("ingredients.id", id).first();

        }
      
}

  function getIngredientsRecipes(id){
        if (!id) {
            return null;
        }
    return db.select("r.id ", "i.name", "r.name" )
    .from("recipes as r")
    .join("recipes_ingredients as ri", "r.id", "ri.recipes_id")
    .join("ingredients as i", "i.id", "ri.ingredients_id")
    .where("i.id", id)
    .orderBy("r.id", "asc");          
}

module.exports = {
    get, 
    getById,
   getIngredientsRecipes,
}

//  `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient.
// <!-- I am adding this so I can make a pull request -->
