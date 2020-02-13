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

$('label').addClass('green');
$('.phone').addClass('yellow');
$(`label[for='email']`).addClass('blue');
if ($(`input[type='checkbox'`).attr('checked')) {
  console.log($(`input[type='checkbox'`).attr('id'))
}
$('p label').addClass('purple');
$('#clear-btn').addClass('red');



// 1. Select all the labels and give them a class of "green"
// 2. Select all of the `phone` inputs and give them a class of "yellow"
// 3. Select the label for the email input and give it a class of "blue"
// 4. On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)
// 5. Give all labels inside of a p tag a class of "purple"
// 6. Give the Clear button a class of red
// 7. Commit your changes!
