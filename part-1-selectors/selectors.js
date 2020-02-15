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

$('label').addClass('green');
$('.phone').addClass('yellow');
$("label[for='email']").addClass('blue');
console.log($('input[id="confirm"]').attr('id'));
$('p label').addClass('purple');
$('button[id="clear-btn"]').addClass('red');
