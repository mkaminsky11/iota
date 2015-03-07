## :active

### Summary

The `:active` CSS [pseudo-class][0] matches when an element is being activated by the user. It allows the page to give a feedback that the activation has been detected by the browser. When interacting with a mouse, this is typically the time between the user presses the mouse button and releases it. The `:active` pseudo-class is also typically matched when using the keyboard tab key. It is frequently used on [`<a>`][1] and [`<button>`][2] HTML elements, but may not be limited to just those.

This style may be overridden by any other link-related pseudo-classes, that is [`:link`][3], [`:hover`][4], and [`:visited`][5], appearing in subsequent rules. In order to style the appropriate links, you need to put the `:active` rule after all the other link-related rules, as defined by the _LVHA-order_: `:link` --- `:visited` --- `:hover` --- `:active`.

**Note:** On systems with multi-button mice, CSS 3 specifies that the `:active` pseudo-class must only apply to the primary button; on right-handed mice, this is typically the leftmost button.

### Example

### HTML

    <body>
        <h1>:active CSS selector example</h1>
        <p>The following link will turn lime during the time you click it and release the click: <a href="#">Mozilla Developer Network</a>.</p>
    </body>

### CSS

    body { background-color: #ffffc9 }
    a:link { color: blue } /* unvisited links */
    a:visited { color: purple } /* visited links */
    a:hover { font-weight: bold } /* user hovers */
    a:active { color: lime } /* active links */



[0]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/a "The HTML <a> Element (or the HTML Anchor Element) defines a hyperlink, the named target destination for a hyperlink, or both."
[2]: https://developer.mozilla.org/en/docs/Web/HTML/Element/button "The HTML <button> Element represents a clickable button."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/:link "The :link CSS pseudo-class lets you select links inside elements. This will select any link which has not yet been visited, even those already styled using selector with other link-related pseudo-classes like :hover, :active or :visited. In order to appropriately style links, you need to put the :link rule before the other ones, as defined by the LVHA-order: :link — :visited — :hover — :active. The :focus pseudo-class is usually placed right before or right after :hover, depending on the expected effect."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/:hover "The :hover CSS pseudo-class matches when the user designates an element with a pointing device, but does not necessarily activate it. This style may be overridden by any other link-related pseudo-classes, that is :link, :visited, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :hover rule after the :link and :visited rules but before the :active one, as defined by the LVHA-order: :link — :visited — :hover — :active."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/:visited "The :visited CSS pseudo-class lets you select only links that have been visited. This style may be overridden by any other link-related pseudo-classes, that is :link, :hover, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :visited rule after the :link rule but before the other ones, defined in the LVHA-order: :link — :visited — :hover — :active."