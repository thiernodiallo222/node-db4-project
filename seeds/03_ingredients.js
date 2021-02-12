exports.seed = function(knex) {
  return knex('ingredients').insert([
      { name: "black pepper", quantity: 2.5 },
      { name: "Onion", quantity: 3.5 },
      { name: "salt", quantity: 1.5 },
      { name: "Olive oil", quantity: 4 },
     { name: "palm oil", quantity: 1},
      { name: "fish", quantity: 3.2 },
      { name: "cheese", quantity: 4 },
      { name: "beef", quantity: 1.8 },
     { name: "chicken", quantity: 5.1 },
      { name: "salmon", quantity: 6},
      { name: "red pepper", quantity:3},
      {name: "other", quantity:4.5}
  ]);
};