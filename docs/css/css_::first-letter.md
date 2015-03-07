## ::first-letter

### Summary

The `::first-letter` [CSS][0] [pseudo-element][1] selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line.

The first letter of an element is not necessarily trivial to identify:

* Punctuation, that is any characters defined in Unicode in the _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf) and _other punctuation_ (Po) classes, preceding or immediately following the first letter is also matched by this pseudo-element.
* Similarly some languages have digraphs that are always capitalized together, like the `IJ` in Dutch. In these rare cases, both letters of the digraph should be matched by the `::first-letter` pseudo-element. (This is poorly supported by browsers, check the [browser compatibility table][2]).
* Finally, a combination of the [`::before`][3] pseudo-element and the [`content`][4] property may inject some text at the beginning of the element. In that case, `::first-letter` will match the first letter of this generated content.

A first line has only meaning in a [block-container box][5], therefore the `::first-letter` pseudo-element has only an effect on elements with a [`display`][6] value of `block`, `inline-block`, `table-cell`, `list-item` or `table-caption`. In all other cases, `::first-letter` has no effect.

Only a small subset of all CSS properties can be used inside a declaration block of a CSS ruleset containing a selector using the `::first-letter` pseudo-element:

* All font properties : [`font`][7], [`font-style`][8], [`font-feature-settings`][9], [`font-kerning`][10], [`font-language-override`][11], [`font-stretch`][12], [`font-synthesis`][13], [`font-variant`][14], [`font-variant-alternates`][15], [`font-variant-caps`][16], [`font-variant-east-asian`][17], [`font-variant-ligatures`][18], [`font-variant-numeric`][19], [`font-variant-position`][20], [`font-weight`][21], [`font-size`][22], [`font-size-adjust`][23], [`line-height`][24] and [`font-family`][25].
* All background properties : [`background-color`][26], [`background-image`][27], [`background-clip`][28], [`background-origin`][29], [`background-position`][30], [`background-repeat`][31], [`background-size`][32], [`background-attachment`][33], and [`background-blend-mode`][34].
* All margin properties: [`margin`][35], [`margin-top`][36], [`margin-right`][37], [`margin-bottom`][38], [`margin-left`][39].
* All padding properties: [`padding`][40], [`padding-top`][41], [`padding-right`][42], [`padding-bottom`][43], [`padding-left`][44].
* All border properties: the shorthands [`border`][45], [`border-style`][46], [`border-color`][47], [`border-width`][48], [`border-radius`][49], [`border-image`][50], and the longhands properties.
* The [`color`][51] property.
* The [`text-decoration`][52], [`text-shadow`][53], [`text-transform`][54], [`letter-spacing`][55], [`word-spacing`][56] (when appropriate), [`line-height`][24], [`text-decoration-color`][57], [`text-decoration-line`][58], [`text-decoration-style`][59], [`box-shadow`][60], [`float`][61], [`vertical-align`][62] (only if `float` is `none`) CSS properties.

As this list will be extended in the future, it is recommended that you not use any other properties inside the declaration block, in order to keep the CSS future-proof.

In CSS 2, pseudo-elements were prefixed with a single colon character. As pseudo-classes were also following the same convention, they were indistinguishable. To solve this, CSS 2.1 changed the convention for pseudo-elements. Now a pseudo-element is prefixed with two colon characters, and a pseudo-class is still prefixed with a single colon.

As several browsers already implemented the CSS 2 version in a release version, all browsers supporting the two-colon syntax also support the old one-colon syntax.

If legacy browsers must be supported, `:first-letter` is the only viable choice; if not, `::first-letter` is preferred.

### Examples

    /* make the first letter of every paragraph red and big */
    
    p::first-letter {  /* Use :first-letter if support for IE 8 or earlier is needed */
      color: red; 
      font-size: 130%; 
    }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/Pseudo-elements "Pseudo-elements"
[2]: /En/CSS/::first-letter#Browser_compatibility "https://developer.mozilla.org/En/CSS/::first-letter#Browser_compatibility"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::before "::before creates a pseudo-element that is the first child of the element matched. It is often used to add cosmetic content to an element by using the content property. This element is inline by default."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/content "The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element. Objects inserted using the content property are anonymous replaced elements."
[5]: https://developer.mozilla.org/en/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes "https://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/display "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/font "The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/font-style "The font-style CSS property allows italic or oblique faces to be selected within a font-family."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/font-feature-settings "The font-feature-settings CSS property allows control over advanced typographic features in OpenType fonts."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/font-kerning "The font-kerning CSS property controls the usage of the kerning information; that is, it controls how letters are spaced. The kerning information is stored in the font, and if the font is well-kerned, this feature allows spacing between characters to be very similar, whatever the characters are."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/font-language-override "The font-language-override CSS property controls the usage of language-specific glyphs in a typeface."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/font-stretch "The font-stretch CSS property selects a normal, condensed, or expanded face from a font."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/font-synthesis "The font-synthesis CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant "The font-variant CSS property selects a normal, or small-caps face from a font family. Setting the CSS Level 2 (Revision 1) values of the  font-variant property, that is normal or small-caps, is also possible by using the font shorthand."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates "The font-variant-alternates CSS property controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values."
[16]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-caps "The font-variant-caps CSS property controls the usage of alternate glyphs for capital letters. Scripts can have capital letter glyphs of different sizes, the normal uppercase glyphs, small capital glyphs, and petite capital glyphs. This property controls which alternate glyphs to use."
[17]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-east-asian "The font-variant-east-asian CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese."
[18]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-ligatures "The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text."
[19]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-numeric "The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers."
[20]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-position "The font-variant-position CSS property controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font, which is set unchanged. These glyphs are likely to be used in <sub> and <sup> elements."
[21]: https://developer.mozilla.org/en/docs/Web/CSS/font-weight "The font-weight CSS property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on normal and bold."
[22]: https://developer.mozilla.org/en/docs/Web/CSS/font-size "The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units."
[23]: https://developer.mozilla.org/en/docs/Web/CSS/font-size-adjust "The font-size-adjust CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters."
[24]: https://developer.mozilla.org/en/docs/Web/CSS/line-height "On block level elements, the line-height CSS property specifies the minimal height of line boxes within the element."
[25]: https://developer.mozilla.org/en/docs/Web/CSS/font-family "The font-family CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a @font-face at-rule."
[26]: https://developer.mozilla.org/en/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent."
[27]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "The CSS background-image property sets one or several background images for an element. The images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user. The borders of the element are then drawn on top of them, and the background-color is drawn beneath them."
[28]: https://developer.mozilla.org/en/docs/Web/CSS/background-clip "Technical review completed. Editorial review completed."
[29]: https://developer.mozilla.org/en/docs/Web/CSS/background-origin "The background-origin CSS property determines the background positioning area, that is the position of the origin of an image specified using the background-image CSS property."
[30]: https://developer.mozilla.org/en/docs/Web/CSS/background-position "The background-position CSS property sets the initial position, relative to the background position layer defined by background-origin for each defined background image."
[31]: https://developer.mozilla.org/en/docs/Web/CSS/background-repeat "The background-repeat CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all."
[32]: https://developer.mozilla.org/en/docs/Web/CSS/background-size "The background-size CSS property specifies the size of the background images. The size of the image can be fully constrained or only partially in order to preserve its intrinsic ratio."
[33]: https://developer.mozilla.org/en/docs/Web/CSS/background-attachment "If a background-image is specified, the background-attachment CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block."
[34]: https://developer.mozilla.org/en/docs/Web/CSS/background-blend-mode "The background-blend-mode CSS property describes how the element's background images should blend with each other and the element's background color."
[35]: https://developer.mozilla.org/en/docs/Web/CSS/margin "The margin CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: margin-top, margin-right, margin-bottom and margin-left.
 Negative values are also allowed."
[36]: https://developer.mozilla.org/en/docs/Web/CSS/margin-top "The margin-top CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed."
[37]: https://developer.mozilla.org/en/docs/Web/CSS/margin-right "The margin-right CSS property of an element sets the margin space required on the right side of an element. A negative value is also allowed."
[38]: https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom "The margin-bottom CSS property of an element sets the margin space required on the bottom of an element. A negative value is also allowed."
[39]: https://developer.mozilla.org/en/docs/Web/CSS/margin-left "The margin-left CSS property of an element sets the margin space required on the left side of a box associated with an element. A negative value is also allowed."
[40]: https://developer.mozilla.org/en/docs/Web/CSS/padding "The padding CSS property sets the required padding space on all sides of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed."
[41]: https://developer.mozilla.org/en/docs/Web/CSS/padding-top "The padding-top CSS property of an element sets the padding space required on the top of an element. The padding area is the space between the content of the element and its border. Contrary to margin-top values, negative values of padding-top are invalid."
[42]: https://developer.mozilla.org/en/docs/Web/CSS/padding-right "The padding-right CSS property of an element sets the padding space required on the right side of an element. The padding area is the space between the content of the element and its border. Negative values are not allowed."
[43]: https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom "The padding-bottom CSS property of an element sets the height of the padding area at the bottom of an element. The padding area is the space between the content of the element and it's border. Contrary to margin-bottom values, negative values of padding-bottom are invalid."
[44]: https://developer.mozilla.org/en/docs/Web/CSS/padding-left "The padding-left CSS property of an element sets the padding space required on the left side of an element. The padding area is the space between the content of the element and it's border. A negative value is not allowed."
[45]: https://developer.mozilla.org/en/docs/Web/CSS/border "The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color."
[46]: https://developer.mozilla.org/en/docs/Web/CSS/border-style "Technical review completed."
[47]: https://developer.mozilla.org/en/docs/Web/CSS/border-color "The border-color CSS property is a shorthand for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color"
[48]: https://developer.mozilla.org/en/docs/Web/CSS/border-width "Technical review completed."
[49]: https://developer.mozilla.org/en/docs/Web/CSS/border-radius "The border-radius CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse."
[50]: https://developer.mozilla.org/en/docs/Web/CSS/border-image "The border-image CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases."
[51]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[52]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration "The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink. Underline and overline decorations are positioned under the text, line-through over it."
[53]: https://developer.mozilla.org/en/docs/Web/CSS/text-shadow "The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and text-decorations of the element."
[54]: https://developer.mozilla.org/en/docs/Web/CSS/text-transform "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized."
[55]: https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing "The letter-spacing CSS property specifies spacing behavior between text characters."
[56]: https://developer.mozilla.org/en/docs/Web/CSS/word-spacing "The word-spacing CSS property specifies spacing behavior between tags and words."
[57]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-color "The text-decoration-color CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by text-decoration-line. This is the preferred way to color these text decorations, rather than using combinations of other HTML elements."
[58]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-line "The text-decoration-line CSS property sets what kind of line decorations are added to an element."
[59]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-style "The text-decoration-style CSS property defines the style of the lines specified by text-decoration-line. The style applies to all lines, there is no way to define different style for each of the line defined by text-decoration-line."
[60]: https://developer.mozilla.org/en/docs/Web/CSS/box-shadow "The box-shadow CSS property describes one or more shadow effects as a comma-separated list."
[61]: https://developer.mozilla.org/en/docs/Web/CSS/float "The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it. A floating element is one where the computed value of float is not none."
[62]: https://developer.mozilla.org/en/docs/Web/CSS/vertical-align "The vertical-align CSS property specifies the vertical alignment of an inline or table-cell box."