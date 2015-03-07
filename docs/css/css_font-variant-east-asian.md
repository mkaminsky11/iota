## font-variant-east-asian

### Summary

The **`font-variant-east-asian`** CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements 
* _[Inherited][1]_ yes 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][4]: normal [|][5] [ [<east-asian-variant-values>][6] [||][7] [<east-asian-width-values>][8] [||][7] ruby ] 

    font-variant-east-asian: normal
    font-variant-east-asian: ruby
    font-variant-east-asian: jis78              /* <east-asian-variant-values> */
    font-variant-east-asian: jis83              /* <east-asian-variant-values> */
    font-variant-east-asian: jis90              /* <east-asian-variant-values> */
    font-variant-east-asian: jis04              /* <east-asian-variant-values> */
    font-variant-east-asian: simplified         /* <east-asian-variant-values> */
    font-variant-east-asian: traditional        /* <east-asian-variant-values> */
    font-variant-east-asian: full-width         /* <east-asian-width-values> */
    font-variant-east-asian: proportional-width /* <east-asian-width-values> */
    font-variant-east-asian: ruby full-width jis83
    
    font-variant-east-asian: initial
    font-variant-east-asian: inherit
    font-variant-east-asian: unset
    

### Values

**`normal`**

> This keyword leads to the deactivation of the use of such alternate glyphs.

**`ruby`**

> This keyword forces the use of special glyphs for ruby characters. As these are usually smaller, font creators often designs specific forms, usually slightly bolder to improve the contrast. This keyword corresponds to the OpenType values `ruby`.

**_<east-asian-variant-values_\>**

> These values activates the figures defined in specific standard. Possible values are:
> Keyword
> Standard defining the glyphs
> OpenType equivalent
> 
> `jis78`
> [JIS X 208 version 1978][9]
> `jp78`
> 
> `jis83`
> [JIS X 208 version 1983][9]
> `jp83`
> 
> `jis90`
> [JIS X 208 version 1990][9]
> `jp90`
> 
> `jis04`
> [JIS X 208 version 2004][9]
> `jp04`
> 
> `simplified`
> None, use the simplified Chinese glyphs
> `smpl`
> 
> `traditional`
> None, use the traditional Chinese glyphs
> `trad`
> 
> 

**_<_east-asian-width-values__\>**

> These values controls the sizing of figures used for East Asian characters. Two values are possible:
> 
> * `proportional-width` activating the set of figures where numbers are not all of the same size. It corresponds to the OpenType values `pwid`.
> * `full-width` activating the set of figures where numbers are all of the same size, allowing them to be easily aligned like in tables. It corresponds to the OpenType values `fwid`.
> 

### Examples

    p {
      font-variant-east-asian: ruby;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[6]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-east-asian-variant-values "Tooltip not found in DB."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[8]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-east-asian-width-values "Tooltip not found in DB."
[9]: http://en.wikipedia.org/wiki/JIS_X_0208