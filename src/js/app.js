$(() => {
  const $repeater = $('.repeater');
  const $addBtn = $('.addIng');
  $('.description').attr('maxlength', 4);
  $('.ingredients select').select2({ tags: true });


  function addIngredient(){
    const newIngredient = $repeater.clone();
    $repeater.parent().append(newIngredient.val(''));
  }


  $addBtn.on('click', addIngredient);
});
