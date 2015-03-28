
## ::after

### Summary

This is a summary

The CSS `::after` [pseudo-element][0] matches a virtual last child of the selected element. It is typically used to add cosmetic content to an element by using the [`content`][1] CSS property. This element is inline by default.

### Syntax

    element:after  { _style properties_ }  /* CSS2 syntax */

    element::after { _style properties_ }  /* CSS3 syntax */

The` ::after `notation was introduced in CSS 3 in order to establish a discrimination between [pseudo-classes][2] and [pseudo-elements][0]. Browsers also accept the notation `:after `introduced in CSS 2\.

### Examples

### Simple usage

Let's create two classes: one for boring paragraphs and one for exciting ones. We can then mark each paragraph by adding a pseudo-element to the end of it.

    <p >Here is some good old boring text.</p>
    <p>Here is some moderate text that is neither boring nor exciting.</p>
    <p >Contributing to MDN is easy and fun.
    Just hit the edit button to add new live samples, or improve existing samples.</p>

    .exciting-text::after {
      content: "<- now this *is* exciting!";
      color: green;
    }

    .boring-text::after {
       content:    "<- BORING!";
       color:      red;
    }

#### Output

### Decorative example

We can style text or images in the [`content`][1] property almost any way we want.

    <span >Notice where the orange box is.</span>

    .ribbon {
      background-color: #5BC8F7;
    }

    .ribbon::after {
      content: "Look at this orange box.";
      background-color: #FFBA10;
      border-color: black;
      border-style: dotted;
    }

#### Output

### Tooltips

The following example shows the use of the `::after` [pseudo-element][0] in conjunction with the [`attr()`][3] CSS expression and a `data-descr` [custom data attribute][4] to create a pure-CSS, glossary-like _tooltip_. Checkout the live preview below, or you can see this example on a [separate page.][5]

    <p>Here is the live example of the above code.<br />
      We have some <span data-descr="collection of words and punctuation">text</span> here with a few
      <span data-descr="small popups which also hide again">tooltips</span>.<br />
      Dont be shy, hover over to take a <span data-descr="not to be taken literally">look</span>.
    </p>


    span[data-descr] {
      position: relative;
      text-decoration: underline;
      color: #00F;
      cursor: help;
    }

    span[data-descr]:hover::after {
      content: attr(data-descr);
      position: absolute;
      left: 0;
      top: 24px;
      min-width: 200px;
      border: 1px #aaaaaa solid;
      border-radius: 10px;
      background-color: #ffffcc;
      padding: 12px;
      color: #000000;
      font-size: 14px;
      z-index: 1;
    }

#### Output



[0]: https://developer.mozilla.org/en/CSS/Pseudo-elements "Pseudo-elements"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/content "The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element. Objects inserted using the content property are anonymous replaced elements."
[2]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[3]: https://developer.mozilla.org/en/docs/CSS/attr "https://developer.mozilla.org/en/docs/CSS/attr"
[4]: https://developer.mozilla.org/en/HTML/Global_attributes#attr-data-* "en/HTML/Global_attributes#attr-data-*"
[5]: https://developer.mozilla.org/files/4591/css-only_tooltips.html "css-only_tooltips.html"
