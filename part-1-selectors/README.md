# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?

**_To select a single element in jQuery you would use the following:_** `$('selected element')`**_. This differs from vanilla Javascript because you're leaving out the document.kind of query, and you no longer need to specifiy the kind of query (ie: getElementById, querySelector, getElementByTagName_**

2. What does the jQuery function return? How is it similar or different from a DOM Element object?

**_The jQuery function returns a jQuery object. It's similar to the DOM because they are both objects, but different in that the DOM functions on its own, while jQuery acts as a wrapper for DOM elements._**

3. How can you select multiple elements with jQuery?

**_To select multiple elements with jQuery, you'd use the following syntax_** `$('selector1, selector2, selectorN')`**_. You can select as many elements as you'd like with jQuery._**

4. How can you select multiple elements with different IDs and classes in one selector expression?

***_To select multiple elements with different IDs and classes on one selector, you can use the following syntax*_* `$('el, #id, .class')` **_thus, selecting a wide range of elements regardless of whether they have a class, or id._**

5. What are the different ways of chaining selectors?

**_The different way of chaining selectors include:_**
**1. Chaining them with a comma** `$('el, .class, #id')`
**1.  Chaining via dot notation** `$(div.class)` **This allows you to select only elements in a certain div that has that class**

6. How do you select elements based on different attributes?

**_To select elements based on different attributes, you can put the attribute inside brackets inside your jQuery function, via the following syntax_** `$('[attribute]')`

7. How do you select a checkbox based on its state?

**_To select a checkbox based on it's state, you would need to use the following syntax_**
**For a checked, checkbox_** `$('checkbox:checked')`


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
