const User = require('../models/user');

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('recipe favorites')
    .exec()
    .then(user => res.render('users/show', { user }))
    .catch(err => res.render('error', { err }));
}

function usersCheckEmail(req, res) {

  if(!req.query.email) return res.json(true);

  User
    .findOne({ email: req.query.email })
    .exec()
    .then(user => res.json(!user));
}

module.exports = {
  show: usersShow,
  checkEmail: usersCheckEmail
};
