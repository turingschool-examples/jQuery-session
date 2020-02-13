# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?

  * $('#selector') vs document.querySelector('#selector')

2. What does the jQuery function return? How is it similar or different from a DOM Element object?

  * A object with methods vs an element

3. How can you select multiple elements with jQuery?

  * using the appropriate selector

4. How can you select multiple elements with different IDs and classes in one selector expression?

  * Selectors for type and other Selector like:
    * :contains() Selector Select all elements that contain the specified text.

5. What are the different ways of chaining selectors?
  * $(selector 1.1 selector 1.2, selector 2.1 selector 2.2)

6. How do you select elements based on different attributes?
  * $(element :psudoSelector)

7. How do you select a checkbox based on its state?
  * $(:checked)

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
