$('tr').children('.name').css('background-color', 'red');
$('tr').children('.term').css('background-color', 'white');
$('tr').children('.party').css('background-color', 'blue');
$('tr.federalist, tr.whig, tr.democrat').children('.selected').addClass('blue');
$('tr.democratic-republican, tr.republican').children('.selected').addClass('red');
$('.died').next('tr').css('background-color', 'purple');
$('input[type="checkbox"]').on('click', function() {
  $(this).parent().css('background-color', 'purple')
})

$('#add').on('click', function() {
  const $num = $('#add-num').val();
  const $name = $('#add-name').val();
  const $term = $('#add-term').val();
  const $party = $('#add-party').val();
  $('tbody').append(`<tr class="president ${$party}">
    <td class="number">${$num}</td>
    <td class="name">${$name}</td>
    <td class="term">${$term}</td>
    <td class="party">${$party}</td>
    <td class="selected"><input type="checkbox"></td>
  </tr>`)
})

$('#remove').on('click', function() {
  let num = $('#num-to-remove').val();
  $('tbody').children().eq(num - 1).remove();
})
