## text-decoration

### Summary

The `text-decoration` CSS property is used to set the text formatting to `underline`, `overline`, `line-through` or `blink`. Underline and overline decorations are positioned under the text, line-through over it.

Text decorations draw across descendant elements. This means that it is not possible to disable on a descendant a text decoration that is specified on one of its ancestors. For example, in the markup:` <p>This text has <em>some emphasized words</em> in it.</p>`, the style rule:`` `p { text-decoration: underline }` would cause the entire paragraph to be underlined. The style rule:` em { text-decoration: none }` would not cause any change; the entire paragraph would still be underlined. However, the rule `em { text-decoration: overline }` would cause a second decoration to appear on "some emphasized words".

**Note: **CSS Text Decoration Level 3 transformed this property as a shorthand for the three new [`text-decoration-color`][0], [`text-decoration-line`][1], and [`text-decoration-style`][2] CSS properties. Like for any other shorthand property, it means that it resets their value to their default if not explicitly set in the shorthand.

* _[Initial value][3]_ the concatenation of the initial values of its longhand properties:
  * `text-decoration-color`: `currentColor`
  * `text-decoration-style`: `solid`
  * `text-decoration-line`: `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][4] and [`::first-line`][5]. 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as each of the properties of the shorthand:
  * `text-decoration-line`: as specified
  * `text-decoration-style`: as specified
  * `text-decoration-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ as each of the properties of the shorthand:
  * `text-decoration-color`: yes, as a [color][9]
  * `text-decoration-style`: no
  * `text-decoration-line`: no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][10]: [<'text-decoration-line'>][11] [||][12] [<'text-decoration-style'>][13] [||][12] [<'text-decoration-color'>][14]  

    text-decoration: none
    text-decoration: underline red
    text-decoration: underline wavy red
    
    text-decoration: inherit
    text-decoration: initial
    text-decoration: unset
    

### Values

The `text-decoration` property is a shorthand and can use the values of each of the three longhand properties: [`text-decoration-line`][1], [`text-decoration-color`][0], and [`text-decoration-style`][2]

### Examples

    h1.under {
        text-decoration: underline;
    }
    h1.over {
        text-decoration: overline;
    }
    p.line {
        text-decoration: line-through;
    }
    p.blink {
        text-decoration: blink;
    }
    a.none {
        text-decoration: none;
    }
    p.underover {
        text-decoration: underline overline;
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-color "The text-decoration-color CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line. This is the preferred way to color these text decorations, rather than using combinations of other HTML elements."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-line "The text-decoration-line CSS property sets what kind of line decorations are added to an element."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-style "The text-decoration-style CSS property defines the style of the lines specified by text-decoration-line. The style applies to all lines, there is no way to define different style for each of the line defined by text-decoration-line."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/text-decoration-line "none | [ underline || overline || line-through || blink ]"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[13]: https://developer.mozilla.org/en/docs/CSS/text-decoration-style "solid | double | dotted | dashed | wavy"
[14]: https://developer.mozilla.org/en/docs/CSS/text-decoration-color "<color>"