## font-variant

### Summary

The `font-variant` CSS property selects a `normal`, or `small-caps` face from a font family. Setting the CSS Level 2 (Revision 1) values of the  `font-variant` property, that is `normal` or `small-caps`, is also possible by using the [`font`][0] shorthand.

This property acts as a shorthand and, when set, resets the unspecified values of the longhand properties: [`font-variant-caps`][1], [`font-variant-numeric`][2], [`font-variant-alternates`][3], [`font-variant-ligatures`][4], and [`font-variant-east-asian`][5].

* _[Initial value][6]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][7] and [`::first-line`][8]. 
* _[Inherited][9]_ yes 
* _Media_ [`visual`][10] 
* _[Computed value][11]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][12]: normal [|][13] none [|][13] [ [<common-lig-values>][14] [||][15] [<discretionary-lig-values>][16] [||][15] [<historical-lig-values>][17] [||][15] [<contextual-alt-values>][18] [||][15] stylistic([<feature-value-name>][19]) [||][15] historical-forms [||][15] styleset([<feature-value-name>][19] [#][20]) [||][15] character-variant([<feature-value-name>][19] [#][20]) [||][15] swash([<feature-value-name>][19]) [||][15] ornaments([<feature-value-name>][19]) [||][15] annotation([<feature-value-name>][19]) [||][15] [ small-caps [|][13] all-small-caps [|][13] petite-caps [|][13] all-petite-caps [|][13] unicase [|][13] titling-caps ] [||][15] [<numeric-figure-values>][21] [||][15] [<numeric-spacing-values>][22] [||][15] [<numeric-fraction-values>][23] [||][15] ordinal [||][15] slashed-zero [||][15] [<east-asian-variant-values>][24] [||][15] [<east-asian-width-values>][25] [||][15] ruby ] 
    

### Values

**`normal`**

> Specifies a normal font face; each of the longhand properties has an initial value of normal. Longhand properties of `font-variant` are: [`font-variant-caps`][1], [`font-variant-numeric`][2], [`font-variant-alternates`][3], [`font-variant-ligatures`][4], and [`font-variant-east-asian`][5].

**`none`**

> Sets the value of the [`font-variant-ligatures`][4] to `none` and the values of the other longhand property as `normal`, their initial value.

**`<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`**

> Specifies the keywords related to the [`font-variant-ligatures`][4] longhand property. The possible values are: `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual`, and `no-contextual`.

**`stylistic()`,  `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`**

> Specifies the keywords and functions related to the [`font-variant-alternates`][3] longhand property.

**`small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`**

> Specifies the keywords and functions related to the [`font-variant-caps`][1] longhand property.

**`<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`**

> Specifies the keywords related to the [`font-variant-numeric`][2] longhand property. The possible values are:  `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, and `slashed-zero`.

**`<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`**

> Specifies the keywords related to the [`font-variant-east-asian`][5] longhand property. The possible values are: `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, `ruby`.

### Examples

    p {
      font-variant: small-caps;
    }



[0]: https://developer.mozilla.org/en/docs/Web/CSS/font "The font CSS property is either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height and font-family, or a way to set the element's font to a system font, using specific keywords."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-caps "The font-variant-caps CSS property controls the usage of alternate glyphs for capital letters. Scripts can have capital letter glyphs of different sizes, the normal uppercase glyphs, small capital glyphs, and petite capital glyphs. This property controls which alternate glyphs to use."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-numeric "The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-alternates "The font-variant-alternates CSS property controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-ligatures "The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text"
[5]: https://developer.mozilla.org/en/docs/Web/CSS/font-variant-east-asian "The font-variant-east-asian CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese."
[6]: https://developer.mozilla.org/en/docs/CSS/initial_value
[7]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[9]: https://developer.mozilla.org/en/docs/CSS/inheritance
[10]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[11]: https://developer.mozilla.org/en/docs/CSS/computed_value
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[14]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-common-lig-values "[ common-ligatures | no-common-ligatures ]"
[15]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[16]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-discretionary-lig-values "[ discretionary-ligatures | no-discretionary-ligatures ]"
[17]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-historical-lig-values "[ historical-ligatures | no-historical-ligatures ]"
[18]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-contextual-alt-values "[ contextual | no-contextual ]"
[19]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-feature-value-name "IDENT"
[20]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[21]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-numeric-figure-values "[ lining-nums | oldstyle-nums ]"
[22]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-numeric-spacing-values "[ proportional-nums | tabular-nums ]"
[23]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-numeric-fraction-values "[ diagonal-fractions | stacked-fractions ]"
[24]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-east-asian-variant-values "[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]"
[25]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-east-asian-width-values "[ full-width | proportional-width ]"