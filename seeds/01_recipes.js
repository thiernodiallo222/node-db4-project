
exports.seed = function(knex) {
  return knex("recipes").insert([
    {name: "Guinean couscous"},
    {name: "Cassava Sauçage"},
    {name: "Hamburger"},
    {name: "Pen cake"},
    {name: "Mexican taco"},
    {name: "Pizza"}
  ]);
};