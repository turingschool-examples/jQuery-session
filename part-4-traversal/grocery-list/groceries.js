// const $ = require('jquery');

$('.cheese').click(function() {
	$('.cheeses').children().css('background-color', 'pink')
})

$(document).ready(function () {
	$('.tomato-sauce').parent().addClass('red');
	$('.pizza-ingredients .cheeses li').addClass('bold');
	$('li.cheese').click(function(event) {
		$(event.target).children().addClass('pink');
	});
	$('.lettuce').click(function(event) {
		$(event.target).siblings().addClass('green');
	});
	$('li').click(function(event) {
		$(event.target).toggleClass('strikeout');
	});
})
