const Post = require('../models/posts');



function postsIndex(req, res) {
  Post
    .find()
    .exec()
    .then(posts => res.render('blog/', { posts }))
    .catch(err => res.render('error', { err }));
}

function postsNew(req, res) {
  res.render('blog/new');
}


function postsShow(req, res) {
  Post
    .findById(req.params.id)
    .exec()
    .then(post => res.render('blog/show', { post }))
    .catch(err => res.render('error', { err }));
}

function postsCreate(req, res) {
  req.body.user = req.currentUser;
  Post
    .create(req.body)
    .then(() => res.redirect('/blog'))
    .catch(err => res.render('error', { err }));
}


function postsEdit(req, res) {
  Post
    .findById(req.params.id)
    .exec()
    .then(post => res.render('blog/edit', { post }))
    .catch(err => res.render('error', { err }));
}


function postsUpdate(req, res) {
  Post
    .findById(req.params.id)
    .exec()
    .then(post => {
      post = Object.assign(post, req.body);
      return post.save();
    })
    .then(post => res.redirect(`/blog/${post.id}`))
    .catch(err => res.render('error', { err }));
}

function postsDelete(req, res) {
  Post
    .findById(req.params.id)
    .exec()
    .then(post => post.remove())
    .then(() => res.redirect('/blog'))
    .catch(err => res.render('error', { err }));
}


module.exports = {
  index: postsIndex,
  show: postsShow,
  new: postsNew,
  create: postsCreate,
  edit: postsEdit,
  delete: postsDelete,
  update: postsUpdate

};
