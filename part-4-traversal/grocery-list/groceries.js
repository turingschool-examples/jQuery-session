$('.cheese').click(function() {
	$('.cheeses').children().css('background-color', 'pink')
})

$('.tomato-sauce').parent().css('background-color', 'red')

$('.lettuce').click(function(){
	$(this).siblings().css('background-color', 'green').css('color', 'white');
})

$('li').click(function(){
	$(this).toggleClass('strikeout');
})

$('.pizza-ingredients').children('.cheeses').css("font-weight","Bold");


$('.groceries').children().first().css('color', 'blue');

$('.groceries').children().css('background-color', 'lightgrey').not('.dough');
