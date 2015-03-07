## background-blend-mode

### Summary

The `background-blend-mode` CSS property describes how the element's background images should blend with each other and the element's background color. 

Blending modes should be defined in the same order as the [`background-image`][0] CSS property. If the blending modes' and background images' list lengths are not equal, it will be repeated and/or truncated until lengths match.

* _[Initial value][1]_ `normal` 
* _Applies to_ all elements. In SVG, it applies to container elements, graphics elements, and graphics referencing elements. It also applies to [`::first-letter`][2] and [`::first-line`][3]. 
* _[Inherited][4]_ no 
* _Media_ [`none`][5] 
* _[Computed value][6]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    Formal syntax:  [<blend-mode>][7][#][8]

    background-blend-mode: normal;               /* One value */
    background-blend-mode: darken, luminosity;   /* Two values, one per background */
    
    background-blend-mode: initial;
    background-blend-mode: inherit;
    background-blend-mode: unset;
    

### Values

**`<blend-mode>`**

> Is a [`<blend-mode>`][9] denoting the blending mode to be applied. There can be several values, separated by commas.

### Examples



[0]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them."
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/Web/CSS/blend-mode "Possible values: normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: The previous entity may appear 0, 1 or several times, each occurrence being separated from the previous one by a comma."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/blend-mode "The documentation about this has not yet been written; please consider contributing!"