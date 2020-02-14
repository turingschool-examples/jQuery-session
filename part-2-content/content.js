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
$(document).ready(()=>{
  $("form button[type='submit']").text("Add New Buddy");
  $('label[for="confirm"]').text("Yes!!!!");
  $('label[for="deny"]').text("No!!!");
  $("input#name").val("Jenny");
  $("input.phone").eq(0).val(555);
    $("input.phone").eq(1).val(867);
    $("input.phone").eq(2).val(5309);
    $("#email").val("beachBoys@gmail.com");
    $("h1, h2").text("Contact Form");

})
