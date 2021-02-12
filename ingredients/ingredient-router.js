const express = require('express');

const ingredient = require('./ingredient-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await ingredient.get();
  res.json(data);
  } catch (error) {
    next(error);
 }
} )

router.get('/:id', async (req, res, next) => {
  try {
   const data = await ingredient.getById(req.params.id)
    if (data) {
         res.json(data);
    
      } else {
           res.json({ message: 'can\'t find data'});
      }
   
  } catch (error) {
    next(error);
  }
})



router.get('/:id/recipes', async (req, res, next) => {
  try {
   const data = await ingredient.getIngredientsRecipes(req.params.id)
        if (data.length) {
          res.json(data);
        } else {
          res.json({message:"data is not found."})
    }
  } catch (error) {
    next(error);
 }
});

module.exports = router;