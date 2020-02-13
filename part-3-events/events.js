// const $ = require('jquery');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//   e.preventDefault();
// })

$("button").on("click", function(e){
  e.preventDefault();
});

// let clearBtn = document.querySelector('#clear-btn');
// clearBtn.addEventListener('click', function(){
//   document.querySelectorAll('input').forEach(input => {
//     input.value = "";
//   })
// })

$("#clear-btn").click(function(){
  $("input").val("");
})

console.log($('p').text())

$("input").on("change", function())
// 2. Listen for an `input` event on all inputs on the page. When the event fires, save that input's value to local storage
// 3. When the page loads, set the value of the inputs to what was saved in local storage
// 4. When you click the clear button, clear local storage as well.
