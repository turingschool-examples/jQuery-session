// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })


// let clearBtn = document.querySelector('#clear-btn');
// clearBtn.addEventListener('click', function(){
//   document.querySelectorAll('input').forEach(input => {
//     input.value = "";
//   })
// })

$('')

$(document).ready(() => {

  $('input').each(function () {
    $(this).val(localStorage.getItem($(this).attr('id')));
  });


  $('button').click(() => {
    event.preventDefault();
  });

  $('#clear-btn').on('click', () => {
    $('input').val('');
    localStorage.clear();
  });

  $('input').on('input', (event) => {
    localStorage.setItem(event.target.id, $(event.target).val());
  });
});



console.log($('p').text())
