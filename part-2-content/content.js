$(document).ready(function() {
  // jQuery code goes here, in the body of this callback function
  let saveBtn = $('[type="submit"]')
  let checkboxYes = $('[for="confirm"]')
  let checkboxNo = $('[for="deny"]')
  let inputs = $('input')
  let h1H2 = $('h1, h2')

  h1H2.text('Contact Form')
  saveBtn.text('Add New Buddy')
  checkboxYes.text(`${checkboxYes.text()}!!!`)
  checkboxNo.text('No!!!')
  inputs.val('123')
inputs.each(function( index ) {
   $(this).val($(this).attr('placeholder'));
})

})




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
