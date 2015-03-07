## font-variant-alternates

### Summary

The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs associated to alternative names defined in [`@font-feature-values`][0].

The at-rules defines names, for a given kind of alternative glyphs (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` or `annotation`), associating it to a given OpenType values. This property allows to use these user-friendly names in the stylesheet.

* _[Initial value][1]_ `normal` 
* _Applies to_ all elements 
* _[Inherited][2]_ yes 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][5]: normal [|][6] [ stylistic([<feature-value-name>][7]) [||][8] historical-forms [||][8] styleset([<feature-value-name>][7] [#][9]) [||][8] character-variant([<feature-value-name>][7] [#][9]) [||][8] swash([<feature-value-name>][7]) [||][8] ornaments([<feature-value-name>][7]) [||][8] annotation([<feature-value-name>][7]) ] 

    font-variant-alternates: normal
    font-variant-alternates: historical-forms
    font-variant-alternates: stylistic(user-defined-ident)
    font-variant-alternates: styleset(user-defined-ident)
    font-variant-alternates: character-variant(user-defined-ident)
    font-variant-alternates: swash(user-defined-ident)
    font-variant-alternates: ornaments(user-defined-ident)
    font-variant-alternates: annotation(user-defined-ident)
    font-variant-alternates: swash(ident1) annotation(ident2)
    
    font-variant-alternates: initial
    font-variant-alternates: inherit
    font-variant-alternates: unset
    

### Values

**`normal`**

> This keyword leads to the deactivation of the use of such alternate glyphs.

**`historical-forms`**

> This keyword enables the display of historical forms, that is glyphs that were common in the past but no more today. It corresponds to the OpentType value `hist`.

**`stylistic()`**

> This function enables the display of a stylistic alternates. The parameter is a font-specific names mapped to a number. It corresponds to the OpenType value `salt` like `salt 2`.

**`styleset()`**

> This function enables the usage of a set of stylistic alternatives for characters. The parameter is a font-specific names mapped to a number. It corresponds to the OpenType value `ssXY` like `ss02`.

**`character-variant()`**

> This function enables the usage of a set of stylistic alternatives for characters. It is very similar to `styleset()` though the variant here doesn't create coherent glyphs for a set of characters; individual characters will have independant and not necessary coherent styles. The parameter is a font-specific names mapped to a number. It corresponds to the OpenType value `cvXY` like `cv02`.

**`swash()`**

> This function enables the display of [swash][10] glyphs. The parameter is a font-specific names mapped to a number. It corresponds to the OpenType value `swsh` and `cswh` like `swsh 2` and `cswh 2`.

**`ornaments()`**

> This function enables the display of ornaments, that are [fleurons][11] and other dingbats-like glyphs. The parameter is a font-specific names mapped to a number. It corresponds to the OpenType value `ornm` like `ornm 2`.
> 
> **Note: **in order to preserve the semantic of the font, font designer are invited to include ornaments that doesn't match a Unicode zingbat character as ornaments variant of the bullet character (U+2022). Well-formed fonts will do that, though a lot of other fonts won't.
> 

**`annotation()`**

> This function enables the display of annotations, like circled digits or inverterd characters. The parameter is a font-specific names mapped to a number. It corresponds to the OpenType value `nalt` like `nalt 2`.

### Examples

    @font-feature-values Example Script { @swash { ident: 1; another_ident: 2; } }
    
    p {
      font-family: Example Script;
      font-variant-alternates: swash(another_ident); /* use swash alternate #2 */
    }



[0]: https://developer.mozilla.org/en/docs/Web/CSS/@font-feature-values "The documentation about this has not yet been written; please consider contributing!"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[7]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-feature-value-name "Tooltip not found in DB."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[10]: http://en.wikipedia.org/wiki/Swash_%28typography%29
[11]: http://en.wikipedia.org/wiki/Fleuron_%28typography%29