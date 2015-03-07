## outline

### Summary

The [CSS][0] `outline` property is a shorthand property for setting one or more of the individual outline properties [`outline-style`][1], [`outline-width`][2] and [`outline-color`][3] in a single declaration. In most cases the use of this shortcut is preferable and more convenient.

Outlines differ from borders in the following ways:

* Outlines do not take up space, they are drawn above the content.
* Outlines may be non-rectangular. They are rectangular in Gecko/Firefox. But e.g. Opera draws a non-rectangular shape around a construct like this:  
**TEXTTEXTTEXT**

* _[Initial value][4]_ the concatenation of the initial values of its longhand properties:
  * `outline-color`: `invert`, for browsers supporting it, `currentColor` for the other
  * `outline-style`: `none`
  * `outline-width`: `medium` 
* _Applies to_ all elements 
* _[Inherited][5]_ no 
* _Media_ [`visual, interactive`][6] 
* _[Computed value][7]_ as each of the properties of the shorthand:
  * `outline-color`: For the keyword `invert`, the computed value is `invert`. For the color value, if the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The transparent keyword maps to `rgb(0,0,0)`.
  * `outline-width`: an absolute length; if the keyword `none` is specified, the computed value is `0`
  * `outline-style`: as specified 
* _Animatable_ as each of the properties of the shorthand:
  * `outline-color`: yes, as a [color][8]
  * `outline-width`: yes, as a [length][9]
  * `outline-style`: no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][10]: [<'outline-color'>][11] [||][12] [<'outline-style'>][13] [||][12] [<'outline-width'>][14]

### Values

One, two or three values, given in arbitrary order:

**`<'outline-width'>`**

> See [`outline-width`][2].

**`<'outline-style'>`**

> See [`outline-style`][1].

**`<'outline-color'>`**

> Since Gecko 1.9 (Firefox 3), the value of the element's [`color`][15] property (foreground color) is used. See [`outline-color`][3].

### Examples

    outline: solid; | outline: dashed red; | outline: dotted 1px; | outline: ridge thick violet; | outline: custom 5px;

    /* two identical declarations */
    
    :link:hover { outline: 1px solid #000; }
    :link:hover { outline: solid black 1px; }



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/outline-style "The outline-style CSS property is used to set the style of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/outline-width "The outline-width CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/outline-color "The outline-color CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out."
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[9]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/outline-color "<color> | invert"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[13]: https://developer.mozilla.org/en/docs/CSS/outline-style "auto | <br-style>"
[14]: https://developer.mozilla.org/en/docs/CSS/outline-width "<br-width>"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."