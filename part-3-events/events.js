$(document).ready(function() {
  // 1. Rewrite the event handlers on each of the buttons into jQuery code.
  $("button:not(#clear-btn)").on("click", function(e) {
    e.preventDefault();
    console.log("Button click");
  });

  $("#clear-btn").on("click", function() {
    localStorage.clear();
    $("input").each(function() {
      $(this).val("");
    });
  });

  console.log($("p").text());

  // 2. Listen for an`input` event on all inputs on the page. When the event fires, save that input's value to local storage
  $("input").on("input", function() {
    const key = $(this).attr("id");
    const value = $(this).val();
    localStorage.setItem(key, value);
  });
  // 3. When the page loads, set the value of the inputs to what was saved in local storage
  $("input").each(function() {
    const key = $(this).attr("id");
    const value = localStorage.getItem(key);
    if (key) {
      $(this).val(value);
    }
  });
  // 4. When you click the clear button, clear local storage as well.
});
