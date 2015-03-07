## background-size

### Summary

The `background-size` [CSS][0] property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio.

**Note:** If the value of this property is not set in a [`background`][1] shorthand property that is applied to the element after the `background-size` CSS property, the value of this property is then reset to its initial value by the shorthand property.

* _[Initial value][2]_ `auto auto` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ no 
* _Percentages_ relative to the background positioning area 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as specified, with lengths made absolute 
* _Animatable_ yes, as a repeatable list of a simple list of a [length][8], [percentage][9] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. . This means keyword values are not animatable. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<bg-size>][11][#][12]
    

    **/* Keywords syntax */**
    background-size: cover
    background-size: contain
    
    **/* One-value syntax: the value defines the width of the image, the height is implicitly set to 'auto' */**
    background-size: 50%
    background-size: 3em
    background-size: 12px
    background-size: auto
    
    **/* Two-value syntax: the first value defines the width of the image, the second its height */**
    background-size: 50% auto
    background-size: 3em 25%
    background-size: auto 6px
    background-size: auto auto
    
    **/* Values for the multiple backgrounds, defined by background-image, may be listed separated by commas */**
    background-size: auto, auto     /* Do not confuse this with background-size: auto auto */
    background-size: 50%, 25%, 25%
    background-size: 6px, auto, contain
    
    background-size: inherit
    

### Values

**`<length>`**

> A `[`<length>`][13]` value that scales the background image to the specified length in the corresponding dimension. Negative lengths are not allowed.

**`<percentage>`**

> A `[`<percentage>`][14]` value that scales the background image in the corresponding dimension to the specified percentage of the background positioning area, which is determined by the value of [`background-origin`][15]. The background positioning area is, by default, the area containing the content of the box and its padding; the area may also be changed to just the content or to the area containing borders, padding, and content. If the background's [`attachment`][16] is `fixed`, the background positioning area is instead the entire area of the browser window, not including the area covered by scrollbars if they are present. Negative percentages are not allowed.

**`auto`**

> The `auto` keyword that scales the background image in the corresponding direction such that its intrinsic proportion is maintained.

**`cover`**

> This keyword specifies that the background image should be scaled to be as small as possible while ensuring both its dimensions are greater than or equal to the corresponding dimensions of the background positioning area.

**`contain`**

> This keyword specifies that the background image should be scaled to be as large as possible while ensuring both its dimensions are less than or equal to the corresponding dimensions of the background positioning area.

The interpretation of possible values depends on the image's intrinsic dimensions (width and height) and intrinsic proportion (ratio of width and height).  A bitmap image always has intrinsic dimensions and an intrinsic proportion.  A vector image may have both intrinsic dimensions (and thus must have an intrinsic proportion).  It also may have one or no intrinsic dimensions, and in either case it might or might not have an intrinsic proportion.  Gradients are treated as images with no intrinsic dimensions or intrinsic proportion.

**Note: **This behavior changed in Gecko 8.0 (Firefox 8.0 / Thunderbird 8.0 / SeaMonkey 2.5). Before this, gradients were treated as images with no intrinsic dimensions, with an intrinsic proportion identical to that of the background positioning area.

Background images generated from elements using [`-moz-element`][17] (which actually match an element) are currently treated as images with the dimensions of the element, or of the background positioning area if the element is SVG, with the corresponding intrinsic proportion.

**Note:** This is not the currently-specified behavior, which is that the intrinsic dimensions and proportion should be those of the element in all cases.

The rendered size of the background image is then computed as follows:

**If both components of `background-size` are specified and are not `auto`:**

> The background image renders at the specified size.

**If the `background-size` is `contain` or `cover`:**

> The image is rendered, preserving its intrinsic proportion, at the largest size contained within, or covering, the background positioning area.  If the image has no intrinsic proportion, then it is rendered at the size of the background positioning area.

**If the `background-size` is `auto` or `auto auto`:**

> If the image has both intrinsic dimensions, it is rendered at that size.  If it has no intrinsic dimensions and no intrinsic proportion, it is rendered at the size of the background positioning area.  If it has no dimensions but has a proportion, it's rendered as if `contain` had been specified instead.  If the image has one intrinsic dimension and a proportion, it's rendered at the size determined by that one dimension and the proportion.  If the image has one intrinsic dimension but no proportion, it's rendered using the intrinsic dimension and the corresponding dimension of the background positioning area.

**If the background-size has one `auto` component and one non-`auto` component:**

> If the image has an intrinsic proportion, then render it using the specified dimension, and compute the other dimension from the specified dimension and the intrinsic proportion.  If the image has no intrinsic proportion, use the specified dimension for that dimension.  For the other dimension, use the image's corresponding intrinsic dimension if there is one.  If there is no such intrinsic dimension, use the corresponding dimension of the background positioning area.

Note that background sizing for vector images that lack intrinsic dimensions or proportion is not yet fully implemented in all browsers.  Be careful about relying on the behavior described above, and test in multiple browsers (specifically including versions of Firefox 7 or earlier and Firefox 8 or greater) to be sure different renderings are acceptable.

### Examples

[This demonstration of `background-size: cover`][18] and [this demonstration of `background-size: contain`][19] are meant to be opened in new windows so that you can see how `contain` and `cover` behave when the background positioning area's dimensions vary. [This series of demos of how `background-size` works and interacts with other `background-*` properties][20] should pretty much cover the remaining ground in how to use `background-size` alone and in conjunction with other properties.

### Notes

If you are specifying a gradient as background and have specified a `background-size` to go with it, it's best not to specify a size that uses a single auto component, or is specified using only a width value (for example, `background-size: 50%`).  Rendering of gradients in such cases changed in Firefox 8, and at present it is generally inconsistent across browsers, which do not all implement rendering in full accordance with [the CSS3 `background-size` specification][21] and with [the CSS3 Image Values gradient specification][22].

    .bar {
           width: 50px; height: 100px;
           background-image: gradient(...);
    
           /* NOT RECOMMENDED */
           background-size: 25px;
           background-size: 50%;
           background-size: auto 50px;
           background-size: auto 50%;
    
           /* OKAY */
           background-size: 25px 50px;
           background-size: 50% 50%;
    }
    

Note that it's particularly not recommended to use a pixel dimension and an `auto` dimension with a gradient, because it's impossible to replicate rendering in versions of Firefox prior to 8, and in browsers not implementing Firefox 8's rendering, without knowing the exact size of the element whose background is being specified.


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/background "The background CSS property is a shorthand for setting the individual background values in a single place in the style sheet. background can be used to set the values for one or more of: background-clip, background-color, background-image, background-origin, background-position, background-repeat, background-size, and background-attachment."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-bg-size "[ <length> | <percentage> | auto ]{1,2} | cover | contain"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: The previous entity may appear 0, 1 or several times, each occurrence being separated from the previous one by a comma."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/background-origin "The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property."
[16]: https://developer.mozilla.org/en/docs/Web/CSS/background-attachment "The documentation about this has not yet been written; please consider contributing!"
[17]: https://developer.mozilla.org/en/docs/Web/CSS/-moz-element "The documentation about this has not yet been written; please consider contributing!"
[18]: http://whereswalden.com/files/mozilla/background-size/page-cover.html
[19]: http://whereswalden.com/files/mozilla/background-size/page-contain.html
[20]: http://whereswalden.com/files/mozilla/background-size/more-examples.html
[21]: http://www.w3.org/TR/css3-background/#the-background-size "http://www.w3.org/TR/css3-background/#the-background-size"
[22]: http://dev.w3.org/csswg/css3-images/#gradients "http://dev.w3.org/csswg/css3-images/#gradients"