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

$("label").addClass("green");
$(".phone").addClass("yellow");
$("#email").addClass("blue");
$("p").find("label").addClass("purple");
$("#clear-btn").addClass("red");
const checkedID = $("input[type='checkbox']:checked").attr("id");
console.log(checkedID);
