const express = require('express');

const recipes = require('./recipe-model.js');

const router = express.Router();

//  getRecipes,
//     getShoppingList,
//     getInstructions,

router.get('/', (req, res) => {
  recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;

  recipes.getShoppingList(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});
router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  recipes.getInstructions(id)
  .then(recipe => {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});





module.exports = router;

// - `GET /api/recipes/`: all recipes (without details about ingredients or steps)
// - `GET /api/recipes/:id/shoppingList`: a list of ingredients and quantities for a single recipe
// - `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
// - `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient.
// <!-- I am adding this so I can make a pull request -->