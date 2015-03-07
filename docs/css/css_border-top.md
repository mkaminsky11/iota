## border-top

### Summary

The `border-top` [CSS][0] property is a shorthand that sets the values of [`border-top-color`][1], [`border-top-style`][2], and [`border-top-width`][3]. These properties describe the top border of elements.

The three values of the shorthand property can be specified in any order, and one or two of them may be omitted.

As with all shorthand properties, `border-top` always sets the values of all of the properties that it can set, even if they are not specified. It sets those that are not specified to their default values. This means that:

      border-top-style: dotted;
      border-top: thick green;
    

is actually the same as

      border-top-style: dotted;
      border-top: none thick green;
    

and the value of [`border-top-style`][2] given before `border-top` is ignored.

Since the default value of [`border-top-style`][2] is `none`, not specifying the border-style part of the value means that the property specifies its default value which is `none` and means no border.

* _[Initial value][4]_ the concatenation of the initial values of its longhand properties:
  * `border-top-width`: `medium`
  * `border-top-style`: `none`
  * `border-top-color`: `currentColor` 
* _Applies to_ all elements 
* _[Inherited][5]_ no 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as each of the properties of the shorthand:
  * `border-top-width`: the absolute length or `0` if [`border-top-style`][2] is `none` or `hidden`
  * `border-top-style`: as specified
  * `border-top-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ as each of the properties of the shorthand:
  * `border-top-color`: yes, as a [color][8]
  * `border-top-style`: no
  * `border-top-width`: yes, as a [length][9] 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][10]: [<br-width>][11] [||][12] [<br-style>][13] [||][12] [<color>][14]
    

### Values

**`<br-width> `**

> See [`border-top-width`][3].

**`<br-style> `**

> See [`border-top-style`][2].

**`<color> `**

> See [`border-top-color`][1].

### Examples

    element { 
        border-top: 1px solid #000;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-color
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-style
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-width
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[9]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[13]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[14]: https://developer.mozilla.org/en/docs/CSS/color