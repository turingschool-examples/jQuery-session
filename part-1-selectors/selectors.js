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
$("[class='phone']").addClass('yellow');
// $("label[for=email]").addClass('blue');
//This does the same thing as below below, but would only select the labels that have that attribute
$("[for=email]").addClass('blue')
//I can use this above, b/c its the only element with an email value assigned to the "for" attribute
const checkedBox = $('[id=confirm]').attr('id');
console.log(checkedBox);

$('p label').addClass('purple');
$('p > label').addClass('purple');

$('#clear-btn').addClass('red');
