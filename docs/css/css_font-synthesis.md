## font-synthesis

### Summary

The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.

* _[Initial value][0]_ `weight style` 
* _Applies to_ all elements. It also applies to [`::first-letter`][1] and [`::first-line`][2]. 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][6]: none [|][7] [ weight [||][8] style ]

    font-synthesis: none
    font-synthesis: weight
    font-synthesis: style
    font-synthesis: weight style
    
    font-synthesis: initial
    font-synthesis: inherit
    font-synthesis: unset
    

### Values

**`none`**

> This keyword indicates that neither bold nor italic typeface must be synthesized.

**`weight`**

> This keyword indicates that a bold typeface may be synthesized if needed.

**`style`**

> This keyword indicates that an italic typeface may be synthesized if needed.

### Examples

    p {
      font-synthesis: none;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."