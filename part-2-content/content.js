// const $ = require("jquery");

$(document).ready(function() {
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

  console.log($("p").text());

  // 1. Modify the inner text of the 'Save Contact' button to say "Add New Buddy"
  $("form button[type='submit']").text("Add New Buddy");
  // 2. Make the check box labels more enthusiastic(ex: `Yes!!!` or`No!!!`)
  $('label[for="confirm"]').text("Yes!!!");
  $('label[for="deny"]').text("No!!!");
  // 3. Give all of the inputs default values when the page loads(not placeholders-- actual values)
  $("input#name").val("Chris");
  $("input.phone")
    .eq(0)
    .val(734);
  $("input.phone")
    .eq(1)
    .val(395);
  $("input.phone")
    .eq(2)
    .val(4112);
  $("#email").val("cjrpostma@gmail.com");
  // 4. Select both headings(h1 and h2) and change them to say "Contact Form".
  $("h1, h2").text("Contact Form");
});
