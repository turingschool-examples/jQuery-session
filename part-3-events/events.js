// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })

let $btn = $('button[type="submit"]');
$btn.on('click', function(e) {
  e.preventDefault();
})

let $clearBtn = $('#clear-btn');
$clearBtn.on('click', function(){
  $('input').each(function() {
    $(this).val('');
  })
  localStorage.clear();
})

$('input').on('keyup', function() {
  const key = $(this).attr('id');
  localStorage.setItem(key, $(this).val());
})

$('input').each(function() {
  const key = $(this).attr('id');
  $(this).val(localStorage.getItem(key))
})

console.log($('p').text())


// In the JS file:
// 1. Rewrite the event handlers on each of the buttons into jQuery code.
// 2. Listen for an `input` event on all inputs on the page. When the event fires, save that input's value to local storage
// 3. When the page loads, set the value of the inputs to what was saved in local storage
// 4. When you click the clear button, clear local storage as well.
