// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })

// let clearBtn = document.querySelector('#clear-btn');
// clearBtn.addEventListener('click', function(){
//   document.querySelectorAll('input').forEach(input => {
//     input.value = "";
//   })
// })

// let btn = $('button');

$('#clear-btn').click(function() {
  $('input').val('');
  localStorage.clear();
})

$('button').click(function(e) {
  e.preventDefault();
})

$('input').on('input', function() {
  localStorage.setItem('name', $('#name').val());
  localStorage.setItem('email', $('#email').val());
  // localStorage.setItem('number', JSON.stringify($('.phone').map(val())));
  //couldnt get phone numbers
});

$(document).ready(function() {
  $('#name').val(localStorage.getItem('name'));
  $('#email').val(localStorage.getItem('email'));
})


console.log($('p').text())
