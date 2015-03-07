## text-decoration-color

### Summary

The `text-decoration-color` CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by [`text-decoration-line`][0]. This is the preferred way to color these text decorations, rather than using combinations of other HTML elements.

* _[Initial value][1]_ `currentColor` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2] and [`::first-line`][3]. 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ \*Not in database (color)\* 
* _Animatable_ yes, as a [color][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<color>][9]
    

    text-decoration-color: currentColor
    text-decoration-color: red
    text-decoration-color: #00ff00
    text-decoration-color: rgba(255, 128, 128, 0.5)
    text-decoration-color: transparent
    
    text-decoration-color: inherit
    

### Values

**`<color>`**

> The `color` property accepts various keywords and numeric notations. See [`<color>`][10] values for more details.

### Examples

    .example { 
        text-decoration: underline;
        text-decoration-color: red;
    }
    

The example above has the same effect as the following code, which also adds a hover style.

    <!DOCTYPE html>
    <html>
    <head>
    <style>
    .example {
      font-size: 24px;
      text-decoration: underline;
      color: red;
    }
    .example:hover {
      color: blue;
      text-decoration: line-through;
    }
    </style>
    </head>
    <body>
    <span >
      <span style="color:black">black text with red underline and blue hover</span>
    </span>
    </body>
    </html>
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-line "The text-decoration-line CSS property sets what kind of line decorations are added to an element."
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/color_value
[10]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"