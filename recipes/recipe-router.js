const express = require('express');

const recipes = require('./recipe-model.js');

const router = express.Router();



router.get('/', (req, res) => {
  recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/', (req, res) => {

  recipes.getById(req.params.id)
    .then(data => {
      if (!data) {
        res.json({ message: 'can\'t find data'});
      }
      res.json(data);
    })
    .catch(error => {
      console.log(error);
  })
})

router.get('/:id/shoppingList', async(req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await recipes.getShoppingList(id)
        if (recipe.length) {
          res.json(recipe);
    }
  }catch (error) {
          next(error);
      }
    })

 
router.get('/:id/instructions', async (req, res, next) => {
  try {
    // const id = req.params.id;
    const data = await recipes.getInstructions(req.params.id)
        if (data.length) {
          res.json(data);
        } else {
          res.json({message:"data is not found."})
    }
  }catch (error) {
          next(error);
      }
    })
module.exports = router;

// - `GET /api/recipes/`: all recipes (without details about ingredients or steps)
// - `GET /api/recipes/:id/shoppingList`: a list of ingredients and quantities for a single recipe
// - `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
// - `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient.
// <!-- I am adding this so I can make a pull request -->