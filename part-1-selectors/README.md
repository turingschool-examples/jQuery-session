# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?
  * using jQuery to select an element:
  ```JavaScript
  $(selector)
  ```
  * using Vanilla JS
  ```JavaScript
  var selectedThing = document.querySelector('.someClass');
  ```
  * a list of jQuery selectors can be found here: (https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

2. What does the jQuery function return? How is it similar or different from a DOM Element object?
  * jQuery function returns a jQuery object with a load of methods() already on it.

3. How can you select multiple elements with jQuery?
  * Unlike document.querySelector jQuery can select multiple elements at the same time by chaining your selectors together:
  ```JavaScript
  $( "div, span, p.myClass" ).css( "border", "3px solid red" );

  ```

4. How can you select multiple elements with different IDs and classes in one selector expression?
  * see __ABOVE__ response __^__

5. What are the different ways of chaining selectors?
  * in the selector, chain all selections by separating with a comma;

6. How do you select elements based on different attributes?
  ```html
  <label>
    <input type="radio" name="newsletter" value="Hot Fuzz">
    <span>name?</span>
  </label>
  ```

  ```JavaScript
  <script>
  $( "input[value='Hot Fuzz']" ).next().text( "Hot Fuzz" );
  </script>
  ```
  * this will change the text  of the the _.next()_ thing that is near the the selected button with a value of 'Hot Fuzz'; The text of the `<span>` will change to 'Hot Fuzz'

7. How do you select a checkbox based on its state?\
  * Using the jQuery __prop()__ Method:
  ```JavaScript
  <script>
    $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                alert("Checkbox is checked.");
            }
            else if($(this).prop("checked") == false){
                alert("Checkbox is unchecked.");
            }
        });
    });
  </script>
  ```

  * Using the jQuery __:checked__ Selector
  ```JavaScript
  <script>
    $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                alert("Checkbox is checked.");
            }
            else if($(this).is(":not(:checked)")){
                alert("Checkbox is unchecked.");
            }
        });
    });
  </script>
  ```




## Exercises:
Open up the `selectors.html` file in your browser.
In the `selectors.js` file, use jQuery to:
1. ✓ Select all the labels and give them a class of "green"
2. ✓ Select all of the `phone` inputs and give them a class of "yellow"
3. ✓ Select the label for the email input and give it a class of "blue"
4. ✓ On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)
5. ✓ Give all labels inside of a p tag a class of "purple"
6. ✓ Give the Clear button a class of red
7. Commit your changes!

Once you're done, head on to [part-2-content](../part-2-content/README.md)
