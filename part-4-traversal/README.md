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
- DOM traversal is useful when we want to use a single element as an anchor then traverse to an adjacent sibling.

2. What can the siblings(), parent(), and children() methods do?
- siblings() get the elements that are sibiling element.
- parent() finds the parent of the current element.
- children() gets the child elements of the object the method is on.

3. What's the difference between `.siblings()` and `.siblings([selector])`?
- siblings() returns all the elements. sibling(selector) returns all siblings that match the selector

4. What is prepend(), append(), and what are their differences?
- prepend inserts the argument as the first child
- apprend inserts content to the end of the element

5. What arguments can `.prepend()` and `.append()` take?
- text, array, html string, jQuery object.

6. What is the difference between parent() and parents()? Why would I want to use either?
- parent only finds the parent, parents will traverse up multiple steps.

7. Describe closest() and find(). What are their use cases?
- closest() will find the first element with a specified selector
- find()  Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.


## Exercises:
We've got two sets of exercises to tie the last sections together:

1. [Grocery List](./grocery-list)
2. [Presidents](./presidents)

Once you've finished and committed these exercises, push up all your changes and make a PR to submit your work! You're ready to write some jQuery.
