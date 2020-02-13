$(document).ready(function() {
  // jQuery code goes here, in the body of this callback function
  let labels = $('label')
  let phoneInputs = $('.phone')
  let emailInput = $('[for="email"]')
  let checkedBox = $(':checked')
  let labelsInP = $('p label')
  let clearBtn = $('#clear-btn')


  console.log(checkedBox.attr('id'), emailInput);
  labelsInP.addClass('purple')
  emailInput.addClass('blue')
  phoneInputs.addClass('yellow')
  labels.addClass('green')
  clearBtn.addClass('red')
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
