## border-bottom

### Summary

The `border-bottom` [CSS][0] property is a shorthand that sets the values of [`border-bottom-color`][1], [`border-bottom-style`][2], and [`border-bottom-width`][3]. These properties describe the bottom border of elements.

The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.

As with all shorthand properties, `border-bottom` always sets the values of all of the properties that it can set, even if they are not specified. It sets those that are not specified to their default values. This means that:

    border-bottom-style: dotted;
    border-bottom: thick green;

is actually the same as

    border-bottom-style: dotted;
    border-bottom: none thick green;

and the value of [`border-bottom-style`][2] given before `border-bottom` is ignored.

Since the default value of [`border-bottom-style`][2] is `none`, not specifying the border-style part of the value means that the property specifies its default value which is `none` and means no border.

* _[Initial value][4]_ the concatenation of the initial values of its longhand properties:
  * `border-bottom-width`: `medium`
  * `border-bottom-style`: `none`
  * `border-bottom-color`: `currentColor` 
* _Applies to_ all elements. It also applies to [`::first-letter`][5]. 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as each of the properties of the shorthand:
  * `border-bottom-width`: the absolute length or `0` if [`border-bottom-style`][2] is `none` or `hidden`
  * `border-bottom-style`: as specified
  * `border-bottom-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ as each of the properties of the shorthand:
  * `border-bottom-color`: yes, as a [color][9]
  * `border-bottom-style`: no
  * `border-bottom-width`: yes, as a [length][10] 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][11]: [<br-width>][12] [||][13] [<br-style>][14] [||][13] [<color>][15]
    

### Values

**`<br-width> `**

> See [`border-bottom-width`][3].

**`<br-style> `**

> See [`border-bottom-style`][2].

**`<color> `**

> See [`border-bottom-color`][1].

### Examples

[View Live Examples][16]

    element { 
      border-bottom: 1px solid #000;
    }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-color "The border-bottom-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-bottom are more convenient and preferable."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style "The border-bottom-style CSS property sets the line style of the bottom border of a box."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width "The border-bottom-width CSS property sets the width of the bottom border of a box."
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[10]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[14]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[15]: https://developer.mozilla.org/en/docs/CSS/color
[16]: /samples/cssref/border.html