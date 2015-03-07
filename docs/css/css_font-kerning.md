## font-kerning

### Summary

The **`font-kerning`** CSS property controls the usage of the kerning information; that is, it controls how letters are spaced. The kerning information is stored in the font, and if the font is _well-kerned_, this feature allows spacing between characters to be very similar, whatever the characters are.

![Example of font-kerning](https://mdn.mozillademos.org/files/8455/font-kerning.png)

* _[Initial value][0]_ `auto` 
* _Applies to_ all elements. It also applies to [`::first-letter`][1] and [`::first-line`][2]. 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: auto [|][7] normal [|][7] none

    font-kerning: auto
    font-kerning: normal
    font-kerning: none
    
    font-kerning: initial
    font-kerning: inherit
    font-kerning: unset
    

### Values

**`auto`**

> This keyword defers to the browser regarding whether to use kerning. When the font size is big, font kerning may look strange and browsers will disable it. This is the default value.

**`normal`**

> This keyword requires kerning to be applied.

**`none`**

> This keyword prevents the browser from using the kerning information stored in the font.

### Examples

    p {
      font-kerning: none;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."