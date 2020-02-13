$(document).ready(function() {
  // Select all of the tr elements.
  const tableRows = $("tr");

  // Make the background color of cells in the Name, Term and Party Affiliation columns red, white and blue, respectively.

  tableRows.children(".name").css("background-color", "red");
  tableRows.children(".term").css("background-color", "white");
  tableRows.children(".party").css("background-color", "blue");

  // Make the check box cells of any Federalist, whig and democratic presidents blue(you can add a class of blue)

  tableRows
    .siblings(".federalist, .whig, .democrat")
    .children(".selected")
    .addClass("blue");

  // Make the check box cells of any Democratic - Republicans or Republican presidents red(you can add a class of red).

  tableRows
    .siblings(".democratic-republican, .republican")
    .children(".selected")
    .addClass("red");

  // Make the whole row of any presidents who served after a president died purple

  tableRows
    .siblings(".died")
    .children()
    .css("background-color", "purple");

  // If a president is checked, make their column purple.
  $("tbody").on("click", 'input[type="checkbox"]', function() {
    $(this)
      .closest("tr")
      .children()
      .toggleClass("purple");
  });

  // Add a new president to the table when you click the 'add president' button(you can hard code their information).

  $('[data-hook="add-president"]').on("click", function() {
    const president = `
      <tr class="president democract one-term">
        <td class="number">46</td>
        <td class="name" style="background-color: red;">Bernie Sanders</td>
        <td class="term" style="background-color: white;">IMMEDIATELY PLEASE!</td>
        <td class="party" style="background-color: blue;">Democrat</td>
        <td class="selected blue"><input type="checkbox"></td>
      </tr>
   `;

    $("tbody").append(president);
  });

  // Remove a president(specified by their number) when you click the 'Remove President' button
  console.log($(`tr td.number:contains(20)`));

  $('[data-hook="remove-president"]').on("click", function() {
    const removeNumber = $("#num-to-remove")
      .val()
      .toString();

    $(`tr td.number:contains(${removeNumber})`)
      .parent()
      .remove();
  });

  // Refactor step 7. Make a form with the number, name, term length and party of your new president.
});
