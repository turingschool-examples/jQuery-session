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

$('input').on('input', function(e) {
  localStorage.setItem('info', $(e.target).val())
})

$('input').val(localStorage.getItem('info'))

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
