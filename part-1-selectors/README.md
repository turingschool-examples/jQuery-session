# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:

1. How do you select a single element in jQuery? How does this differ from vanilla JS?

`$('something')`

Using the `$` method, if the selector string argument matches more than one element, `$` will always return a collection of elements, similar to `document.querySelectorAll()`. You could then select specific elements from the collection using any number of methods, if more than one element was returned.

2. What does the jQuery function return? How is it similar or different from a DOM Element object?

`$` returns a jQuery object. The jQuery object has many methods available that a regular DOM node, nodelist or htmlcollection does not. It is important to know this because the regular element API does not always match up with the methods available on `$` and vice versa.

3. How can you select multiple elements with jQuery?

Via the `$` method.

4. How can you select multiple elements with different IDs and classes in one selector expression?

Via the `$` method and chaining selectors using a comma (e.g. `$('p, #heading, .important')`)

5. What are the different ways of chaining selectors?

Comma: `$('p, #heading, .important');`

- Will select all matches.

Space: `$('p #heading .important');`

- Similar to a regular query selector, will treat each selector as a child of the previous.

Nothing: `$('p#heading.important')`;

- Matches elements that have all three selectors.

6. How do you select elements based on different attributes?

- The exact same way you would otherwise using a CSS selector but as an argument to `$` (e.g. `$('input[type="date"]');`)

7. How do you select a checkbox based on its state?

`$('input:checked')`
`$('input[type="radio"]:checked')`

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
