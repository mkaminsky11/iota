## :visited

### Summary

The `:visited` CSS [pseudo-class][0] lets you select only links that have been visited. This style may be overridden by any other link-related pseudo-classes, that is [`:link`][1], [`:hover`][2], and [`:active`][3], appearing in subsequent rules. In order to style appropriately links, you need to put the `:visited` rule after the `:link` rule but before the other ones, defined in the _LVHA-order_: `:link` --- `:visited` --- `:hover` --- `:active`.

**Note: **For privacy reasons, browsers strictly limit the styles you can apply using an element selected by this pseudo-class: only [`color`][4], [`background-color`][5], [`border-color`][6], [`border-bottom-color`][7], [`border-left-color`][8], [`border-right-color`][9], [`border-top-color`][10], [`outline-color`][11], [`column-rule-color`][12], `fill` and `stroke`. Note also that the alpha component will be ignored: the alpha component of the not-visited rule is used instead (except when the opacity is `0`, in that case the whole color is ignored, and the one of the not-visited rule is used.

Though the color can be changed, the method `getComputedStyle` will lie and always give back the value of the non-visited color.

For more information on the limitations and the motivation for them, see [Privacy and the :visited selector][13].

### Examples

    a:visited { color: #4b2f89; }
    a:visited { background-color: white } 



[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/:link "The :link CSS pseudo-class lets you select links inside elements. This will select any link which has not yet been visited, even those already styled using selector with other link-related pseudo-classes like :hover, :active or :visited. In order to appropriately style links, you need to put the :link rule before the other ones, as defined by the LVHA-order: :link — :visited — :hover — :active. The :focus pseudo-class is usually placed right before or right after :hover, depending on the expected effect."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/:hover "The :hover CSS pseudo-class matches when the user designates an element with a pointing device, but does not necessarily activate it. This style may be overridden by any other link-related pseudo-classes, that is :link, :visited, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :hover rule after the :link and :visited rules but before the :active one, as defined by the LVHA-order: :link — :visited — :hover — :active."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/:active "The :active CSS pseudo-class matches when an element is being activated by the user. It allows the page to give a feedback that the activation has been detected by the browser. When interacting with a mouse, this is typically the time between the user presses the mouse button and releases it. The :active pseudo-class is also typically matched when using the keyboard tab key. It is frequently used on <a> and <button> HTML elements, but may not be limited to just those."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/border-color "The border-color CSS property is a shorthand for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-color "The border-bottom-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-bottom are more convenient and preferable."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-color "The border-left-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-left are more convenient and preferable."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/border-right-color "The border-right-color CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties  border-color or border-right are more convenient and preferable."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-color "The border-top-color CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties border-color or border-top are more convenient and preferable."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/outline-color "The outline-color CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/column-rule-color "The column-rule-color CSS property lets you set the color of the rule drawn between columns in multi-column layouts."
[13]: https://developer.mozilla.org/en/docs/CSS/Privacy_and_the_:visited_selector "https://developer.mozilla.org/en/docs/CSS/Privacy_and_the_:visited_selector"