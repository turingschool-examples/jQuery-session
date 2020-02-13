# Getting and Setting Content

Now that we can select elements with jQuery, let's talk about how we can work with them.

The jQuery object provides a lot of methods for accessing, adding and modifying content on a webpage. Let's start with a basic one:

## Working with Text

If we wanted to grab the inner text of this page's h1 tag, in vanilla JS we'd have to do this:

```JavaScript
document.querySelector('h1').innerText // "Getting and Setting Content"
```

In jQuery, we use a simple method:

```JavaScript
$('h1').text() // "Getting and Setting Content"
```

If we want to modify the text, things are just about as easy:

```JavaScript
// jQuery:
$('h1').text("Hello");

// Contrast with Vanilla JS:
document.querySelector('h1').innerText = "Hello";
```

jQuery provides methods that shorten up most Vanilla JS DOM operations. Let's look at some more:

## Questions:
1. How do you get the text from an element (like a paragraph) with jQuery?

**_To get the text from an element using jQuery, you'd need to use the following syntax `$(element).text()`_**

2. How do you set the text of an element?

**_To set the text from an element using jQuery, you'd need to use the following syntax `$(element).text()`_**
__
3. How do you get the html inside of an element in jQuery? How would you do this in Vanilla JS?

**_To get the html inside of an element usnig jQuery, you would need to use the following syntax `$(element).html() _**

4. How do you get the text / content from an input?

**_To get the html inside of an element using jQuery, you would need to use the following syntax `$(element).val()`_**

5. How do you set the text / content of an input?

**_To set the html inside of an element using jQuery, you would need to use the following syntax `$(element).val()`_**

6. How do you add / remove / toggle classes on an element?

**_To add a class on an element using jQuery, you would need to use the following syntax `$(element).addClass()`_**
**_To remove a class on an element using jQuery, you would need to use the following syntax `$(element).removeClass()`_**
**_To add a class on an element using jQuery, you would need to use the following syntax `$(element).toggleClass()`_**

7. What’s the difference between .text() and .text([some text here])?

**In `.text()`, you ware getting the text that is inside that element, whereas with `.text([some text here])`, you are setting the text of that element to what's inside the parenthesis of the jQuery text function._**

8. If you select multiple elements with jQuery, do you have to use a for loop / iterate through each to modify their content? Give an example.

**_To select multiple elements with jQuery, you do not have to use a for loop to iterate throug each element to modify their content, because the jQuery function will inherently select all the elements specified._** 

**ie:** `$(p).text('Hello, world!')` **_This will select all the paragraphs in a document and set them to 'Hello, world!'_**

## Exercises:
Open up the `content.html` file in your browser, and the `content.js` file in your code editor.

Within the JS file, use jQuery to:
1. Modify the inner text of the 'Save Contact' button to say "Add New Buddy"
2. Make the check box labels more enthusiastic (ex: `Yes!!!` or `No!!!`)
3. Give all of the inputs default values when the page loads (not placeholders -- actual values)
4. Select both headings (h1 and h2) and change them to say "Contact Form".
5. Commit your changes!

Then head on to [events](../part-3-events)
