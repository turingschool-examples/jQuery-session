# DOM Traversal

Last but not least, jQuery provides us methods for traversing the DOM.

Think back to your mod one projects (Check yo Self, Number Guesser, etc). If you had to delete a card by clicking a button, how many `.parentElement`s or `.nextSiblings` did you have to chain?

jQuery is here to ease things up a bit.

Let's say we had a list of elements:

```html
<ul>
  <li id="a">A</li>
  <li id="b">B</li>
  <li id="c">C</li>
  <li id="d">D</li>
</ul>
```

And when something happens to D, we want to change something else on A. In vanilla JS, this could look something like:

```JavaScript
let d = document.querySelector('#d');
d.addEventListener('click', function(e) {
  e.target.previousSibling.previousSibling.prepreviousSibling.innerText = "D was clicked!"
});
```

In jQuery, we could do this:

```JavaScript
$('#d').on('click', function() {
  $(this).siblings('#a').text('D was clicked!')
})
```

While some things may look new here, we're just chaining some handy methods on to the element that was clicked in order to access and modify its sibling.

We could also use jQuery to add or delete elements in response to an event like this! Let's explore some other methods:

## Questions:
1. Describe what DOM traversal is and why it is useful.
DOM traversal is when an event fires and needs to contact another DOM element other than the one the event was fired on.

2. What can the siblings(), parent(), and children() methods do?
Access sibling, parent, and children elements by their classes or ids

3. What's the difference between `.siblings()` and `.siblings([selector])`?
Siblings will access all of the sibling elements whereas passing in a specific selector will only access that specific sibling

4. What is prepend(), append(), and what are their differences?
Prepend adds something before an element and append adds it after

5. What arguments can `.prepend()` and `.append()` take?
One or more HTML element

6. What is the difference between parent() and parents()? Why would I want to use either?
Parent only accesses the immediate parent of an element whereas parents access all parent elements (including grandparents and so on). You would use either when you want an actioon to impact the elements' parents as well.

7. Describe closest() and find(). What are their use cases?
Closest() finds the closest element whereas find() locates a specific descendant element

## Exercises:
We've got two sets of exercises to tie the last sections together:

1. [Grocery List](./grocery-list)
2. [Presidents](./presidents)

Once you've finished and committed these exercises, push up all your changes and make a PR to submit your work! You're ready to write some jQuery.
