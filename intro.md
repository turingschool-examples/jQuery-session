# Introduction to jQuery

## What is jQuery

[jQuery](https://jquery.com/) is a library built on top of JavaScript to make our lives easier as developers. It provides some extra functionality for accessing and manipulating elements on the DOM, as well as responding to events.

While it is an older library, it is still used in [plenty](https://trends.builtwith.com/javascript) of codebases. Furthermore, sometimes interviewers will give you a code challenge in jQuery, so it's a good thing to be familiar with.

Until you start working in a framework like React, jQuery will be able to make your DOM manipulation much easier, so we're going to focus on the follow four areas of the library's functionality:

1. Selecting Elements
2. Getting and Setting Content
3. Responding to events
4. Traversing the DOM

Before that, let's talk about how to install it.

## Getting jQuery

jQuery can be added to a project in two ways:
1. A Content-Delivery Network (CDN)
2. Via a package manager (like `npm`)

A CDN functions much like a script tag -- we add it an html file, and import the library whenever the HTML page runs.

```HTML
<!-- Google-Hosted CDN: -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

```

You're more likely to see jQuery imported as a package. In some project starter kits, the library will already be brought in as a dependency, but it's good to know how to set it up yourself.


## Using jQuery

jQuery provides a function that looks like this:
```JavaScript
$('selector')
```
Where `'selector'` is a string used to select some kind of element.

The selectors are typically CSS selectors -- similar to what you've used when querySelecting elements.

Unlike `document.querySelector`, the jQuery function will give you back a jQuery object with a [whole lot of methods](https://api.jquery.com/) in it.

```JavaScript
$('h1') // => outputs a jQuery object for any h1 elements on the page
// contrast with
document.querySelector('h1') // => outputs a DOMElement

$('h1').addClass('blue');
```

We'll look more deeply at other methods available to us later on, but for now, explore the documentation a bit.


### Questions
1. What terminal command would you use to bring jQuery in via npm?

2. After you have jQuery brought in as a dependency, how would you access it in a JavaScript file? (think about how we bring `chai` into a project)

3. Why would we bring in jQuery as a `dependency` rather than a `devDependency`?

4. Looking at the documentation, what does `.addClass()` do?

### Exercises:

Let's get jQuery into a project.
1. Navigate into the `intro-exercise` directory.
2. Get jQuery imported into the project using npm.
3. Open `index.html` in the browser
4. In the `intro.js` file, use jQuery to select the span element and:
  1. change the span's text to say '1911'
  2. give the span a class of 'green'
5. Commit your changes!

## Up next:
Go to the [next](./next/README.md) README file. 
