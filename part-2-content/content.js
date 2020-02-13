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
  $('button').text('Add New Buddy!')
  $("label[for='confirm']").text('YES!!!!')
  $("label[for='deny']").text('NO!!!!!!')
  $('input').val('SUH BRAH')
  $('h1, h2').text('Contact Form')
})