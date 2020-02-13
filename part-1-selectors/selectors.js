let btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  e.preventDefault();
})

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
})

$(document).ready(function() {
  console.log($('[type=checkbox]:checked').attr('id'));
  $('label').addClass('green');
  $('.phone').addClass('yellow');
  $('label[for=email]').removeClass('green').addClass('blue');
  $('p label').addClass('purple');
  $('#clear-btn').addClass('red');
})
