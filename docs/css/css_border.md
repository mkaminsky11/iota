## border

### Summary

The `border` [CSS][0] property is a [shorthand property][1] for setting the individual border property values in a single place in the style sheet. `border` can be used to set the values for one or more of: [`border-width`][2], [`border-style`][3], [`border-color`][4].

Like all shorthand properties, a missing value for one of the longhand properties is set to the corresponding initial value. Also note that [`border-image`][5], though not settable using this shorthand, is reset to its initial value, that is, `none`. This allows to use `border` to reset any border settings set earlier in the cascade. As the W3C intends to preserve this property in future level of the spec, it is recommended to use this method to reset border settings.

**Note:** While the [`border-width`][2], [`border-style`][3], and [`border-color`][4] shorthand properties accept up to four values, allowing one to set different width, style or color values for the different border edges, this property only accepts a single value for each property, leading to the same border for all four edges.

* _[Initial value][6]_ the concatenation of the initial values of its longhand properties:
  * `border-width`: the concatenation of the initial values of its longhand properties:
    * `border-top-width`: `medium`
    * `border-right-width`: `medium`
    * `border-bottom-width`: `medium`
    * `border-left-width`: `medium`
  * `border-style`: the concatenation of the initial values of its longhand properties:
    * `border-top-style`: `none`
    * `border-right-style`: `none`
    * `border-bottom-style`: `none`
    * `border-left-style`: `none`
  * `border-color`: the concatenation of the initial values of its longhand properties:
    * `border-top-color`: `currentColor`
    * `border-right-color`: `currentColor`
    * `border-bottom-color`: `currentColor`
    * `border-left-color`: `currentColor` 
* _Applies to_ all elements 
* _[Inherited][7]_ no 
* _Media_ [`visual`][8] 
* _[Computed value][9]_ as each of the properties of the shorthand:
  * `border-width`: as each of the properties of the shorthand:
    * `border-bottom-width`: the absolute length or `0` if [`border-bottom-style`][10] is `none` or `hidden`
    * `border-left-width`: the absolute length or `0` if [`border-left-style`][11] is `none` or `hidden`
    * `border-right-width`: the absolute length or `0` if [`border-right-style`][12] is `none` or `hidden`
    * `border-top-width`: the absolute length or `0` if [`border-top-style`][13] is `none` or `hidden`
  * `border-style`: as each of the properties of the shorthand:
    * `border-bottom-style`: as specified
    * `border-left-style`: as specified
    * `border-right-style`: as specified
    * `border-top-style`: as specified
  * `border-color`: as each of the properties of the shorthand:
    * `border-bottom-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`.
    * `border-left-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`.
    * `border-right-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`.
    * `border-top-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ as each of the properties of the shorthand:
  * `border-color`: as each of the properties of the shorthand:
    * `border-bottom-color`: yes, as a [color][14]
    * `border-left-color`: yes, as a [color][14]
    * `border-right-color`: yes, as a [color][14]
    * `border-top-color`: yes, as a [color][14]
  * `border-style`: no
  * `border-width`: as each of the properties of the shorthand:
    * `border-bottom-width`: yes, as a [length][15]
    * `border-left-width`: yes, as a [length][15]
    * `border-right-width`: yes, as a [length][15]
    * `border-top-width`: yes, as a [length][15] 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][16]:  [<br-width>][17] [||][18] [<br-style>][19] [||][18] [<color>][20]

### Values

**`<br-width>`**

> Default value `medium` is used if absent. See [`border-width`][2].

**`<br-style>`**

> Default value `none` is used if absent. See [`border-style`][3].

**`<color>`**

> A [`<color>`][21] denoting the color of the border. If not set, its default value is the value of the element's [`color`][22] property (the text color, not the background color). See [`border-color`][4].

### Examples

### border

### HTML Content

    <div > look at my borders </div>
    <p>you can play with the css bellow to test properties changes</p>
    <style contenteditable>
      .brd { border: 1px solid black }
    </style>
    
    

### CSS Content

    .brd { border: 1px solid black}
    
    style { 
      border: 1px dashed black;
      display:block;
    } 

### Border demo


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/CSS/Shorthand_properties
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-width
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-style
[4]: https://developer.mozilla.org/en/docs/Web/CSS/border-color
[5]: https://developer.mozilla.org/en/docs/Web/CSS/border-image
[6]: https://developer.mozilla.org/en/docs/CSS/initial_value
[7]: https://developer.mozilla.org/en/docs/CSS/inheritance
[8]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[9]: https://developer.mozilla.org/en/docs/CSS/computed_value
[10]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style
[11]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-style
[12]: https://developer.mozilla.org/en/docs/Web/CSS/border-right-style
[13]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-style
[14]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[15]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[16]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[17]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[18]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[19]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[20]: https://developer.mozilla.org/en/docs/CSS/color
[21]: https://developer.mozilla.org/en/docs/Web/CSS/color_value
[22]: https://developer.mozilla.org/en/docs/Web/CSS/color