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

$("button").text("Add new buddy");
$("label[for=confirm]").text("Yes!!!!!!");
$("label[for=deny]").text("NOOOOO!!");
$("input[value=email]").val("Olivia");
$("input[type=email]").val("email");
$("h1, h2").text("Conent Form");
console.log($('p').text())
