// Navigate into the intro - exercise directory.jQuery is included in this project via the CDN.
// In the intro.js file, use jQuery to select the span element and:
// change the span's text to say '1911'
// give the span a class of 'green'
// Commit your changes!

$(document).ready(function() {
  const span = $("span");
  span.text("1911");
  span.addClass("green");
});
