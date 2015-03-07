## :left

### Summary

The `:left` CSS [page][0] [pseudo-class][1] matches any left page when printing a page. It allows to describe the styling of left-side pages.

Whether the page is left or right is decided by the major writing direction of the document. For example, if the first page has a major writing direction of left-to-right then it will be a `:right` page and if it has a major writing direction of right-to-left then it will be a `:left` page.

**Note:** You can't change all CSS properties. You can only change the the [`margin`][2], [`padding`][3], [`border`][4], and [`background`][5] properties of the page box. All other CSS properties will be ignored, and only the page box, not the document content on the page, will be affected.

### Examples

    @page :left {
      margin: 2in 3in;
    } 
    



[0]: https://developer.mozilla.org/en/CSS/@page "@page"
[1]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/margin "The margin CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: margin-top, margin-right, margin-bottom and margin-left.
 Negative values are also allowed."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/padding "The padding CSS property sets the required padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/border "The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/background "The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment."