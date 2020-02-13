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
  $('button').text('Add New Buddy');
  $('label[for=confirm]').text('Yes!!!');
  $('label[for=deny]').text('No!!!');
  $('input').val('555');
  $('h1, h2').text('Contact Form');
})
