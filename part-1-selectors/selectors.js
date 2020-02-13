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
  $("label").addClass("green");
  $('.phone').addClass("yellow");
  $('label[for="email"]').removeClass('green').addClass("blue")
  $("input:checked").attr('ID');
  $("p").addClass("purple")
  $("#clear-btn").addClass("red")
})
