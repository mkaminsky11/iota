## length

### Summary

The `<length>` [CSS][0] data type denotes distance measurements. It is a [`<number>`][1] immediately followed by a length unit (`px`, `em`, `pc`, `in`, `mm`, ...). Like for any CSS dimension, there is no space between the unit literal and the number. The length unit is optional after the [`<number>`][1] `0`.

Many CSS properties take` <length> `values, such as [`width`][2], [`margin`][3],  [`padding`][4], [`font-size`][5], [`border-width`][6], [`text-shadow`][7], ...

For some properties, using negative lengths is a syntax error, but for some properties, negative lengths are allowed. Please note that although [`<percentage>`][8] values are also CSS dimensions and are accepted by some CSS properties that accept` <length>` values, they are not themselves, `<length>` values.

### Interpolation

Values of the `<length>` CSS data type can be interpolated in order to allow animations. In that case they are interpolated as real, floating-point, numbers. The interpolation happens on the calculated value. The speed of the interpolation is determined by the [timing function][9] associated with the animation.

### Units

### Relative length units

#### Font-relative lengths

**`em`**

> This unit represents the calculated [`font-size`][5] of the element. If used on the [`font-size`][5] property itself, it represents the _inherited_ font-size of the element.
> 
> This unit is often used to create scalable layouts, which keep the [vertical rhythm of the page][10], even when the user changes the size of the fonts. The CSS properties [`line-height`][11], [`font-size`][5], [`margin-bottom`][12] and [`margin-top`][13] often has a value expressed in **em**.
> 

**`ex`**

> This unit represents the [x-height][14] of the element's [`font`][15]. On fonts with the 'x' letter, this is generally the height of lowercase letters in the font;` 1ex ≈ 0.5em `in many fonts.

**`ch`**

> This unit represents the width, or more precisely the advance measure, of the glyph '0' (zero, the Unicode character U+0030) in the element's [`font`][15].

**`rem`**

> This unit represents the [`font-size`][5] of the root element (e.g. the font-size of the [`<html>`][16] element). When used on the [`font-size`][5] on this root element, it represents its initial value.
> 
> This unit is practical in creating perfectly scalable layout. If not supported by the targeted browsers, such layout can be achieved using the **em** unit, though this is slightly more complex.
> 

#### Viewport-percentage lengths

Viewport-percentage lengths defined a length relatively to the size of viewport, that is the visible portion of the document. Only Gecko-based browsers are updating the viewport values dynamically, when the size of the viewport is modified (by modifying the size of the window on a desktop computer or by turning the device on a phone or a tablet).

In conjunction with `overflow:auto`, space taken by eventual scrollbars is not substracted from the viewport, whereas in the case of `overflow:scroll`, it is.

In a [`@page`][17] at-rule declaration block, the use of the viewport lengths are invalid and the declaration will be dropped.

**`vh`**

> 1/100th of the height of the viewport.

**`vw`**

> 1/100th of the width of the viewport.

**`vmin`**

> 1/100th of the minimum value between the height and the width of the viewport.

**`vmax`**

> 1/100th of the maximum value between the height and the width of the viewport.

### Absolute length units

Absolute length units represents a physical measurement and when the physical properties of the output medium are known, such as for print layout. This is done by anchored one of the unit to a physical unit and to defined the other relatively to it. The anchor is done differently for low-resolution devices, like screens, and high-resolution devices, like printers.

For low-dpi devices, the unit **px** represents the physical _reference pixel_ and the others are defined relative to it. Thus, `1in` is defined as `96px` which equals `72pt`. The consequence of this definition is that on such devices, length described in inches (`in`), centimeters (`cm`), millimeters (`mm`) doesn't necessary match the length of the physical unit with the same name.

For high-dpi devices, inches (`in`), centimeters (`cm`), millimeters (`mm`) are defined as their physical counterparts. Therefore the **px** unit is defined relative to them (1/96 of 1 inch).

Users may increase font size for accessibility purpose. To allow for usable layouts whatever is the used font size, use only absolute length units when the physical characteristics of the output medium are known, such as bitmap images. When setting length related to font-size, prefer relative units like `em` or `rem`.

**`px`**

> Relative to the viewing device.  
> For screen display, typically one device pixel (dot) of the display.  
> For _printers_ and very _high resolution screens_ one CSS pixel implies multiple device pixels, so that the number of pixel per inch stays around 96\.

**`mm`**

> One millimeter.

**`cm`**

> One centimeter (10 millimeters).

**`in`**

> One inch (2.54 centimeters).

**`pt`**

> One point (which is 1/72 of an inch).

**`pc`**

> One pica (which is 12 points).

**`mozmm` __**

> An experimental unit which attempts to render at exactly one millimeter regardless of the size or resolution of the display. This is rarely actually what you want, but may be useful in particular for mobile devices.

### CSS units and dots-per-inch

The unit `in` doesn't represent a physical inch on screen, but represents `96px`. That means that whatever is the real screen pixel density, it is assumed to be `96dpi`. On devices with a greater pixel density, `1in` will be smaller than 1 physical inch. Similarly `mm`, `cm`, and `pt` are not absolute length.

Some specific examples:

* `1in` is always `96px,`
* `3pt` is always `4px`,
* `25.4mm` is always `96px.`


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/width "The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/margin "The margin CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: margin-top, margin-right, margin-bottom and margin-left.
 Negative values are also allowed."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/padding "The padding CSS property sets the required padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/font-size "The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/border-width "Technical review completed."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/text-shadow "The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decorations of the element."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[9]: https://developer.mozilla.org/en/CSS/timing-function "timing-function"
[10]: http://24ways.org/2006/compose-to-a-vertical-rhythm "http://24ways.org/2006/compose-to-a-vertical-rhythm"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/line-height "On block level elements, the line-height CSS property specifies the minimal height of line boxes within the element."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom "The margin-bottom CSS property of an element sets the margin space required on the bottom of an element. A negative value is also allowed."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/margin-top "The margin-top CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed."
[14]: http://en.wikipedia.org/wiki/X-height "http://en.wikipedia.org/wiki/X-height"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/font "The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords."
[16]: https://developer.mozilla.org/en/docs/Web/HTML/Element/html "The HTML root element (<html>) represents the root of an HTML document. All other elements must be descendants of this element."
[17]: https://developer.mozilla.org/en/docs/Web/CSS/@page "The @page CSS at-rule is used to modify some CSS properties when printing a document. You can't change all CSS properties with @page. You can only change the margins, orphans, widows, and page breaks of the document. Attempts to change any other CSS properties will be ignored."