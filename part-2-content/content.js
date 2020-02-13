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

$(document).ready(function() {
  $("button[type='submit']").text("Add New Buddy");
  $("label[for='confirm']").text("YES!!!");
  $("label[for='deny']").text("NO!!!");
  $("input").val("You're Default Value");
  $("h1, h2").text("Contact Form");
})

console.log($('p').text())
