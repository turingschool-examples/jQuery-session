$(document).ready(function() {

  $('label').addClass('green')
  $('.phone').addClass('yellow')
  $("[for='email']").addClass('blue').removeClass('green')
  console.log($(":checked").attr('id'))
  $('p label').addClass('purple')
  $('#clear-btn').addClass('red')
})


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
