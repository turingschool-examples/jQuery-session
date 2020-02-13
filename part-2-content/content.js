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
// check to make sure I'm getting the right element
const yolo = $('input').val();
console.log(yolo);

$('button[type=submit]').text('Add Contact');
$('label[for=confirm]').text('Yes!!!');
$('label[for=deny]').text('No!!!');
$('input').val('Enter something here');
$('input[class=phone]').val('555');
$('input[class=phone]:last-of-type').val('5555');
$('h1, h2').text('Contact Form');
