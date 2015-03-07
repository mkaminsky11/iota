## @media

### Summary

The `@media` [CSS][0] [at-rule][1] associates a set of nested statements, in a CSS block that is delimited by curly braces, with a condition defined by a [media query][2]. The `@media` at-rule may be used not only at the top level of a CSS, but also inside any [CSS conditional-group at-rule][3].

The `@media` at-rule can be accessed via the CSS object model interface [`CSSMediaRule`][4].

### Syntax

    @media _<media-query>_ {
      /* media-specific rules */
    }
    

A `<media-query>` is composed of a media type and/or a number of media features.

### Media types

**Note:** Firefox currently only implements the `print` and `screen` media types.  The [FullerScreen][5] extension enables support for the `projection` media type.

**all**

> Suitable for all devices.

**print**

> Intended for paged material and for documents viewed on screen in print preview mode. Please consult the section on [paged media][6], and the [media section of the Getting Started tutorial][7] for information about formatting issues that are specific to paged media.

**screen**

> Intended primarily for color computer screens.

**speech**

> Intended for speech synthesizers. Note: CSS2 had a similar media type called 'aural' for this purpose. See the appendix on aural style sheets for details.

**Note:** CSS2.1 and Media Queries 3 defined several additional media types (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, `aural`), but they were deprecated in [Media Queries 4][8] and shouldn't be used.

### Media Features

[Definition][9]. This section needs to be expanded to explain media conditions in more depth.
Name
Summary
Notes

[`width`][10]
Viewport width

[`height`][11]
Viewport height

[`aspect-ratio`][12]
Width-to-height aspect ratio of the viewport

[`orientation`][13]
Orientation of the viewport

[`resolution`][14]
Pixel density of the output device

[`scan`][15]
Scanning process of the output device

[`grid`][16]
Is the device a grid or bitmap?

[`update-frequency`][17]
How quickly (if at all) can the output device modify the appearance of the content
Added in Media Queries Level 4

[`overflow-block`][18]
How does the output device handle that overflows the viewport along the block axis?
Added in Media Queries Level 4

[`overflow-inline`][19]
Can content that overflows the viewport along the inline axis be scrolled?
Added in Media Queries Level 4

[`color`][20]
Number of bits per color component of the output device, or zero if the device isn't color.

[`color-index`][21]
Number of entries in the output device's color lookup table, or zero if the device does not use such a table.

[`monochrome`][22]
Bits per pixel in the output device's monochrome frame buffer, or 0 if the device is not monochrome.

[`inverted-colors`][23]
Is the user agent or underlying OS inverting colors?

[`pointer`][24]
Is the primary input mechanism a pointing device, and if so, how accurate is it?
Added in Media Queries Level 4

[`hover`][25]
Does the primary input mechanism allow the user to hover over elements?
Added in Media Queries Level 4

[`any-pointer`][26]
Is any available input mechanism a pointing device, and if so, how accurate is it?

[`any-hover`][27]
Does any available input mechanism allow the user to hover over elements?

[`light-level`][28]
Current ambient light level
Added in Media Queries Level 4

[`scripting`][29]
Is scripting (e.g. JavaScript) available?
Added in Media Queries Level 4

[`device-width`][30] __
Width of the rendering surface of the output device
Deprecated in Media Queries Level 4

[`device-height`][31] __
Height of the rendering surface of the output device
Deprecated in Media Queries Level 4

[`device-aspect-ratio`][32] __
Width-to-height aspect ratio of the output device
Deprecated in Media Queries Level 4

### Examples

    @media print {
      body { font-size: 10pt }
    }
    @media screen {
      body { font-size: 13px }
    }
    @media screen, print {
      body { line-height: 1.2 }
    }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/At-rule "en/CSS/At-rule"
[2]: https://developer.mozilla.org/en/CSS/Media_queries "CSS media queries"
[3]: https://developer.mozilla.org/en/CSS/At-rule#Conditional_Group_Rules "en/CSS/At-rule#Conditional_Group_Rules"
[4]: https://developer.mozilla.org/en/docs/Web/API/CSSMediaRule "The CSSMediaRule is an interface representing a single CSS @media rule. It implements the CSSConditionRule interface, and therefore the CSSGroupingRule and the CSSRule interface with a type value of 4 (CSSRule.MEDIA_RULE)."
[5]: https://addons.mozilla.orghttps://developer.mozilla.org/en/firefox/addon/4650 "https://addons.mozilla.orghttps://developer.mozilla.org/en/firefox/addon/4650"
[6]: https://developer.mozilla.org/en/CSS/Paged_Media "https://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/Paged_Media"
[7]: https://developer.mozilla.org/en/CSS/Getting_Started/Media "https://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/Getting_Started/Media"
[8]: http://dev.w3.org/csswg/mediaqueries/#media-types
[9]: http://dev.w3.org/csswg/mediaqueries/#mq-features
[10]: https://developer.mozilla.org/en/docs/Web/CSS/@media/width
[11]: https://developer.mozilla.org/en/docs/Web/CSS/@media/height
[12]: https://developer.mozilla.org/en/docs/Web/CSS/@media/aspect-ratio
[13]: https://developer.mozilla.org/en/docs/Web/CSS/@media/orientation
[14]: https://developer.mozilla.org/en/docs/Web/CSS/@media/resolution
[15]: https://developer.mozilla.org/en/docs/Web/CSS/@media/scan
[16]: https://developer.mozilla.org/en/docs/Web/CSS/@media/grid
[17]: https://developer.mozilla.org/en/docs/Web/CSS/@media/update-frequency
[18]: https://developer.mozilla.org/en/docs/Web/CSS/@media/overflow-block
[19]: https://developer.mozilla.org/en/docs/Web/CSS/@media/overflow-inline
[20]: https://developer.mozilla.org/en/docs/Web/CSS/@media/color
[21]: https://developer.mozilla.org/en/docs/Web/CSS/@media/color-index
[22]: https://developer.mozilla.org/en/docs/Web/CSS/@media/monochrome
[23]: https://developer.mozilla.org/en/docs/Web/CSS/@media/inverted-colors
[24]: https://developer.mozilla.org/en/docs/Web/CSS/@media/pointer
[25]: https://developer.mozilla.org/en/docs/Web/CSS/@media/hover
[26]: https://developer.mozilla.org/en/docs/Web/CSS/@media/any-pointer
[27]: https://developer.mozilla.org/en/docs/Web/CSS/@media/any-hover
[28]: https://developer.mozilla.org/en/docs/Web/CSS/@media/light-level
[29]: https://developer.mozilla.org/en/docs/Web/CSS/@media/scripting
[30]: https://developer.mozilla.org/en/docs/Web/CSS/@media/device-width
[31]: https://developer.mozilla.org/en/docs/Web/CSS/@media/device-height
[32]: https://developer.mozilla.org/en/docs/Web/CSS/@media/device-aspect-ratio