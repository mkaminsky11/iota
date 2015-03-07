## font-variant-ligatures

### Summary

The **`font-variant-ligatures`** CSS property controls which [ligatures][0] and [contextual forms][1] are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

* _[Initial value][2]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ yes 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][8]: normal [|][9] none [|][9] [ [<common-lig-values>][10] [||][11] [<discretionary-lig-values>][12] [||][11] [<historical-lig-values>][13] [||][11] [<contextual-alt-values>][14] ]

    font-variant-ligatures: normal
    font-variant-ligatures: none
    font-variant-ligatures: common-ligatures           /* <common-lig-values> */
    font-variant-ligatures: no-common-ligatures        /* <common-lig-values> */
    font-variant-ligatures: __discretionary-ligatures    /* <discretionary-lig-values>__ */
    font-variant-ligatures: no-__discretionary-ligatures /* <discretionary-lig-values>__ */
    font-variant-ligatures: historical-ligatures       /* <historical-lig-values> */
    font-variant-ligatures: no-historical-ligatures    /* <historical-lig-values> */
    font-variant-ligatures: contextual                 /* <contextual-alt-values> */
    font-variant-ligatures: no-contextual              /* <contextual-alt-values> */
    font-variant-ligatures: contextual no-historical-ligatures common-ligatures
    
    font-variant-ligatures: initial
    font-variant-ligatures: inherit
    font-variant-ligatures: unset
    

### Values

**`normal`**

> This keyword leads to the activation of the usual ligatures and contextual forms needed for correct rendering. The ligatures and forms activated depend on the font, language and kind of script. This is the default value.

**`none`**

> This keyword specifies that all ligatures and contextual forms are disabled, even common ones.

**<_common-lig-values\>_**

> These values control the most common ligatures, like for `fi`, `ffi`, `th` or similar. They correspond to the OpenType values `liga` and `clig`. Two values are possible:
> 
> * `common-ligatures` activating these ligatures. Note that the keyword `normal` activates these ligatures.
> * `no-common-ligatures` deactivating these ligatures.
> 

**<_discretionary-lig-values_\>**

> These values control specific ligatures, specific to the font and defined by the type designer. They correspond to the OpenType values `dlig`. Two values are possible:
> 
> * `discretionary-ligatures` activating these ligatures.
> * `no-`discretionary-ligatures`` deactivating the ligatures. Note that the keyword `normal` usually deactivates these ligatures.
> 

**_<historical-lig-values\>_**

> These values control the ligatures used historically, in old books, like the German tz digraph being displayed ß. They correspond to the OpenType values `hlig`. Two values are possible:
> 
> * `historical-ligatures` activating these ligatures.
> * `no-`historical-ligatures`` deactivating the ligatures. Note that the keyword `normal` usually deactivates these ligatures.
> 

**_<contextual-alt-values\>_**

> These values control whether letters adapt to their context---that is, whether they adapt to the surrounding letters. These values correspond to the OpenType values `calt`. Two values are possible:
> 
> * `contextual` specifies that the contextual alternates are to be used. Note that the keyword `normal` usually activates these ligatures too.
> * `no-contextual` prevents their use.
> 

### Examples

    p {
      font-variant-ligatures: none;
    }



[0]: https://developer.mozilla.org/en/docs/Glossary/ligatures "The definition of that term (ligatures) has not been written yet; please consider contributing it!"
[1]: https://developer.mozilla.org/en/docs/Glossary/contextual_forms "The definition of that term (contextual forms) has not been written yet; please consider contributing it!"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-common-lig-values "[ common-ligatures | no-common-ligatures ]"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-discretionary-lig-values "[ discretionary-ligatures | no-discretionary-ligatures ]"
[13]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-historical-lig-values "[ historical-ligatures | no-historical-ligatures ]"
[14]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-contextual-alt-values "[ contextual | no-contextual ]"