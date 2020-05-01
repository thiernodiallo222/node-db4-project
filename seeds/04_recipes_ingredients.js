exports.seed = function(knex) {
  return knex('recipes_ingredients').insert([
    { recipes_id: 1, ingredients_id: 1},
    { recipes_id: 1, ingredients_id: 2},
    {recipes_id: 1, ingredients_id: 3},
    {recipes_id: 2, ingredients_id: 1},
    {recipes_id: 2, ingredients_id: 3},
    {recipes_id: 3, ingredients_id: 4},
    {recipes_id: 3, ingredients_id:5},
    {recipes_id: 4, ingredients_id: 11},
    {recipes_id: 4, ingredients_id:8},
    {recipes_id: 5, ingredients_id: 9},
    { recipes_id: 5, ingredients_id: 2 },
    {recipes_id: 6, ingredients_id:10},
    {recipes_id: 6, ingredients_id: 1},
    {recipes_id: 6, ingredients_id:3},
    {recipes_id: 1, ingredients_id: 11},
     {recipes_id: 1, ingredients_id:9},
  ]);
};