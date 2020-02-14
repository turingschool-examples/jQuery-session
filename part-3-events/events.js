// const $ = require('jquery');

$('button:not(#clear-btn)').on('click',function(event){
  event.preventDefault();
});

$("#clear-btn").on("click", function() {
  localStorage.clear();
  $("input").each(function() {
    $(this).val("");
  });
});

$("input").on("input", function() {
  const storeElement = $(this);
  const key = storeElement.attr("id");
  let value = storeElement.val();
  const isCheckbox = storeElement.is('input[type="checkbox"]');
  if (isCheckbox) {
    const isChecked = storeElement.is(":checked");
    value = isChecked;
  }
  localStorage.setItem(key, value);
});

$("input").each(function() {
  const storeElement = $(this);
  const key = storeElement.attr("id");
  const value = localStorage.getItem(key);
  const isCheckbox = storeElement.is('input[type="checkbox"]');
  if (key && isCheckbox) {
    storeElement.prop("checked", value);
  } else if (key) {
    $(this).val(value);
  }
});

console.log($('p').text())
