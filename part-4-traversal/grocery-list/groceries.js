$(document).ready(function() {
  // 1. Using the parent() selector, turn the parent container's background of .tomato-sauce to red.
  $(".tomato-sauce")
    .parent()
    .css("background-color", "red");

  // 2. On clicking the word "cheese", give mozzarella and gorgonzolla a pink background color.Hint: use the children() selector.
  $(".cheese").click(function() {
    $(".cheeses")
      .children()
      .css("background-color", "pink");
  });

  // 3. When you click on the.lettuce element, change its siblings' background color to green and the text to white.
  $(".lettuce").on("click", function() {
    $(this)
      .siblings()
      .css("background-color", "pink")
      .css("color", "white");
  });

  // 4. On clicking any < li > toggle the class .strikeout.
  $("li").on("click", function() {
    $(this).toggleClass("strikeout");
  });

  // 5. Starting at the.pizza - ingredients find the cheeses and make them bold.
  $(".pizza")
    .siblings(".pizza-ingredients")
    .children(".cheeses")
    .css("font-weight", "bold");

  // 6. Get the first item in our grocery list and change its text color to blue.
  $(".groceries li")
    .first()
    .css("color", "blue");

  // 7. Give all of the ingredients a background of lightgrey, except for the dough. Hint: use not()
  $("li:not('.dough')").css("background-color", "lightgrey");
});
