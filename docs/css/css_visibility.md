## visibility

### Summary

The `visibility` CSS property has two purposes:

1. The `hidden` value hides an element but leaves space where it would have been.
2. 
The `collapse` value hides rows or columns of a table. It also collapses XUL elements.

* _[Initial value][0]_ `visible` 
* _Applies to_ all elements 
* _[Inherited][1]_ yes 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ yes, as a [visibility][4] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: visible [|][6] hidden [|][6] collapse
    

    visibility: visible
    visibility: hidden
    visibility: collapse
    
    visibility: inherit
    

### Values

**`visible`**

> Default value, the box is visible.

**`hidden`**

> The box is invisible (fully transparent, nothing is drawn), but still affects layout.  Descendants of the element will be visible if they have `visibility:visible` (this doesn't work in IE up to version 7).

**`collapse`**

> For table rows, columns, column groups, and row groups the row(s) or column(s) are hidden and the space they would have occupied is removed (as if `[`display`][7]: none` were applied to the column/row of the table). However, the size of other rows and columns is still calculated as though the cells in the collapsed row(s) or column(s) are present. This was designed for fast removal of a row/column from a table without having to recalculate widths and heights for every portion of the table. For XUL elements, the computed size of the element is always zero, regardless of other styles that would normally affect the size, although margins still take effect. For other elements, `collapse` is treated the same as `hidden`.

### Interpolation

Visiblity values are interpolable between _visible_ and _not-visible_. One of the start or ending values must therefore be _`visible`_ or no interpolation can happen. If one of the values is `visible`, interpolated as a discrete step where values of the timing function between `0` and `1` map to `visible` and other values of the timing function (which occur only at the start/end of the transition or as a result of `cubic-bezier()` functions with y values outside of \[0, 1\]) map to the closer endpoint.

### Examples

    p        { visibility: hidden; }    /* paragraphs won't be visible */
    p.showme { visibility: visible; }   /* except of these with class showme */
    tr.col   { visibility: collapse; }  /* table rows with class col will collapse */
    

### Notes

The support for `visibility:collapse` is missing or partially incorrect in some modern browsers. In many cases it may not be correctly treated like `visibility:hidden` on elements other than table rows and columns.

`visibility:collapse` may change the layout of a table if the table has nested tables within the cells that are collapsed, unless `visibility:visible` is specified explicitly on nested tables.


[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/visibility#Interpolation "Values of the visibility CSS property are interpolable if the start or the end value is visible. In that case all values of the timing function which are equal to 1 map to visible and non-equal to 1 to non-visible."
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/display "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline."