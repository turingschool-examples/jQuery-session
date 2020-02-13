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
  * .click() .keydown() .keypress() .keyup() .mouseover() .mouseout() .mouseenter() .mouseleave() .scroll() .focus() .blur() .resize()

2. Which method allows us to listen to any kind of event? How do you specify the event?
  * jQuery provides a method __.on()__ to respond to any event on the selected elements. This is called an _event binding_.
  * Simple event binding
  ```JavaScript
  $( "p" ).on( "click", () => {
  console.log( "<p> was clicked" );
  });
  ```

3. What arguments do the methods from the previous two questions take?
  * the __.on()__ _method_ takes two arguments
  1) the type of _event_
  2) the _callback function_

4. How do you take advantage of event delegation with jQuery? How is it different from vanilla JS event delegation?
  * __Event delegation__ allows us to attach a single event listener, to a ___parent element___, that will fire for all _descendants_ matching a selector, whether those descendants exist now or are added in the future.
  ```html
  <html>
<body>
<div id="container">
    <ul id="list">
        <li><a href="http://domain1.com">Item #1</a></li>
        <li><a href="/local/path/1">Item #2</a></li>
        <li><a href="/local/path/2">Item #3</a></li>
        <li><a href="http://domain4.com">Item #4</a></li>
    </ul>
</div>
</body>
</html>
  ```

  ```JavaScript
  // Attach a directly bound event handler
  $( "#list a" ).on( "click", function( event ) {
    event.preventDefault();
    console.log( $( this ).text() );
  });
  ```

5. How do you determine which element fired the event in a jQuery event listener? How is this different from finding the element that fired an event in vanilla JS?
  * vanilla JS -> `event.target`
  * jQuery -> `event object argument` contains all info about event, including the place, time, and type.

6. What’s the difference between this and $(this)? (think about what methods are available to each)
  * __this__ is the _DOM object_, whereas __$(this)__ is the _jQuery wrapper_ around _same_.
  * When using __this__ ---> you can call _DOM methods_ on it, but NOT jQuery methods.
  * When using __$(this)__ ---> you can call _jQuery methods_ on it, but NOT DOM methods.

7. Can you still access the event object within a jQuery event listener? If so, how?
  * QUESS: the event object is being kept track of in jQuery wrapper, so yes, one can be accessed inside of the other. by using $(this), one can see where the event took place?

## Exercises:

For the last example with our form, open up `events.js` in your editor, and `events.html` in the browser (don't forget to `require` jQuery in the JS!)

In the JS file:
1. ✓ Rewrite the event handlers on each of the buttons into jQuery code.
2. ✓ Listen for an `input` event on all inputs on the page. When the event fires, save that input's value to local storage
3. ✓ When the page loads, set the value of the inputs to what was saved in local storage
4. ✓ When you click the clear button, clear local storage as well.

Save and commit your work! After that, head over to the [traversal section](../part-4-traversal/).
