## :first

### Summary

The `:first` [page][0] CSS [pseudo-class][1] describes the styling of the first page when printing a document.

**Note:** you cannot change all CSS properties. You can only change the margins, orphans, widows, and page breaks of the document. All other CSS properties will be ignored.

### Examples

    @page :first {
      margin: 2in 3in;
    } 
    

**Note:** you may only use the absolute length units when defining the margin. Please see the page about [length][2] for more information.

### Specification
Status
Comment

[CSS Paged Media Module Level 3][3]
Working Draft
No change.

[CSS Level 2 (Revision 1)][4]
Recommendation
Initial definition.

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari

Basic support
?
Not supported
8.0
9.2
?

Feature
Android
Firefox Mobile (Gecko)
IE Mobile
Opera Mobile
Safari Mobile

Basic support
?
Not supported
?
?
?

### See also

* [`@page`][5]
* [`:left`][6]
* [`:right`][7]



[0]: https://developer.mozilla.org/en/CSS/@page "@page"
[1]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[2]: https://developer.mozilla.org/en/CSS/length#Absolute_length_units "https://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/length#Absolute_length_units"
[3]: http://dev.w3.org/csswg/css3-page/#left-right-first "The definition of ':first' in that specification."
[4]: http://www.w3.org/TR/CSS2/page.html#page-selectors "The definition of ':first' in that specification."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/@page
[6]: https://developer.mozilla.org/en/docs/Web/CSS/:left
[7]: https://developer.mozilla.org/en/docs/Web/CSS/:right