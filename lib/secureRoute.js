function secureRoute(req,res,next){
  if(!req.session.userId){
    return req.session.regenerate(()=> {
      req.flash('danger', 'You must be logged in order to cheese this action!');
      res.redirect('/login');
    });
  }
  next();
}

module.exports = secureRoute;
