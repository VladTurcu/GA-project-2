$(() => {
  const $repeater = $('.repeater');
  const $repeate = $('.repeate');
  const $addBtn = $('.addIng');
  const $addStep = $('.addStep');
  const $reg = $('.form-register');
  const $login = $('.form-login');
  const $homeBtn = $('.home-btn');

  $('.ingredients select').select2({ tags: true });


  function addIngredient(){
    $('.ingredients select').select2('destroy');
    const $newIngredient = $repeater.clone();
    $repeater.parent().append($newIngredient);
    $('.ingredients select').select2({ tags: true });
  }


  function regShow(){
    $login.slideUp(700);
    $reg.delay(700).slideDown(500);

  }


  function addStep(){
    const $newStep = $repeate.clone();
    $repeate.parent().append($newStep);
  }


  $addBtn.on('click', addIngredient);
  $addStep.on('click', addStep);
  $homeBtn.on('click', regShow);


});
