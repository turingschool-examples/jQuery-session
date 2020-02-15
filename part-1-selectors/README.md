# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?
- you can select it by its ID/class, or you can use the :first / :last selector. Vanilla JS is different in that you can't use the :first / :last

2. What does the jQuery function return? How is it similar or different from a DOM Element object?
- it returns an a collection of the elements you selected or created

3. How can you select multiple elements with jQuery?
- you can select a class on multiple elements or you can select all elements of a particular type by inputing the name of the element

4. How can you select multiple elements with different IDs and classes in one selector expression?
- you can provide a comma-separated list of elements like in css

5. What are the different ways of chaining selectors?
- use comma separation

6. How do you select elements based on different attributes?
- $( "input[name='first_name']" );

7. How do you select a checkbox based on its state?
- $( "form :checked" );

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
