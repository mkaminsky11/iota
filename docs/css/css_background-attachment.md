## background-attachment

### Summary

If a [`background-image`][0] is specified, the `background-attachment` [CSS][1] property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.

* _[Initial value][2]_ `scroll` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ no 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]:   [<attachment>][9][#][10]
    

    background-attachment: scroll
    background-attachment: fixed
    background-attachment: local
    
    background-attachment: inherit
    

### Values

**`fixed`**

> This keyword means that the background is fixed with regard to the viewport. Even if an element has a scrolling mechanism, a 'fixed' background doesn't move with the element.

**`local`**

> This keyword means that the background is fixed with regard to the element's contents: if the element has a scrolling mechanism, the background scrolls with the element's contents, and the background painting area and background positioning area are relative to the scrollable area of the element rather than to the border framing them.

**`scroll`**

> This keyword means that the background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)

### Examples

[View the live example][11]

    body {
      background-image: url("images/cartooncat.png");
      background-attachment: fixed;
    }
    

### Multiple background image support

This property supports multiple background images. You can specify a different `<attachment>` for each background, separated by commas:

    body {
      background-image: url("img1.png"), url("img2.png");
      background-attachment: scroll, fixed;
    }

Each image is matched with the corresponding attachment type, from first specified to last.


[0]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them."
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-attachment "scroll | fixed | local"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[11]: /samples/cssref/background-attachment.html