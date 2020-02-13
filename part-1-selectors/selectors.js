let btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  e.preventDefault();
});

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
});

$(document).ready(() => {
  $('label').addClass('green');
  $('input.phone').addClass('yellow');
  $("label[for='email']").removeClass('green');
  $("label[for='email']").addClass('blue');
  console.log($('#confirm').attr('ID'));
  console.log($('#confirm').attr('type'));
  $('p label').addClass('purple');
  $("button[id='clear-btn']").addClass('red');
});
