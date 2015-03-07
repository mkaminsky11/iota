## font-stretch

### Summary

The `font-stretch` CSS property selects a normal, condensed, or expanded face from a font.

![The two 'e' belong to the same fonts. One is condensed, the other normal and can be selected by 'font-stretch'.](/files/4321/Character_in_same_font_but_one_condensed.png)

This property does not change the geometry of an arbitrary font by stretching or shrinking it. Like [`font-feature-settings`][0] or [`font-variant`][1], it is merely a mean to choose the most appropriate _face_ of the font, if this one offers several of them.

**Note:******If the font provides several faces, the one fitting the best with the value of the `font-stretch` property is chosen. E.g. On OS X, in addition to the more common Bold, Regular, Italic, and BoldItalic faces, the "Helvetica Neue" font proposes a second set of faces with condensed, that is shrunk, characters: Condensed. Browsers supporting `font-stretch` will use the condensed faces for the value `ultra-condensed` to `semi-condensed` and the normal faces for the other (`normal` and all expanded values).
![Font-stretch results with a font having 2 faces, one condensed and one normal.](/files/4317/Font_stretch_with_2_faces.png)

If the font has no condensed or expanded faces, like the default "Times New Roman" on Mac OS, `font-stretch` will not have any visible effect as the only suitable face will be used in all cases.:  
![Font-stretch results with a font having 1 single face.](/files/4319/Font_stretch_with_1_face.png)

* _[Initial value][2]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ yes 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as specified 
* _Animatable_ yes, as a [font stretch][8] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: normal [|][10] ultra-condensed [|][10] extra-condensed [|][10] condensed [|][10] semi-condensed [|][10] semi-expanded [|][10] expanded [|][10] extra-expanded [|][10] ultra-expanded
    

    font-stretch: ultra-condensed
    font-stretch: extra-condensed
    font-stretch: condensed
    font-stretch: semi-condensed
    font-stretch: normal
    font-stretch: semi-expanded
    font-stretch: expanded
    font-stretch: extra-expanded
    font-stretch: ultra-expanded
    
    font-stretch: inherit
    

### Values

**`normal`**

> Specifies a normal font face.

**`semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`**

> Specifies a font face more condensed than normal, with ultra-condensed as the most condensed.

**`semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`**

> Specifies a font face more expanded than normal, with ultra-expanded as the most expanded.

### Interpolation

Font stretch values are interpolated in discrete steps. The interpolation happens as though the ordered values are equally spaced real numbers; the result is rounded to the nearest value, with values exactly halfway between two values rounded towards the later value, that is the most expanded one.

### Examples

    h1 { font-stretch: extra-expanded }
    p  { font-stretch: condensed }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/font-feature-settings "The font-feature-settings CSS property allows control over advanced typographic features in OpenType fonts."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant "The font-variant CSS property selects a normal, or small-caps face from a font family. Setting the CSS Level 2 (Revision 1) values of the  font-variant property, that is normal or small-caps, is also possible by using the font shorthand."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/font-stretch#Interpolation "Font stretch values are interpolated in discrete steps. The interpolation happens as though the ordered values are equally spaced real numbers; the result is rounded to the nearest value, with values exactly halfway between two values rounded towards the later value, that is the most expanded one."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."