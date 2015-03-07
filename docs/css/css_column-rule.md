## column-rule

### Summary

In multi-column layouts, the `column-rule` CSS property specifies a straight line, or "rule", to be drawn between each column. It is a convenient shorthand to avoid setting each of the individual `column-rule-*` properties separately : [`column-rule-width`][0], [`column-rule-style`][1] and [`column-rule-color`][2].

* _[Initial value][3]_ the concatenation of the initial values of its longhand properties:
  * `column-rule-width`: `medium`
  * `column-rule-style`: `none`
  * `column-rule-color`: `currentColor` 
* _Applies to_ multicol elements 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ as each of the properties of the shorthand:
  * `column-rule-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`.
  * `column-rule-style`: as specified
  * `column-rule-width`: an absolute length; `0` if the column rule style is `none` or `hidden` 
* _Animatable_ as each of the properties of the shorthand:
  * `column-rule-color`: yes, as a [color][7]
  * `column-rule-style`: no
  * `column-rule-width`: yes, as a [length][8] 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][9]: [<'column-rule-width'>][10] [||][11] [<'column-rule-style'>][12] [||][11] [<'column-rule-color'>][13]
    

### Values

Accepts one, two or three values in any order:

**`<'column-rule-width'>`**

> Is a [`<length>`][14] or one of the three keywords, `thin`, `medium` or `thick`. See [`border-width`][15] for details.

**`<'column-rule-style'>`**

> See [`border-style`][16] for possible values and details.

**`<'column-rule-color'>`**

> Is a [`<color>`][17] value.

### Examples

    p.foo { column-rule: dotted; }          /* same as "medium dotted currentColor" */
    p.bar { column-rule: solid blue; }      /* same as "medium solid blue" */
    p.baz { column-rule: solid 8px; }       /* same as "8px solid currentColor" */
    p.abc { column-rule: thick inset blue; }
    

### Live Example

padding:0.3em; background:gold; border:groove 2px gold; **column-rule: inset 2px gold;** **column-width:17em;**


[0]: https://developer.mozilla.org/en/docs/Web/CSS/column-rule-width
[1]: https://developer.mozilla.org/en/docs/Web/CSS/column-rule-style
[2]: https://developer.mozilla.org/en/docs/Web/CSS/column-rule-color
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/column-rule-width "<br-width>"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[12]: https://developer.mozilla.org/en/docs/CSS/column-rule-style "<br-style>"
[13]: https://developer.mozilla.org/en/docs/CSS/column-rule-color "<color>"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/length
[15]: https://developer.mozilla.org/en/docs/Web/CSS/border-width
[16]: https://developer.mozilla.org/en/docs/Web/CSS/border-style
[17]: https://developer.mozilla.org/en/docs/Web/CSS/color_value