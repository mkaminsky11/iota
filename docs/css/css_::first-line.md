## ::first-line

### Summary

The `::first-line` [CSS][0] [pseudo-element][1] applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing `::first-line` does not match any real HTML element.

A first line has only meaning in a [block-container box][2], therefore the `::first-line` pseudo-element has only an effect on elements with a [`display`][3] value of `block`, `inline-block`, `table-cell` or `table-caption`. In all other cases, `::first-line` has no effect.

Only a small subset of all CSS properties can be used inside a declaration block of a CSS ruleset containing a selector using the `::first-line` pseudo-element:

* all font-related properties: [`font`][4], [`font-kerning`][5], [`font-style`][6], [`font-variant`][7], [`font-variant-numeric`][8], [`font-variant-position`][9], [`font-variant-east-asian`][10], [`font-variant-caps`][11], [`font-variant-alternates`][12], [`font-variant-ligatures`][13], [`font-synthesis`][14], [`font-feature-settings`][15], [`font-language-override`][16], [`font-weight`][17], [`font-size`][18], [`font-size-adjust`][19], [`font-stretch`][20], and [`font-family`][21]
* the [`color`][22] property
* all background-related properties: [`background-color`][23], [`background-clip`][24], [`background-image`][25], [`background-origin`][26], [`background-position`][27], [`background-repeat`][28], [`background-size`][29],  [`background-attachment`][30], and [`background-blend-mode`][31]
* [`word-spacing`][32], [`letter-spacing`][33], [`text-decoration`][34], [`text-transform`][35], and [`line-height`][36]
* [`text-shadow`][37], [`text-decoration`][34], [`text-decoration-color`][38], [`text-decoration-line`][39], [`text-decoration-style`][40], and [`vertical-align`][41].

As this list will be extended in the future, it is recommended that you not use any other properties inside the declaration block, in order to keep the CSS future-proof.

In CSS 2, pseudo-elements were prefixed with a single colon character. As pseudo-classes were also following the same convention, they were indistinguishable. To solve this, CSS 2.1 changed the convention for pseudo-elements. Now a pseudo-element is prefixed with two colon characters, and a pseudo-class is still prefixed with a single colon.

As several browsers already implemented the CSS 2 version in a release version, all browsers supporting the two-colon syntax also support the old one-colon syntax.

If legacy browsers must be supported, `:first-line` is the only viable choice; if not, `::first-line` is preferred.

### Examples
`p::first-line { text-transform: uppercase }`  
Change the letters of the first line of every paragraph to uppercase.

**Reference Result**

LOREM IPSUM DOLOR SIT AMET,  consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.

DUIS AUTE IRURE DOLOR IN reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

`p::first-line { margin-left: 20px }`  
Does nothing, `margin-left` cannot be applied to a first-line pseudo-element.

**Reference Result**

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

`p::first-line { text-indent: 20px }`  
Does nothing, `text-indent` cannot be applied to a first-line pseudo-element.

**Reference Result**

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.



[0]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements "Pseudo-elements"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes "https://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/display "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/font "The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/font-kerning "The font-kerning CSS property controls the usage of the kerning information; that is, it controls how letters are spaced. The kerning information is stored in the font, and if the font is well-kerned, this feature allows spacing between characters to be very similar, whatever the characters are."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/font-style "The font-style CSS property allows italic or oblique faces to be selected within a font-family."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant "The font-variant CSS property selects a normal, or small-caps face from a font family. Setting the CSS Level 2 (Revision 1) values of the  font-variant property, that is normal or small-caps, is also possible by using the font shorthand."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-numeric "The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-position "The font-variant-position CSS property controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font, which is set unchanged. These glyphs are likely to be used in <sub> and <sup> elements."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-east-asian "The font-variant-east-asian CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-caps "The font-variant-caps CSS property controls the usage of alternate glyphs for capital letters. Scripts can have capital letter glyphs of different sizes, the normal uppercase glyphs, small capital glyphs, and petite capital glyphs. This property controls which alternate glyphs to use."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates "The font-variant-alternates CSS property controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-ligatures "The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/font-synthesis "The font-synthesis CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/font-feature-settings "The font-feature-settings CSS property allows control over advanced typographic features in OpenType fonts."
[16]: https://developer.mozilla.org/en/docs/Web/CSS/font-language-override "The font-language-override CSS property controls the usage of language-specific glyphs in a typeface."
[17]: https://developer.mozilla.org/en/docs/Web/CSS/font-weight "The font-weight CSS property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on normal and bold."
[18]: https://developer.mozilla.org/en/docs/Web/CSS/font-size "The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units."
[19]: https://developer.mozilla.org/en/docs/Web/CSS/font-size-adjust "The font-size-adjust CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters."
[20]: https://developer.mozilla.org/en/docs/Web/CSS/font-stretch "The font-stretch CSS property selects a normal, condensed, or expanded face from a font."
[21]: https://developer.mozilla.org/en/docs/Web/CSS/font-family "The font-family CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a @font-face at-rule."
[22]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[23]: https://developer.mozilla.org/en/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent."
[24]: https://developer.mozilla.org/en/docs/Web/CSS/background-clip "Technical review completed. Editorial review completed."
[25]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them."
[26]: https://developer.mozilla.org/en/docs/Web/CSS/background-origin "The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property."
[27]: https://developer.mozilla.org/en/docs/Web/CSS/background-position "The background-position CSS property sets the initial position, relative to the background position layer defined by background-origin for each defined background image."
[28]: https://developer.mozilla.org/en/docs/Web/CSS/background-repeat "The background-repeat CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all."
[29]: https://developer.mozilla.org/en/docs/Web/CSS/background-size "The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio."
[30]: https://developer.mozilla.org/en/docs/Web/CSS/background-attachment "If a background-image is specified, the background-attachment CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block."
[31]: https://developer.mozilla.org/en/docs/Web/CSS/background-blend-mode "The background-blend-mode CSS property describes how the element's background images should blend with each other and the element's background color."
[32]: https://developer.mozilla.org/en/docs/Web/CSS/word-spacing "The word-spacing CSS property specifies spacing behavior between tags and words."
[33]: https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing "The letter-spacing CSS property specifies spacing behavior between text characters."
[34]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration "The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink. Underline and overline decorations are positioned under the text, line-through over it."
[35]: https://developer.mozilla.org/en/docs/Web/CSS/text-transform "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized."
[36]: https://developer.mozilla.org/en/docs/Web/CSS/line-height "On block level elements, the line-height CSS property specifies the minimal height of line boxes within the element."
[37]: https://developer.mozilla.org/en/docs/Web/CSS/text-shadow "The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decorations of the element."
[38]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-color "The text-decoration-color CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line. This is the preferred way to color these text decorations, rather than using combinations of other HTML elements."
[39]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-line "The text-decoration-line CSS property sets what kind of line decorations are added to an element."
[40]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-style "The text-decoration-style CSS property defines the style of the lines specified by text-decoration-line. The style applies to all lines, there is no way to define different style for each of the line defined by text-decoration-line."
[41]: https://developer.mozilla.org/en/docs/Web/CSS/vertical-align "The vertical-align CSS property specifies the vertical alignment of an inline or table-cell box."