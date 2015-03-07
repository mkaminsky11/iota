## font-style

### Summary

The `font-style` CSS property allows `italic` or `oblique` faces to be selected within a [`font-family`][0].

* _[Initial value][1]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2] and [`::first-line`][3]. 
* _[Inherited][4]_ yes 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: normal [|][8] italic [|][8] oblique
    

    font-style: normal
    font-style: italic
    font-style: oblique
    
    font-style: inherit
    

### Values

**Italic** forms are generally cursive in nature while **oblique** faces are typically sloped versions of the regular face. Oblique faces can be simulated by artificially sloping the glyphs of the regular face.

**normal**

> Selects a font that is classified as `normal` within a [`font-family`][0]

**italic**

> Selects a font that is labeled `italic`, if that is not available, one labeled `oblique`

**oblique**

> Selects a font that is labeled `oblique`

### Example

The example shows the different `font-style` values. The CSS looks like this:

    p.normal { font-style:normal } 
    p.italic { font-style:italic } 
    p.oblique { font-style: oblique }

### Specific​ations
Specification
Status
Comment

[CSS Fonts Module Level 3  
The definition of 'font-style' in that specification.][9]
Candidate Recommendation
No change.

[CSS Level 2 (Revision 1)  
The definition of 'font-style' in that specification.][10]
Recommendation
No change.

[CSS Level 1  
The definition of 'font-style' in that specification.][11]
Recommendation
Initial definition.

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari

Basic support
1.0
1.0 (1.7 or earlier)
4.0
7.0
1.0

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
1.0
1.0 (1)
6.0
6.0
1.0

### See also

* [`font`][12], 
[`font-family`][0], 
[`font-size`][13], 
[`font-size-adjust`][14], 
[`font-stretch`][15], 
[`font-style`][16], 
[`font-variant`][17], 
[`font-weight`][18], 
[`@font-face`][19]


[0]: https://developer.mozilla.org/en/docs/Web/CSS/font-family "The font-family CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a @font-face at-rule."
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[9]: http://dev.w3.org/csswg/css3-fonts/#font-style-prop
[10]: http://www.w3.org/TR/CSS2/fonts.html#propdef-font-style
[11]: http://www.w3.org/TR/CSS1/#font-style
[12]: https://developer.mozilla.org/en/docs/Web/CSS/font "The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/font-size "The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/font-size-adjust "The font-size-adjust CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/font-stretch "The font-stretch CSS property selects a normal, condensed, or expanded face from a font."
[16]: https://developer.mozilla.org/en/docs/Web/CSS/font-style "The font-style CSS property allows italic or oblique faces to be selected within a font-family."
[17]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant "The font-variant CSS property selects a normal, or small-caps face from a font family. Setting the CSS Level 2 (Revision 1) values of the  font-variant property, that is normal or small-caps, is also possible by using the font shorthand."
[18]: https://developer.mozilla.org/en/docs/Web/CSS/font-weight "The font-weight CSS property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on normal and bold."
[19]: https://developer.mozilla.org/en/docs/Web/CSS/@font-face "The @font-face CSS at-rule allows authors to specify online fonts to display text on their web pages. By allowing authors to provide their own fonts, @font-face eliminates the need to depend on the limited number of fonts users have installed on their computers. The @font-face at-rule may be used not only at the top level of a CSS, but also inside any CSS conditional-group at-rule."