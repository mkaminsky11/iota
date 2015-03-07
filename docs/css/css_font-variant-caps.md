## font-variant-caps

### Summary

The **`font-variant-caps`** CSS property controls the usage of alternate glyphs for capital letters. Scripts can have capital letter glyphs of different sizes, the normal uppercase glyphs, small capital glyphs, and petite capital glyphs. This property controls which alternate glyphs to use.

If petite capital glyphs are not present in the font, small capital glyphs are used. If these are not present, the browser synthesizes them from the uppercase glyphs. Note that some caseless characters, like punctuation marks, may have such special glyphs: they are designed to better match the characters around them. Nevertheless synthetic small capitals glyphs are never synthesized for caseless character.

The values takes into account language-specific case mapping rules, like:

* In Turkic languages, like Turkish (tr), Azerbaijani (az), Crimean Tatar (crh), Volga Tatar (tt), and Bashkir (ba), there are two kinds of i, with and without the dot, and two case pairings: `i`/`İ` and `ı`/`I`.
* In German (de), the `ß` becomes `SS` in uppercase.
* In Greek (el), vowels lose their accent when the whole word is in uppercase (`ά`/`Α`), except for the disjunctive eta (`ή`/`Ή`). Also, diphthongs with an accent on the first vowel lose the accent and gain a diacritic on the second vowel (`άι`/`ΑΪ`).

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][1] and [`::first-line`][2]. 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: normal [|][7] small-caps [|][7] all-small-caps [|][7] petite-caps [|][7] all-petite-caps [|][7] unicase [|][7] titling-caps

    font-variant-caps: normal
    font-variant-caps: small-caps
    font-variant-caps: all-small-caps
    font-variant-caps: petite-caps
    font-variant-caps: all-petite-caps
    font-variant-caps: unicase 
    font-variant-caps: titling-caps
    
    font-variant-caps: initial
    font-variant-caps: inherit
    font-variant-caps: unset
    

### Values

**`normal`**

> This keyword leads to the deactivation of the use of such alternate glyphs.

**`small-caps`**

> This keyword forces the use of small capitals letters for lower case characters. It corresponds to the OpenType value `smcp`; if the font doesn't support them, it synthesizes the glyphs.

**`all-small-caps`**

> This keyword forces the use of small capital letters for lower case characters. It corresponds to the OpenType values `smcp` and `c2sc`; if the font doesn't support them, it synthesizes the glyphs.

**`petite-caps`**

> This keyword forces the use of petite capital letters for lower case characters. It corresponds to the OpenType value `pcap`; if the font doesn't support them, small caps glyphs are used instead.

**`all-petite-caps`**

> This keyword forces the use of petite capital letters for lower case characters. It corresponds to the OpenType values `pcap` and `c2pc`; if the font doesn't support them, small caps glyphs are used instead.

**`unicase`**

> This keyword forces the use of small capital letters for upper case characters. It corresponds to the OpenType value `unic`; if the font doesn't support them, small caps glyphs are used for the upper case characters instead.

**`titling-caps`**

> This keyword forces the use of special capitals for titling, for both lower and uppercase letters. Regular uppercase glyphs are usually designed to be rendered with lowercase glyphs: they tend to appear too bold when a long run of text use such glyphs. The special glyphs used here are designed not to produce this effect. This keyword corresponds to the OpenType value `titl`; if the font doesn't support it, the keyword has no visible action.

### Examples

    p {
      font-variant-caps: small-caps;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."