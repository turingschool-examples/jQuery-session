// const $ = require('jquery');

$('.cheese').click(function() {
	$('.cheeses').children().css('background-color', 'pink')
});

$('.tomato-sauce').parent().css('background-color', 'red');

$('.lettuce').on('click', function() {
	$(this).siblings().css({'background-color': 'green', 'color': 'white'});
})

$('li').on('click', function() {
	$(this).toggleClass('strikeout');
})

let $dough = $('.pizza-ingredients > li.dough');

$('.pizza-ingredients').children('.cheeses').css('font-weight', 'bold');
$('.groceries').children().eq(0).css('color', 'blue');
$('.groceries').children().not($dough).css('background-color', 'lightgrey');


// 1. Using the parent() selector, turn the parent container's background of .tomato-sauce to red.
// 2. On clicking the word "cheese", give mozzarella and gorgonzolla a pink background color. Hint: use the children() selector.
// 3. When you click on the .lettuce element, change its siblings' background color to green and the text to white.
// 4. On clicking any <li> toggle the class .strikeout.
// 5. Starting at the .pizza-ingredients find the cheeses and make them bold.
//
// 6. Get the first item in our grocery list and change its text color to blue.
//
// 7. Give all of the ingredients a background of lightgrey, except for the dough. Hint: use not()
