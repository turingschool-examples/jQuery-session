# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?

  $('selector')
  $('selector).first() -selects first element in the array
  $('selector').get( index ) - argument of get is index number of array
  $( "#myId" ) - select single element id

2. What does the jQuery function return? How is it similar or different from a DOM Element object?

 a. The jQuery Object: The Wrapped Set: Selectors return a jQuery object known as the "wrapped set," which is an array-like structure that contains all the selected DOM elements. You can iterate over the wrapped set like an array or access individual elements via the indexer ($(sel)[0] for example). More importantly, you can also apply jQuery functions against all the selected elements.

 b. In one sentence, DOM objects are the objects that the web browser is using to render elements on the web page whereas jQuery objects are basically wrapper objects around a set of DOM elements.

3. How can you select multiple elements with jQuery?

  $( "div.myClass, ul.people" ) select multiple elements
  $( ".myClass" ) select classes
  $( "#contents ul.people li" ) select by compound css selector

4. How can you select multiple elements with different IDs and classes in one selector expression?

  - Just like css. Use a comma to seperate the selectors
  $('selector, selector, selctor')

5. What are the different ways of chaining selectors?

  - $('#Create .myClass,#Edit .myClass')

6. How do you select elements based on different attributes?

   $( "input[name='first_name']" ) select by attribute

7. How do you select a checkbox based on its state?

  -$('#isAgeSelected').click(function() {
    $("#txtAge").toggle(this.checked);
});

  the .checked property


## Exercises:
Open up the `selectors.html` file in your browser.
In the `selectors.js` file, use jQuery to:
1. Select all the labels and give them a class of "green"
2. Select all of the `phone` inputs and give them a class of "yellow"
3. Select the label for the email input and give it a class of "blue"
4. On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)
5. Give all labels inside of a p tag a class of "purple"
6. Give the Clear button a class of red
7. Commit your changes!

Once you're done, head on to [part-2-content](../part-2-content/README.md)
