## font-variant-position

### Summary

The **`font-variant-position`** CSS property controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font, which is set unchanged. These glyphs are likely to be used in [`<sub>`][0] and [`<sup>`][1] elements.

When the usage of these alternate glyphs is activated, if one character in the run doesn't have such typographically enhanced glyph, the whole set of characters of the run is rendered using a fallback method, synthesizing these glyphs.

These alternate glyphs share the same em-box and the same baseline as the rest of the font. They are merely graphically enhanced but have no effect on the line-height and other box characteristics.

* _[Initial value][2]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ yes 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: normal [|][9] sub [|][9] super

    font-variant-position: normal
    font-variant-position: sub
    font-variant-position: super
    
    font-variant-position: initial
    font-variant-position: inherit
    font-variant-position: unset
    

### Values

**`normal`**

> This keyword leads to the deactivation of the use of such alternate glyphs.

**`sub`**

> This keyword forces the use of subscript alternate glyphs. If, in a given run, one such glyph is not available for a character, the whole characters in the run is rendered using synthesized appropriate glyphs.

**`super`**

> This keyword forces the use of superscript alternate glyphs. If, in a given run, one such glyph is not available for a character, the whole characters in the run is rendered using synthesized appropriate glyphs.

### Examples

    p {
      font-variant-position: super;
    }



[0]: https://developer.mozilla.org/en/docs/Web/HTML/Element/sub "The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text."
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/sup "The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."