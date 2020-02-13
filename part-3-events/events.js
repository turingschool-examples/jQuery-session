// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })

$('button').click(function(e) {
  e.preventDefault();
});

// let clearBtn = document.querySelector('#clear-btn');
// clearBtn.addEventListener('click', function(){
//   document.querySelectorAll('input').forEach(input => {
//     input.value = "";
//   })
// })

$('#clear-btn').click(function() {
  $('input').val('');
  localStorage.clear();
});

$('input').on('input', function() {
  localStorage.setItem('name', $('#name').val());
  localStorage.setItem('phone', JSON.stringify($('.phone').map(function() {
    return $(this).val();
  })));
  localStorage.setItem('email', $('#email').val());
});

$(document).ready(function() {
  localStorage.getItem('name') && $('#name').val(localStorage.getItem('name'));
  $('.phone').each(function(el, i) {
    $(el).val(JSON.parse(localStorage.getItem('phone'))[i])
  });
  $('#email').val(localStorage.getItem('email'));
});

console.log($('p').text())
