## :right

### Summary

The `:right` CSS [page][0] [pseudo-class][1] matches any right page when printing a page. It allows to describe the styling of right-side page.

Whether the page is left or right is decided by the major writing direction of the document. For example, if the first page has a major writing direction of left-to-right then it will be a `:right` page and if it has a major writing direction of right-to-left then it will be a `:left` page.

**Note:** You can't change all CSS properties. You can only change the the margin, padding, border, and background properties of the page box. All other CSS properties will be ignored, and only the page box, not the document content on the page, will be affected.

### Examples

    @page :right {
      margin: 2in 3in;
    } 
    



[0]: https://developer.mozilla.org/en/CSS/@page "@page"
[1]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"