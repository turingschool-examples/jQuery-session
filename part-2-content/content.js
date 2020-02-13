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

$('button[type="submit"]').text('Add New Buddy');
$('label[for="confirm"]').text('Yes!!!');
$('label[for="deny"]').text('No!!!');
$('input[type!="number"]').val('hi');
$('input[type="number"]').val('333');
$('h1, h2').text('Contact Form');
// 1. Modify the inner text of the 'Save Contact' button to say "Add New Buddy"
// 2. Make the check box labels more enthusiastic (ex: `Yes!!!` or `No!!!`)
// 3. Give all of the inputs default values when the page loads (not placeholders -- actual values)
// 4. Select both headings (h1 and h2) and change them to say "Contact Form".
// 5. Commit your changes!
