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

DOM traversal involves selecting an element and then traversing to other elements from that selection, either upwards or downwards through the DOM tree.

2. What can the siblings(), parent(), and children() methods do?

`.siblings( [selector ] )`
Description: Get the siblings of each element in the set of matched elements, optionally filtered by a selector.

Given a jQuery object that represents a set of DOM elements, the .siblings() method allows us to search through the siblings of these elements in the DOM tree and construct a new jQuery object from the matching elements.

The method optionally accepts a selector expression of the same type that we can pass to the \$() function. If the selector is supplied, the elements will be filtered by testing whether they match it.

`.parent( [selector ] )`
Description: Get the parent of each element in the current set of matched elements, optionally filtered by a selector.

Given a jQuery object that represents a set of DOM elements, the parent() method traverses to the immediate parent of each of these elements in the DOM tree and constructs a new jQuery object from the matching elements.

This method is similar to .parents(), except .parent() only travels a single level up the DOM tree. Also, $( "html" ).parent() method returns a set containing document whereas $( "html" ).parents() returns an empty set.

The method optionally accepts a selector expression of the same type that we can pass to the \$() function. If the selector is supplied, the elements will be filtered by testing whether they match it.

`.children( [selector ] )`
Description: Get the children of each element in the set of matched elements, optionally filtered by a selector.

Given a jQuery object that represents a set of DOM elements, the .children() method allows us to search through the children of these elements in the DOM tree and construct a new jQuery object from the matching elements. The .children() method differs from .find() in that .children() only travels a single level down the DOM tree while .find() can traverse down multiple levels to select descendant elements (grandchildren, etc.) as well. Note also that like most jQuery methods, .children() does not return text nodes; to get all children including text and comment nodes, use .contents().

The .children() method optionally accepts a selector expression of the same type that we can pass to the \$() function. If the selector is supplied, the elements will be filtered by testing whether they match it.

3. What's the difference between `.siblings()` and `.siblings([selector])`?

The former returns all siblings while the later returns all siblings that match the selector string.

4. What is prepend(), append(), and what are their differences?

`.prepend( content [, content ] )`
Description: Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

The .prepend() method inserts the specified content as the first child of each element in the jQuery collection (To insert it as the last child, use .append()).

The .prepend() and .prependTo() methods perform the same task. The major difference is in the syntax—specifically, in the placement of the content and target. With .prepend(), the selector expression preceding the method is the container into which the content is inserted. With .prependTo(), on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.

`.append( content [, content ] )`
Description: Insert content, specified by the parameter, to the end of each element in the set of matched elements.

The .append() method inserts the specified content as the last child of each element in the jQuery collection (To insert it as the first child, use .prepend()).

The .append() and .appendTo() methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With .append(), the selector expression preceding the method is the container into which the content is inserted. With .appendTo(), on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.

5. What arguments can `.prepend()` and `.append()` take?

DOM element, text node, array of elements and text nodes, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.

6. What is the difference between parent() and parents()? Why would I want to use either?

`parent()` only traverses a single level up to find the most immediate parent whereas `.parents()` traverse multiple levels.

There are use cases for both, especially if traversing multiple levels and then passing in a selector string to filter the ancestors.

7. Describe closest() and find(). What are their use cases?

`.closest( selector )`
For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree. Returns only a single or no elements. Traverses up from the current element.

`.find( selector )`
Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element. `.find()` can traverse multiple levels down the DOM tree.

## Exercises:

We've got two sets of exercises to tie the last sections together:

1. [Grocery List](./grocery-list)
2. [Presidents](./presidents)

Once you've finished and committed these exercises, push up all your changes and make a PR to submit your work! You're ready to write some jQuery.
