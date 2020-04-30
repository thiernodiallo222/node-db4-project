
const db = require("../data/config");

    function find(){
        return db("recipes");
}

    function findById(id){
        if (!id) {
            return null;
        }
        return db("recipes").where({ id }).first();
}

function findSteps(id) {
    return db.select("steps.id as step_id ", "recipes.recipe_name",
        "steps.step_number", "steps.instructions")
        .from("recipes")
        .join("steps", "recipes.id", "steps.recipe_id")
        .where("recipes.id", id).orderBy("steps.id", "asc");
    
}

function add(recipe) {
   return db("recipes").insert(recipe);

}

function update(changes, id) {
    return db("recipes").where({ id }).update(changes);
}
   
    function remove(id){
        return db("recipes").where({ id }).del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}


