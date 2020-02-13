$(document).ready(function() {
  const checkedBoxId = $('input[type="checkbox"]:checked').attr("id");
  console.log(checkedBoxId);

  const btn = document.querySelector("button");
  btn.addEventListener("click", function(e) {
    e.preventDefault();
  });

  const clearBtn = document.querySelector("#clear-btn");
  clearBtn.addEventListener("click", function() {
    document.querySelectorAll("input").forEach(input => {
      input.value = "";
    });
  });

  $("label").addClass("green");
  $(".phone").addClass("yellow");
  $("label[for='email']")
    .removeClass("green")
    .addClass("blue");
  $("p label").addClass("purple");
  $("#clear-btn").addClass("red");
});
