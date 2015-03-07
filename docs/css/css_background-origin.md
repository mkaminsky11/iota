## background-origin

### Summary

The `background-origin` CSS property determines the background positioning area, that is the position of the origin of an image specified using the [`background-image`][0] CSS property.

Note that `background-origin` is ignored when [`background-attachment`][1] is ``fixed``.

If the value of this property is not set in a [`background`][2] shorthand property that is applied to the element after the `background-origin` CSS property, the value of this property is then reset to its initial value by the shorthand property.

* _[Initial value][3]_ `padding-box` 
* _Applies to_ all elements. It also applies to [`::first-letter`][4] and [`::first-line`][5]. 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<box>][10][#][11]

    background-origin: border-box
    background-origin: padding-box
    background-origin: content-box
    
    background-origin: inherit
    

### Values

**`border-box`**

> The background extends to the outside edge of the border (but underneath the border in z-ordering).

**`padding-box`**

> No background is drawn below the border (background extends to the outside edge of the padding).

**`content-box`**

> The background is painted within (clipped to) the content box.

### Examples

     .example {
       border: 10px double;
       padding: 10px;
       background: url('image.jpg');
       background-position: center left;
       /* The background will be inside the padding */ 
       background-origin: content-box;
    }
    

    div {
      background-image: url('logo.jpg'), url('mainback.png');
      background-position: top right, 0px 0px;
      background-origin: content-box, padding-box;
    }



[0]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/background-attachment "If a background-image is specified, the background-attachment CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/background "The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-box "border-box | padding-box | content-box"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"