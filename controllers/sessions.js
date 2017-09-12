const User = require('../models/user');

function sessionsNew(req, res){

  res.render('./recipes');
}

function sessionsCreate(req, res){
  User
    .findOne({email: req.body.email})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)){
        req.flash('danger', 'Invalid credentials');
        return res.redirect('/');
      }
      //user authentification
      req.session.userId = user.id;
      return res.redirect('/recipes');
    });
}

function sessionsDelete(req, res){

  req.session.regenerate(() => res.redirect('/'));
}



module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete

};
