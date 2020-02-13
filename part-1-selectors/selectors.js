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

console.log($('input:checked').attr("id"));

$(document).ready(function () {
  $('label').addClass('green');
  $('input[type="number"]').addClass('yellow');
  $('label[for="email"]').removeClass('green').addClass('blue');
  $('p label').removeClass('green').addClass('purple');
  $('button#clear-btn').addClass('red');
})
