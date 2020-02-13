# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?

jQuery works like querySelectorAll by default, you have to use something like `.get()` to select a specific element in that node list by its index

2. What does the jQuery function return? How is it similar or different from a DOM Element object?

it returns a jQuery object, it is similar because it has a node list, but different because it also has a ton of methods attached

3. How can you select multiple elements with jQuery?

you can pass additional selectors to the `$()` function

4. How can you select multiple elements with different IDs and classes in one selector expression?

the same way you select multiples in CSS, selectors

5. What are the different ways of chaining selectors?

there are a ton, you can use `,`, `.`, `>`, etc.

6. How do you select elements based on different attributes?

with the CSS bracket notation `[name='value']`

7. How do you select a checkbox based on its state?

`$('[type='checkbox']')`


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
