const $ = require('jquery');

$('.cheese').click(function() {
	$('.cheeses').children().css('background-color', 'pink')
})

$(document).ready(() => {
	$('.tomato-sauce').parents().css({
		background-color: 'red'
	})
})
