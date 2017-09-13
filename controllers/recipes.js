const Recipe = require('../models/recipe');

function getIngredientsFromRecipes(recipes) {
  const allIngredients = recipes
    .map(recipe => recipe.ingredients)
    .reduce((array, ingredientArray) => array.concat(ingredientArray), [])
    .map(ingredient => ingredient.name)
    .sort();

  return Array.from(new Set(allIngredients));
}

function recipesIndex(req, res) {
  Recipe
    .find(req.query)
    .populate('user')
    .exec()
    .then(recipes => {
      const ingredients = getIngredientsFromRecipes(recipes);
      res.render('recipes/index', { recipes, ingredients });
    })
    .catch(err => res.render('error', { err }));
}

function recipesNew(req, res) {
  Recipe
    .find()
    .populate('user')
    .exec()
    .then(recipes => {
      const ingredients = getIngredientsFromRecipes(recipes);
      res.render('recipes/new', { ingredients });
    });
}

function recipesShow(req, res) {
  Recipe
    .findById(req.params.id)
    .populate('user favorites')
    .exec()
    .then(recipe => res.render('recipes/show', { recipe }))
    .catch(err => res.render('error', { err }));
}

function recipesCreate(req, res) {
  req.body.user = req.currentUser;
  Recipe
    .create(req.body)
    .then(() => res.redirect('/recipes'))
    .catch(err => res.render('error', { err }));
}

function recipesEdit(req, res) {
  Recipe
    .find()
    .exec()
    .then(recipes => {
      const ingredients = getIngredientsFromRecipes(recipes);
      const recipe = recipes.find(recipe => recipe.id === req.params.id);
      res.render('recipes/edit', { recipe, ingredients });
    })
    .catch(err => res.render('error', { err }));
}

function recipesUpdate(req, res) {
  Recipe
    .findById(req.params.id)
    .exec()
    .then(recipe => {
      recipe = Object.assign(recipe, req.body);
      return recipe.save();
    })
    .then(recipe => res.redirect(`/recipes/${recipe.id}`))
    .catch(err => res.render('error', { err }));
}

function recipesDelete(req, res) {
  Recipe
    .findById(req.params.id)
    .exec()
    .then(recipe => recipe.remove())
    .then(() => res.redirect('/recipes'))
    .catch(err => res.render('error', { err }));
}



module.exports = {
  index: recipesIndex,
  create: recipesCreate,
  new: recipesNew,
  show: recipesShow,
  edit: recipesEdit,
  delete: recipesDelete,
  update: recipesUpdate

};
