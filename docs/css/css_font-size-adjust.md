## font-size-adjust

### Summary

The `font-size-adjust` CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.

This is useful since the legibility of fonts, especially at small sizes, is determined more by the size of lowercase letters than by the size of capital letters. Legibility can become an issue when the first-choice [`font-family`][0] is unavailable and its replacement has a significantly different aspect ratio (the ratio of the size of lowercase letters to the size of the font).

To use this property in a way that is compatible with browsers that do not support `font-size-adjust`, it is specified as a number that the [`font-size`][1] property is multiplied by. This means the value specified for the property should generally be the aspect ratio of the first choice font. For example, a style sheet that specifies

    font-size: 14px;  
    font-size-adjust: 0.5;
    

is really specifying that the lowercase letters of the font should be `7px` high (0.5 × 14px).

* _[Initial value][2]_ `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ yes 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as specified 
* _Animatable_ yes, as a [number][8] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: none [|][10] [<number>][11]

    font-size-adjust: none
    font-size-adjust: 3
    font-size-adjust: 10.7
    font-size-adjust: inherit
    

### Values

**`none`**

> Choose the size of the font based only on the [`font-size`][1] property.

**`<number>`**

> Choose the size of the font so that its lowercase letters (as determined by the x-height of the font) are the specified number times the [`font-size`][1].
> 
> The number specified should generally be the aspect ratio (ratio of x-height to font size) of the first choice [`font-family`][0]. This means that the first choice font, when available, will appear the same size in browsers, whether or not they support `font-size-adjust`.
> 

### Examples

[View Live Examples][12]

    p {
       font: 12px Verdana, "DejaVu Sans", sans-serif;
       font-size-adjust: 0.58;
    } 



[0]: https://developer.mozilla.org/en/docs/Web/CSS/font-family "The font-family CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a @font-face at-rule."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/font-size "The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/number#Interpolation "Values of the <number> CSS data type are interpolated as real, floating-point, numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/number
[12]: /samples/cssref/font-size-adjust.html