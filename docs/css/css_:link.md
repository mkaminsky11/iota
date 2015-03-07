## :link

### Summary

The `:link` CSS [pseudo-class][0] lets you select links inside elements. This will select any link which has not yet been visited, even those already styled using selector with other link-related pseudo-classes like [`:hover`][1], [`:active`][2] or [`:visited`][3]. In order to appropriately style links, you need to put the `:link` rule before the other ones, as defined by the _LVHA-order_: `:link` --- `:visited` --- `:hover` --- `:active`. The [`:focus`][4] pseudo-class is usually placed right before or right after `:hover`, depending on the expected effect.

### Examples

    a:link {color: slategray;}
    .external:link {background-color: lightblue;}



[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/:hover "The :hover CSS pseudo-class matches when the user designates an element with a pointing device, but does not necessarily activate it. This style may be overridden by any other link-related pseudo-classes, that is :link, :visited, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :hover rule after the :link and :visited rules but before the :active one, as defined by the LVHA-order: :link — :visited — :hover — :active."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/:active "The :active CSS pseudo-class matches when an element is being activated by the user. It allows the page to give a feedback that the activation has been detected by the browser. When interacting with a mouse, this is typically the time between the user presses the mouse button and releases it. The :active pseudo-class is also typically matched when using the keyboard tab key. It is frequently used on <a> and <button> HTML elements, but may not be limited to just those."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/:visited "The :visited CSS pseudo-class lets you select only links that have been visited. This style may be overridden by any other link-related pseudo-classes, that is :link, :hover, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :visited rule after the :link rule but before the other ones, defined in the LVHA-order: :link — :visited — :hover — :active."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/:focus "The :focus CSS pseudo-class is applied when a element has received focus, either from the user selecting it with the use of a keyboard or by activating with the mouse (e.g. a form input)."