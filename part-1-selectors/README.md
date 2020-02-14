# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?
- ```$('what you want to select')```
- You can select a single element by using the $ selector and including a string inside. this acts in a similar way as document.querySelectorAll(), except it adds methods to the element.

2. What does the jQuery function return? How is it similar or different from a DOM Element object?
- jQuery functions return a jQuery object. The object has additonal methods available for use.

3. How can you select multiple elements with jQuery?
- The $ selects multiple elements.

4. How can you select multiple elements with different IDs and classes in one selector expression?
-You can chain selectors with a comma.

5. What are the different ways of chaining selectors?
- comma, space or nothing. comma will select as if an or, space will treat it as a child of the first.

6. How do you select elements based on different attributes?
- $(element[type = 'value'])

7. How do you select a checkbox based on its state?
- $('input:checked')

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
