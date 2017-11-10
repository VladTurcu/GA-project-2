$(() => {
  const $repeater = $('.repeater');
  const $addBtn = $('.addIng');

  const $reg = $('.form-register');
  const $login = $('.form-login');
  const $homeBtn = $('.home-btn');
  const $menuBtn = $('.menu');
  const $navMenu = $('.navbar-menu');

  $('form#register').validate({
    rules: {
      email: { required: true, email: true, remote: '/checkemail' }
    },
    messages: {
      email: { required: 'Please enter a valid email address', email: 'Please enter a valid email address', remote: 'This email is already registered' }
    }
  });

  $('form').not('#register').validate();
  console.log($('form#register').find('[name=email]').rules());

  $('.ingredients select').select2({ tags: true });

  function addIngredient(){
    $('.ingredients select').select2('destroy');
    const $newIngredient = $repeater.clone();

    $repeater.parent().append($newIngredient);
    const index = $newIngredient.index();
    $newIngredient.find('input, select').each((i, input) => {
      const name = $(input).attr('name');
      const newName = name.replace(/[0-9]+/, index);
      $(input).attr('name', newName);
    });
    $('.ingredients select').select2({ tags: true });
  }

  function burgerBtn(){
    $menuBtn.toggleClass('is-active');
    $navMenu.toggleClass('is-active');
  }

  function regShow(){
    $login.slideUp(500);
    $reg.delay(500).slideDown(500);
  }

  $addBtn.on('click', addIngredient);
  $homeBtn.on('click', regShow);
  $menuBtn.on('click', burgerBtn);
});
