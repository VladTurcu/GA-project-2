const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const recipes = require('../controllers/recipes');
const posts = require('../controllers/posts');
const users = require('../controllers/users');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const Recipe = require('../models/recipe');
const Post = require('../models/posts');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));
router.get('/user', (req, res) => res.render('user'));
router.get('/about', (req, res) => res.render('about'));

router.route('/recipes')
  .get(recipes.index)
  .post(secureRoute, recipes.create);

router.route('/recipes/new')
  .get(secureRoute, recipes.new);

router.route('/recipes/:id')
  .get(recipes.show)
  .put(secureRoute, recipes.update)
  .delete(secureRoute, recipes.delete);


router.route('/recipes/:id/edit')
  .get(secureRoute, recipes.edit);

router.route('/cheeses/:id/favorite')
  .post(secureRoute, recipes.favorite);

/////////////////////////////////////////////////////////////////////////////////
///blog posts routes
////////////////////////////////////////////////////////////////////////////////

router.route('/blog')
  .get(posts.index)
  .post(secureRoute, posts.create);

router.route('/blog/new')
  .get(secureRoute, posts.new);

router.route('/blog/:id')
  .get(posts.show)
  .put(secureRoute, posts.update)
  .delete(secureRoute, posts.delete);


router.route('/blog/:id/edit')
  .get(secureRoute, posts.edit);


router.route('/register')
  .get(registrations.new)
  .post(registrations.create);


router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.post('/recipes/:id/comments', (req, res) => {
  Recipe
    .findById(req.params.id)
    .exec()
    .then(recipe => {
      recipe.comments.push(req.body);
      return recipe.save();
    })
    .then(recipe => res.redirect(`/recipes/${recipe.id}`))
    .catch(err => res.render('error', {err}));
});

router.delete('/recipes/:id/comments/:commentId', (req, res) => {
  Recipe
    .findById(req.params.id)
    .exec()
    .then( recipe => {
      const comment = recipe.comments.id(req.params.commentId);
      comment.remove();
      return recipe.save();
    })
    .then(recipe => res.redirect(`/recipes/${recipe.id}`))
    .catch(err => res.render('error', {err}));
});

router.post('/blog/:id/comments', (req, res) => {
  Post
    .findById(req.params.id)
    .exec()
    .then(post => {
      post.comments.push(req.body);
      return post.save();
    })
    .then(post => res.redirect(`/blog/${post.id}`))
    .catch(err => res.render('error', {err}));
});

router.delete('/blog/:id/comments/:commentId', (req, res) => {
  Post
    .findById(req.params.id)
    .exec()
    .then( post => {
      const comment = post.comments.id(req.params.commentId);
      comment.remove();
      return post.save();
    })
    .then(post => res.redirect(`/blog/${post.id}`))
    .catch(err => res.render('error', {err}));
});

router.route('/users/:id')
  .get(users.show);

router.get('/logout', sessions.delete);

router.get('/checkemail', users.checkEmail);

module.exports = router;
