# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?
jQuery differs from vanilla JS because it selects all matching elements by default. You could use $("selector").first().val() to select the first element found that matches the criteria. You could also use $( "#ID" ) to select based on ID (which must be unique, so only one element will be returned).
2. What does the jQuery function return? How is it similar or different from a DOM Element object?
The jQuery function returns a jQuery object, meaning it comes with inherited methods. This is different than an DOM element object because jQuery objects are wrapper objects around DOM element(s).
3. How can you select multiple elements with jQuery?
jQuery defaults to selecting all elements that match the selector, so you could just put a class name or element type as the selector.
4. How can you select multiple elements with different IDs and classes in one selector expression?
By including a comma and space between them in the selector.
5. What are the different ways of chaining selectors?
By including a comma and space between them in the selector, or by including the selectors in square brackets.
6. How do you select elements based on different attributes?
- $("attribute[name = 'value']")
- [name|=”value”]
- [name*=”value”]
- [name~=”value”]
- [name$=”value”]
- [name=”value”]
- [name!=”value”]
- [name^=”value”]
- [name]
- [name=”value”][name2=”value2″]

7. How do you select a checkbox based on its state?
$( "checkbox :checked" )

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
