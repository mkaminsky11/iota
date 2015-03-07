## font-variant-numeric

### Summary

The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][1] and [`::first-line`][2]. 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][6]: normal [|][7] [ [<numeric-figure-values>][8] [||][9] [<numeric-spacing-values>][10] [||][9] [<numeric-fraction-values>][11] [||][9] ordinal [||][9] slashed-zero ]

    font-variant-numeric: normal
    font-variant-numeric: ordinal
    font-variant-numeric: slashed-zero
    font-variant-numeric: lining-nums         /* <numeric-figure-values> */
    font-variant-numeric: oldstyle-nums       /* <numeric-figure-values> */
    font-variant-numeric: proportional-nums   /* <numeric-spacing-values> */
    font-variant-numeric: tabular-nums        /* <numeric-spacing-values> */
    font-variant-numeric: diagonal-fractions  /* <numeric-fraction-values> */
    font-variant-numeric: stacked-fractions   /* <numeric-fraction-values> */
    font-variant-numeric: oldstyle-nums stacked-fractions
    
    font-variant-numeric: initial
    font-variant-numeric: inherit
    font-variant-numeric: unset
    

### Values

**`normal`**

> This keyword leads to the deactivation of the use of such alternate glyphs.

**`ordinal`**

> This keyword forces the use of special glyphs for the ordinal markers, like 1st, 2nd, 3rd, 4th in English or a 1a in Italian. It corresponds to the OpenType values `ordn`.

**`slashed-zero`**

> This keyword forces the use of a 0 with a slash; this is useful when a clear distinction between O and 0 is needed. It corresponds to the OpenType values `zero`.

**_<numeric-figure-values_\>**

> These values controls the figures used for numbers. Two values are possible:
> 
> * `lining-nums` activating the set of figures where numbers are all lying on the baseline. It corresponds to the OpenType values `lnum`.
> * `oldstyle-nums` activating the set of figures where some numbers, like 3, 4, 7, 9 have descenders. It corresponds to the OpenType values `onum`.
> 

**_<numeric-spacing-values_\>**

> These values controls the sizing of figures used for numbers. Two values are possible:
> 
> * `proportional-nums` activating the set of figures where numbers are not all of the same size. It corresponds to the OpenType values `pnum`.
> * `tabular-nums` activating the set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables. It corresponds to the OpenType values `tnum`.
> 

**_<numeric-figure-values_\>**

> These values controls the glyphs used to display fractions. Two values are possible:
> 
> * `diagonal-fractions` activating the set of figures where the numerator and denominator are made smaller and separated by a slash. It corresponds to the OpenType values `frac`.
> * `stacked-fractions` activating the set of figures where the numerator and denominator are made smaller, stacked and separated by a horizontal line. It corresponds to the OpenType values `afrc`.
> 

### Examples

    p {
      font-variant-numeric: ordinal;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-numeric-figure-values "[ lining-nums | oldstyle-nums ]"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[10]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-numeric-spacing-values "[ proportional-nums | tabular-nums ]"
[11]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-numeric-fraction-values "[ diagonal-fractions | stacked-fractions ]"