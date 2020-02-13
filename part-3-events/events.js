$("button").on("click", function(e){
  e.preventDefault();
});

$("#clear-btn").click(function(){
  $("input").val("");
  localStorage.clear();
})

console.log($('p').text())

$("input").on("keyup", function(){
  let inputKey = $(this).attr("id");
  localStorage.setItem(inputKey, JSON.stringify($(this).val()));
})

$(document).ready(function() {
  $("input").each(function(){
    let inputKey = $(this).attr("id");
    if(localStorage.hasOwnProperty(inputKey)) {
      let savedInput = JSON.parse(localStorage.getItem(inputKey));
      $(this).val(savedInput);
    }
  })
});
