// const $ = require('jquery');
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

console.log($('p').text())

$(document).ready(function() {

  $("[type='submit']").text('Add New Buddy')
  $("[for='confirm']").text('Yes!!!')
  $("[for='deny']").text('No!!!')
  $('input').val('2234')
  $('h1,h2').text('Contact Form')
})
