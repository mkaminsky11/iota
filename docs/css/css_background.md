## background

### Summary

The `background` CSS property is a shorthand for setting the individual background values in a single place in the style sheet.` background `can be used to set the values for one or more of: [`background-clip`][0], [`background-color`][1], [`background-image`][2], [`background-origin`][3], [`background-position`][4], [`background-repeat`][5], [`background-size`][6], and [`background-attachment`][7].

The `background` CSS shorthand property assigns explicit given values and sets missing properties to their initial values.

* _[Initial value][8]_ the concatenation of the initial values of its longhand properties:
  * `background-image`: `none`
  * `background-position`: `0% 0%`
  * `background-size`: `auto auto`
  * `background-repeat`: `repeat`
  * `background-origin`: `padding-box`
  * `background-style`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `background-clip`: `border-box`
  * `background-color`: `transparent` 
* _Applies to_ all elements. It also applies to [`::first-letter`][9] and [`::first-line`][10]. 
* _[Inherited][11]_ no 
* _Percentages_ The values of its longhand properties the percentage value belongs to:
  * `background-position`: refer to the size of the background positioning area minus size of background image; size refers to the width for horizontal offsets and to the height for vertical offsets
  * `background-size`: relative to the background positioning area 
* _Media_ [`visual`][12] 
* _[Computed value][13]_ as each of the properties of the shorthand:
  * `background-image`: as specified, but with URIs made absolute
  * `background-position`: a list, each item consisting of two keywords representing the origin and two offsets from that origin, each given as an absolute length (if given a [`<length>`][14]), otherwise as a percentage
  * `background-size`: as specified, with lengths made absolute
  * `background-repeat`: a list, each item consisting of two keywords, one per dimension
  * `background-origin`: as specified
  * `background-style`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `background-clip`: as specified
  * `background-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ as each of the properties of the shorthand:
  * `background-color`: yes, as a [color][15]
  * `background-image`: no
  * `background-clip`: no
  * `background-position`: yes, as a repeatable list of a simple list of a [length][16], [percentage][17] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
  * `background-size`: yes, as a repeatable list of a simple list of a [length][16], [percentage][17] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. . This means keyword values are not animatable.
  * `background-repeat`: no
  * `background-attachment`: no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][18]: [ [<bg-layer>][19] , ][*][20] [<final-bg-layer>][21]
                   where <bg-layer> = <bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>
                   and <final-bg-layer> = <bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box> || <background-color>

**Note:** The [`background-color`][1] can only be defined on the last background, as there is only one background color for the whole element.

### Values

One or more of the following, in any order:

**`<attachment>`**

> See [`background-attachment`][7]

**`<box>`**

> See [`background-clip`][0]

**`<background-color>`**

> See [`background-color`][1]

**`<bg-image>`**

> See [`background-image`][2]

**<position\>**

> See [`background-position`][4]

**`<repeat-style>`**

> See [`background-repeat`][5]

**`<bg-size>`**

> See [`background-size`][6]. This property must be specified after **<position\>**, separated with the '/' character.

### Examples

[View the live example][22]

    body { 
      background: red; 
    }
    
    .topbanner { 
      background: url("topbanner.png") #00D repeat-y fixed; 
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/background-clip "Technical review completed. Editorial review completed."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/background-origin "The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/background-position "The background-position CSS property sets the initial position, relative to the background position layer defined by background-origin for each defined background image."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/background-repeat "The background-repeat CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/background-size "The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/background-attachment "If a background-image is specified, the background-attachment CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block."
[8]: https://developer.mozilla.org/en/docs/CSS/initial_value
[9]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[11]: https://developer.mozilla.org/en/docs/CSS/inheritance
[12]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[13]: https://developer.mozilla.org/en/docs/CSS/computed_value
[14]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[15]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[16]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[17]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[18]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[19]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-bg-layer "<bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box>{1,2}"
[20]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Asterisk_(*) "Asterisk multiplier: The previous entity may appear 0, 1 or several times."
[21]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-final-bg-layer "<bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box>{1,2} || <'background-color'>"
[22]: /samples/cssref/background.html