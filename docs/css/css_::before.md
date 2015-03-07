## ::before

### Summary

`::before` creates a [pseudo-element][0] that is the first child of the element matched. It is often used to add cosmetic content to an element by using the [`content`][1] property. This element is inline by default.

### Syntax

    element::before { _style properties_ }  /* CSS3 syntax */
    
    element:before  { _style properties_ }  /* CSS2 obsolete syntax (only needed to support IE8) */
    
    p::before { content: "Hello world!"; } /* inserts content before every p element */ 

The `::before` notation was introduced in CSS3 in order to establish a discrimination between [pseudo-classes][2] and [pseudo-elements][3]. Browsers also accept the notation `:before` introduced in CSS 2\.

### Examples

### Adding quotation marks

One simple example of using pseudo-elements is to provide quotation marks. Here we use both `::before `and `::after` to insert quotation characters.

#### HTML content

    <q>Some quotes</q>, he said, <q>are better than none</q>.

#### CSS content

    q::before { 
      content: "«";
      color: blue;
    }
    q::after { 
      content: "»";
      color: red;
    }

#### Output

### Decorative example

We can style text or images in the [`content`][1] property almost any way we want.

#### HTML content

    <span >Notice where the orange box is.</span>

#### CSS content

    .ribbon {
       background-color: #5BC8F7;
    }
    
    .ribbon::before {
       content:          "Look at this orange box.";
       background-color: #FFBA10;
       border-color:     black;
       border-style:     dotted;
    }

#### Output

### To-do list

In this example we will create a simple to-do list using pseudo-elements. This method can often be used to add small touches to the UI and improve user experience.

#### HTML content

    <ul>
      <li>Buy milk</li>
      <li>Take the dog for a walk</li>
      <li>Exercise</li>
      <li>Write code</li>
      <li>Play music</li>
      <li>Relax</li>
    </ul>
    

#### CSS content

    li {
      list-style-type: none;
      position: relative;
      margin: 2px;
      padding: 0.5em 0.5em 0.5em 2em;
      background: lightgrey;
      font-family: sans-serif;
    }
    
    li.done {
      background: #CCFF99;
    }
    
    li.done::before {
      content: '';
      position: absolute;
      border-color: #009933;
      border-style: solid;
      border-width: 0 0.3em 0.25em 0;
      height: 1em;
      top: 1.3em;
      left: 0.6em;
      margin-top: -1em;
      transform: rotate(45deg);
      width: 0.5em;
    }

#### JavaScript content

    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if( ev.target.tagName === 'LI') {
         ev.target.classList.toggle('done'); 
      }
    }, false);
    

Here is the above code example running live. Note that there are no icons used, and the check-mark is actually the `::before` that has been styled in CSS. Go ahead and get some stuff done.

#### Output

### Notes

Although the positioning fixes in Firefox 3.5 do not allow content to be generated as a separate previous sibling (as per the [CSS spec][4] stating "The :before and :after pseudo-elements elements interact with other boxes... as if they were real elements inserted just inside their associated element."), they can be used to provide a slight improvement on tableless layouts (e.g., to achieve centering) in that, as long as the content to be centered is wrapped in a further child, a column before and after the content can be introduced without adding a previous or following sibling (i.e., it is perhaps more semantically correct to add an additional span as below, than it would to add an empty <div/\> before and after). (And always remember to add a width to a float, since, otherwise, it will not float!)

#### HTML content

    <div >
    <span >"Floated Before" should be generated on the left of the 
    viewport and not allow overflow in this line to flow under it. Likewise 
    should "Floated After" appear on the right of the viewport and not allow this 
    line to flow under it.</span>
    </div>

#### CSS content

    #floatme { float: left; width: 50%; }
    
    /* To get an empty column, just indicate a hex code for a non-breaking space: \a0 as the content (use \0000a0 when following such a space with other characters) */
    .example::before {
      content: "Floated Before";
      float: left;
      width: 25%
    }
    .example::after {
      content: "Floated After";
      float: right;
      width:25%
    }
    
    /* For styling */
    .example::before, .example::after, .first {
      background: yellow;
      color: red;
    }

#### Output



[0]: https://developer.mozilla.org/en/CSS/Pseudo-elements "Pseudo-elements"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/content "The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element. Objects inserted using the content property are anonymous replaced elements."
[2]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "https://developer.mozilla.org/en/docs/CSS/Pseudo-classes"
[3]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[4]: http://www.w3.org/TR/CSS21/generate.html#before-after-content