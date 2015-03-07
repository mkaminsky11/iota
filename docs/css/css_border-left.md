## border-left

### Summary

The `border-left` [CSS][0] property is a shorthand that sets the values of [`border-left-color`][1], [`border-left-style`][2], and [`border-left-width`][3]. These properties describe the left border of elements.

The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.

As with all shorthand properties, `border-left` always sets the values of all of the properties that it can set, even if they are not specified. It sets those that are not specified to their default values. This means that:

      border-left-style: dotted;
      border-left: thick green;
    

is actually the same as

      border-left-style: dotted;
      border-left: none thick green;
    

and the value of [`border-left-style`][2] given before `border-left` is ignored.

Since the default value of [`border-left-style`][2] is `none`, not specifying the border-style part of the value means that the property specifies its default value which is `none` and means no border.

* _[Initial value][4]_ the concatenation of the initial values of its longhand properties:
  * `border-left-width`: `medium`
  * `border-left-style`: `none`
  * `border-left-color`: `currentColor` 
* _Applies to_ all elements 
* _[Inherited][5]_ no 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as each of the properties of the shorthand:
  * `border-left-width`: the absolute length or `0` if [`border-left-style`][2] is `none` or `hidden`
  * `border-left-style`: as specified
  * `border-left-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ as each of the properties of the shorthand:
  * `border-left-color`: yes, as a [color][8]
  * `border-left-style`: no
  * `border-left-width`: yes, as a [length][9] 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][10]: [<br-width>][11] [||][12] [<br-style>][13] [||][12] [<color>][14]

### Values

**`<br-width> `**

> See [`border-left-width`][3].

**`<br-style> `**

> See [`border-left-style`][2].

**`<color> `**

> See [`border-left-color`][1].

### Examples

    element { 
        border-left: 1px solid #000;
    }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-color
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-style
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-width
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[9]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[13]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[14]: https://developer.mozilla.org/en/docs/CSS/color