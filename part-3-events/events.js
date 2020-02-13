// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })

let btn2 = $("[type='submit']")
btn2.on('click', function(e){
  e.preventDefault()
})

let clearBtn = $('#clear-btn');
clearBtn.on('click', function() {
  $('input').val('')
})

$('#name, #email').on('input', function(e) {
  localStorage.setItem(e.target.id, $(e.target).val())
})

$('.phone').on('input', function(e) {
  $('.phone').each(function(index) {
    localStorage.setItem('phone' + index, $(this).val())
  })
})

$('#name').val(localStorage.getItem('name'))
$('.phone').each(function(index) {
  console.log('phone' + index)
  $(this).val(localStorage.getItem('phone' + index))
})


$('#email').val(localStorage.getItem('email'))

$('#clear-btn').on('click', function(e) {
  localStorage.clear()
})

// let clearBtn = document.querySelector('#clear-btn');
// clearBtn.addEventListener('click', function(){
//   document.querySelectorAll('input').forEach(input => {
//     input.value = "";
//   })
// })

console.log($('p').text())
