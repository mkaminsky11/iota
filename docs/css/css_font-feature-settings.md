## font-feature-settings

### Summary

The `font-feature-settings` CSS property allows control over advanced typographic features in OpenType fonts.

**Note:** Whenever possible, Web authors should use the [`font-variant`][0] shorthand property or an associated longhand property, [`font-variant-ligatures`][1], [`font-variant-caps`][2], [`font-variant-east-asian`][3], [`font-variant-alternates`][4], [`font-variant-numeric`][5] or [`font-variant-position`][6].  
  
This property is a low-level feature designed to handle special cases where no other way to enable or access an OpenType font feature exists.  
  
In particular, this CSS property shouldn't be used to enable small caps.

* _[Initial value][7]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][8] and [`::first-line`][9]. 
* _[Inherited][10]_ yes 
* _Media_ [`visual`][11] 
* _[Computed value][12]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][13]: normal [|][14] [<feature-tag-value>][15][#][16]
    

    font-feature-settings: normal
    font-feature-settings: "smcp"
    font-feature-settings: "smcp" on
    font-feature-settings: "swsh" 2
    font-feature-settings: "smcp", "swsh" 2
    
    font-feature-settings: inherit
    

### Values

**`normal`**

> Text is laid out using default settings.

**`<feature-tag-value>`**

> When rendering text, the list of OpenType feature tag value is passed to the text layout engine to enable or disable font features. The tag is always a [`<string>`][17] of 4 ASCII characters. If it has more or less characters or contains characters outside the U+20 - U+7E codepoint range, the whole property is invalid.  
> The value is an positive integer. The two keywords `on` and `off` are synonyms for `1` and `0` respectively. If no value is set, the default is `1`. For non-Boolean OpenType features (e.g. [stylistic alternates][18]), the value implies a particular glyph to be selected; for Boolean values, it is a switch.

### Examples

    /* use small-cap alternate glyphs */
    .smallcaps { font-feature-settings: "smcp" on; }
    
    /* convert both upper and lowercase to small caps (affects punctuation also) */
    .allsmallcaps { font-feature-settings: "c2sc", "smcp"; }
    
    /* enable historical forms */
    .hist { font-feature-settings: "hist"; }
    
    /* disable common ligatures, usually on by default */
    .noligs { font-feature-settings: "liga" 0; }
    
    /* enable tabular (monospaced) figures */
    td.tabular { font-feature-settings: "tnum"; }
    
    /* enable automatic fractions */
    .fractions { font-feature-settings: "frac"; }
    
    /* use the second available swash character */
    .swash { font-feature-settings: "swsh" 2; }
    
    /* enable stylistic set 7 */
    .fancystyle {
      font-family: Gabriola; /* available on Windows 7, and on Mac OS */
      font-feature-settings: "ss07";
    }
    

### Specificat​ions
Specification
Status
Comment

[CSS Fonts Module Level 3  
The definition of 'font-feature-settings' in that specification.][19]
Candidate Recommendation

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari (WebKit)

Basic support
16.0 -webkit
[4.0][20] (2.0) \[1\]\[2\]\[3\]-moz  
[34.0][21] (34.0)
10.0
18.0 (or earlier?) -o
Not supported

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
?
4.0 (2.0) \[1\]\[2\]\[3\]-moz  
34.0 (34.0)
?
?
?

\[1\] From Gecko 2.0 (Firefox 4.0) to Gecko 14.0 (Firefox 14.0) included, Gecko supported an older syntax, slightly different from the modern one: [OpenType Font Feature support in Firefox 4][22].

\[2\] The [ISO/IEC CD 14496-22 3rd edition][23] suggests to use the `ssty` feature to provide glyph variants adjusted to be more suitable for use in scripts (for example primes used as superscripts). Starting with Firefox 29, this is done automatically by the [MathML][24] rendering engine. It also suggests applying the `dtls` feature to letters when positing mathematical accent over it, in order to get dotless forms (for example dotless i, j with a hat). Starting with Firefox 35, this is done automatically by the MathML rendering engine. You can always override via CSS the default values determined by the MathML rendering engine.

\[3\] Starting with Firefox 34, the version prefixed with `-moz-` is only kept for backward compatibility purpose. It is controlled by the` `layout.css.prefixes.font-features``, defaulting to `true`. The prefixed property will be remove in the future.

### See also

* [FontFont OpenType User Guide (pdf)][25]
* [OpenType Feature Tags][26] list
* [Using the whole font][27] (The -moz syntax is the old one. On Gecko, use the -ms syntax but with -moz).


[0]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant "The font-variant CSS property selects a normal, or small-caps face from a font family. Setting the CSS Level 2 (Revision 1) values of the  font-variant property, that is normal or small-caps, is also possible by using the font shorthand."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-ligatures "The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-caps "The font-variant-caps CSS property controls the usage of alternate glyphs for capital letters. Scripts can have capital letter glyphs of different sizes, the normal uppercase glyphs, small capital glyphs, and petite capital glyphs. This property controls which alternate glyphs to use."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-east-asian "The font-variant-east-asian CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates "The font-variant-alternates CSS property controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-numeric "The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-position "The font-variant-position CSS property controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font, which is set unchanged. These glyphs are likely to be used in <sub> and <sup> elements."
[7]: https://developer.mozilla.org/en/docs/CSS/initial_value
[8]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[10]: https://developer.mozilla.org/en/docs/CSS/inheritance
[11]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[12]: https://developer.mozilla.org/en/docs/CSS/computed_value
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[14]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[15]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-feature-tag-value "<string> [ <integer> | on | off ]?"
[16]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: The previous entity may appear 0, 1 or several times, each occurrence being separated from the previous one by a comma."
[17]: https://developer.mozilla.org/en/docs/Web/CSS/string "The documentation about this has not yet been written; please consider contributing!"
[18]: http://www.microsoft.com/typography/otspec/features_pt.htm#salt "http://www.microsoft.com/typography/otspec/features_pt.htm#salt"
[19]: http://dev.w3.org/csswg/css3-fonts/#propdef-font-feature-settings
[20]: https://developer.mozilla.org/en/Firefox/Releases/4 "Released on 2011-03-22."
[21]: https://developer.mozilla.org/en/Firefox/Releases/34 "Released on 2014-12-01."
[22]: http://hacks.mozilla.org/2010/11/firefox-4-font-feature-support/ "http://hacks.mozilla.org/2010/11/firefox-4-font-feature-support/"
[23]: http://mpeg.chiariglione.org/standards/mpeg-4/open-font-format/text-isoiec-cd-14496-22-3rd-edition
[24]: https://developer.mozilla.org/en/docs/Web/MathML
[25]: https://www.fontfont.com/staticcontent/downloads/FF_OT_User_Guide.pdf "http://www.fontfont.com/opentype/FF_OT_UserGuide_v2.pdf"
[26]: http://www.microsoft.com/typography/otspec/featurelist.htm "http://www.microsoft.com/typography/otspec/featurelist.htm"
[27]: http://blogs.msdn.com/b/ie/archive/2012/01/09/css-corner-using-the-whole-font.aspx "http://blogs.msdn.com/b/ie/archive/2012/01/09/css-corner-using-the-whole-font.aspx"