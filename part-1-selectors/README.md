# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?
You can select a single element by its ID using $('#id'). The # symbol is similar,
but you don't have to write document.querySelector or document.getElementById

2. What does the jQuery function return? How is it similar or different from a DOM Element object?
It returns a jQuery object that has a specific set of methods that can now be applied
to that DOM element. The DOM element object is different because it has fewer/different
methods

3. How can you select multiple elements with jQuery?
If you select something by a class name, it will select everything with that class name
like querySelectorAll

4. How can you select multiple elements with different IDs and classes in one selector expression?
By separating them with commas (like $('div, span, p'))

5. What are the different ways of chaining selectors?
You can chain selectors by their ids, classes, and element types. For example, you could
target all p elements in a div with an id of box by doing $('#box p'). You increase specificity from left to right

6. How do you select elements based on different attributes?
^ means an element starts with a string, $ means it ends with that string. For example,
You can target an href attribute on a link using $('a[href^=https]') to target all links that start with https or $('a[href$=.pdf]') to target all links that end with .pdf. You could also do something like $('input[type=text]') to target all text inputs.

7. How do you select a checkbox based on its state?
$('input:checked')

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
