## font

### Summary

The `font` CSS property is either a shorthand property for setting [`font-style`][0], [`font-variant`][1], [`font-weight`][2], [`font-size`][3], [`line-height`][4] and [`font-family`][5], or a way to set the element's font to a system font, using specific keywords.

As with any shorthand CSS properties, the values which are not set in it are set to their individual initial values, eventually overriding values previously set using non-shorthand properties.

**Note**: There are a few caveats when using the CSS `font` shorthand. If these conditions are not met, the property is invalid and is entirely ignored.

* Except when using a keyword, it is mandatory to define the value of both the [`font-size`][3] and the [`font-family`][5] properties.
* Not all values of [`font-variant`][1] are allowed. Only the values defined in CSS 2.1 are allowed, that is `normal` and `small-caps`.
* Though not directly settable by `font`, the values of [`font-stretch`][6], [`font-size-adjust`][7] and [`font-kerning`][8] are also reset to their initial values.
* The order of the values is not completely free: [`font-style`][0], [`font-variant`][1] and [`font-weight`][2] must be defined, if any, before the [`font-size`][3] value. The [`line-height`][4] value must be defined immediately after the [`font-size`][3], preceded by a mandatory `/`. Finally the [`font-family`][5] is mandatory and must be the last value defined ([`inherit`][9] value does not work).

* _[Initial value][10]_ the concatenation of the initial values of its longhand properties:
  * `font-style`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `font-variant`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `font-weight`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `font-stretch`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `font-size`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `line-height`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `font-family`: is itself a shorthand, its initial value is the concatenation of its own longhand properties 
* _Applies to_ all elements. It also applies to [`::first-letter`][11] and [`::first-line`][12]. 
* _[Inherited][13]_ yes 
* _Percentages_ The values of its longhand properties the percentage value belongs to:
  * `font-size`: refer to the parent element's font size
  * `line-height`: refer to the font size of the element itself 
* _Media_ [`visual`][14] 
* _[Computed value][15]_ as each of the properties of the shorthand:
  * `font-style`: as specified
  * `font-variant`: as specified
  * `font-weight`: the keyword or the numerical value as specified, with `bolder` and `lighter` transformed to the real value
  * `font-stretch`: as specified
  * `font-size`: as specified, but with relative lengths converted into absolute lengths
  * `line-height`: for percentage and length values, the absolute length, otherwise as specified
  * `font-family`: as specified 
* _Animatable_ as each of the properties of the shorthand:
  * `font-style`: no
  * `font-variant`: no
  * `font-weight`: yes, as a [font weight][16]
  * `font-stretch`: yes, as a [font stretch][17]
  * `font-size`: yes, as a [length][18]
  * `line-height`: yes, as a [number][19], a [length][18]
  * `font-family`: no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][20]: [ [ [<‘font-style’>][21] [||][22] [<font-variant-css21>][23] [||][22] [<‘font-weight’>][24] [||][22] [<‘font-stretch’>][25] ][?][26] [<‘font-size’>][27] [ / [<‘line-height’>][28] ][?][26] [<‘font-family’>][29] ] [|][30] caption [|][30] icon [|][30] menu [|][30] message-box [|][30] small-caption [|][30] status-bar

### Values

**`<'font-style'>`**

> See the [`font-style`][0] CSS property.

**`<'font-variant'>`**

> See the [`font-variant`][1] CSS property.

**`<'font-weight'>`**

> See the [`font-weight`][2] CSS property.

**`<'font-size'>`**

> See the [`font-size`][3] CSS property.

**`<'line-height'>`**

> See the [`line-height`][4] CSS property.

**`<'font-family'>`**

> See the [`font-family`][5] CSS property.

**`caption` `icon` `menu` `message-box` `small-caption` `status-bar`**

> Instead of specifying individual longhand properties, a keyword can be used to represent a specific system font:
> `caption`
> The font used for captioned controls (e.g., buttons, drop-downs, etc.).
> 
> `icon`
> The font used to label icons.
> 
> `menu`
> The font used in menus (e.g., dropdown menus and menu lists).
> 
> `message-box`
> The font used in dialog boxes.
> 
> `small-caption`
> The font used for labeling small controls.
> 
> `status-bar`
> The font used in window status bars.
> 
> Browsers implementing these often implement several more, prefixed, values; Gecko implements `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` and `-moz-field`.

### Examples

    /* Set the font size to 12px and the line height to 14px. Set the font family to sans-serif */
    p { font: 12px/14px sans-serif }
    

    /* Set the font size to 80% of the parent element or default value (if no parent element present) 
    and set the font family to sans-serif */ 
    p { font: 80% sans-serif }
    

    /* Set the font weight to bold, the font-style to italic, the font size to large, 
    and the font family to serif. */
    p { font: bold italic large serif }
    

    /* Use the same font as the status bar of the window */
    p { font: status-bar }
    

### Live Sample



[0]: https://developer.mozilla.org/en/docs/Web/CSS/font-style "The font-style CSS property allows italic or oblique faces to be selected within a font-family."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant "The font-variant CSS property selects a normal, or small-caps face from a font family. Setting the CSS Level 2 (Revision 1) values of the  font-variant property, that is normal or small-caps, is also possible by using the font shorthand."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/font-weight "The font-weight CSS property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on normal and bold."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/font-size "The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/line-height "On block level elements, the line-height CSS property specifies the minimal height of line boxes within the element."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/font-family "The font-family CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a @font-face at-rule."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/font-stretch "The font-stretch CSS property selects a normal, condensed, or expanded face from a font."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/font-size-adjust "The font-size-adjust CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/font-kerning "The font-kerning CSS property controls the usage of the kerning information; that is, it controls how letters are spaced. The kerning information is stored in the font, and if the font is well-kerned, this feature allows spacing between characters to be very similar, whatever the characters are."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/inherit "The inherit CSS-value causes the element for which it is specified to take the computed value of the property from its parent element. It is allowed on every CSS property."
[10]: https://developer.mozilla.org/en/docs/CSS/initial_value
[11]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[13]: https://developer.mozilla.org/en/docs/CSS/inheritance
[14]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[15]: https://developer.mozilla.org/en/docs/CSS/computed_value
[16]: https://developer.mozilla.org/en/docs/CSS/font-weight#Interpolation "Font weight values are interpolated via discrete steps (multiples of 100). The interpolation happens in real number space and is converted to an integer by rounding to the nearest multiple of 100, with values halfway between multiples of 100 rounded towards positive infinity."
[17]: https://developer.mozilla.org/en/docs/CSS/font-stretch#Interpolation "Font stretch values are interpolated in discrete steps. The interpolation happens as though the ordered values are equally spaced real numbers; the result is rounded to the nearest value, with values exactly halfway between two values rounded towards the later value, that is the most expanded one."
[18]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[19]: https://developer.mozilla.org/en/docs/CSS/number#Interpolation "Values of the <number> CSS data type are interpolated as real, floating-point, numbers."
[20]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[21]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-‘font-style’ "Tooltip not found in DB."
[22]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[23]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-font-variant-css21 "Tooltip not found in DB."
[24]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-‘font-weight’ "Tooltip not found in DB."
[25]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-‘font-stretch’ "Tooltip not found in DB."
[26]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[27]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-‘font-size’ "Tooltip not found in DB."
[28]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-‘line-height’ "Tooltip not found in DB."
[29]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-‘font-family’ "Tooltip not found in DB."
[30]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."