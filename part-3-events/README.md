# Events

jQuery provides cleaner ways to listen for and respond to events.

Say we had a button, and wanted to listen for a click event.

```JavaScript
// Vanilla JS:
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
  console.log('Button was clicked')
})

```

Vanilla JS makes us write a lot of code for one click. The whole process is much cleaner in jQuery:

```JavaScript
let btn = $('button');
btn.click(function () {
  console.log('Button was clicked')
})

```

Many parts are the same here:
- we still specify what kind of event we're listening for
- we still pass the event listener a _callback function_ to run when the event happens

But we have a cleaner, shorter syntax. We could shorten this up even more if we wanted to:

```JavaScript
$('button').click(function() {
  console.log('Button was clicked')
});
```

jQuery provides a lot of event listeners methods for specific events (`click`, `hover`, `focus`), as well as more general handlers whose syntax closely resembles `.addEventListener()`.

## Event Delegation
But what about dynamic content? jQuery even has ways to take advantage of [event delegation](https://learn.jquery.com/events/event-delegation/)! The pattern is a little different from what you've done in vanilla JS, but the ideas still apply.


## Questions:
Use the jQuery docs to answer the following:

1. What method(s) allows us to listen for / respond to an event with jQuery?
- on() method

2. Which method allows us to listen to any kind of event? How do you specify the event?
- .on( events [, selector ] [, data ], handler )

3. What arguments do the methods from the previous two questions take?
- events, selector, data, handler

4. How do you take advantage of event delegation with jQuery? How is it different from vanilla JS event delegation?
-

5. How do you determine which element fired the event in a jQuery event listener? How is this different from finding the element that fired an event in vanilla JS?
- You would still use the this keyword, but you use it in a jQuery wrapper.

6. What’s the difference between this and $(this)? (think about what methods are available to each)
- this is JS would be the event.target in Jquery $(this) returns the object.

7. Can you still access the event object within a jQuery event listener? If so, how?
- you can access the event object by using the data to find the element bound.


## Exercises:

For the last example with our form, open up `events.js` in your editor, and `events.html` in the browser (don't forget to `require` jQuery in the JS!)

In the JS file:
1. Rewrite the event handlers on each of the buttons into jQuery code.
2. Listen for an `input` event on all inputs on the page. When the event fires, save that input's value to local storage
3. When the page loads, set the value of the inputs to what was saved in local storage
4. When you click the clear button, clear local storage as well.

Save and commit your work! After that, head over to the [traversal section](../part-4-traversal/).
