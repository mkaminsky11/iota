## vertical-align

### Summary

The `vertical-align` [CSS][0] property specifies the vertical alignment of an inline or table-cell box.

* _[Initial value][1]_ `baseline` 
* _Applies to_ inline-level and table-cell elements. It also applies to [`::first-letter`][2] and [`::first-line`][3]. 
* _[Inherited][4]_ no 
* _Percentages_ refer to the line-height of the element itself 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ for percentage and length values, the absolute length, otherwise the keyword as specified 
* _Animatable_ yes, as a [length][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: baseline [|][9] sub [|][9] super [|][9] text-top [|][9] text-bottom [|][9] middle [|][9] top [|][9] bottom [|][9] [<percentage>][10] [|][9] [<length>][11]

    vertical-align: baseline     /* keyword values */
    vertical-align: sub
    vertical-align: super
    vertical-align: text-top
    vertical-align: text-bottom
    vertical-align: middle
    vertical-align: top
    vertical-align: bottom
    vertical-align: 10em          /* <length> values */
    vertical-align: 4px
    vertical-align: 20%           /* <percentage> values */
    
    vertical-align: inherit

### Values (for inline elements)

_Most of the values vertically align the element relative to its parent element:_

**`baseline`**

> Aligns the baseline of the element with the baseline of its parent. The baseline of some [replaced elements][12], like [`<textarea>`][13], is not specified by the HTML specification, meaning that their behavior with this keyword may change from one browser to the other.

**`sub`**

> Aligns the baseline of the element with the subscript-baseline of its parent.

**`super`**

> Aligns the baseline of the element with the superscript-baseline of its parent.

**`text-top`**

> Aligns the top of the element with the top of the parent element's font.

**`text-bottom`**

> Aligns the bottom of the element with the bottom of the parent element's font.

**`middle`**

> Aligns the middle of the element with the baseline of its parent.

**`[<length>][14]`**

> Aligns the baseline of the element at the given length above the baseline of its parent.

**`<percentage>`**

> Like <length\> values, with the percentage being a percent of the [`line-height`][15] property.

(Negative values are allowed for <length\> and <percentage\>.)

_The following two values vertically align the element relative to the entire line rather than relative to its parent:_

**`top`**

> Align the top of the element and its descendants with the top of the entire line.

**`bottom`**

> Align the bottom of the element and its descendants with the bottom of the entire line.

For elements that do not have a baseline, the bottom margin edge is used instead.

### Values (for table cells)

**`baseline` (and `sub`, `super`, `text-top`, `text-bottom`, `<length>`, and `<percentage>`)**

> Align the baseline of the cell with the baseline of all other cells in the row that are baseline-aligned.

**`top`**

> Align the top padding edge of the cell with the top of the row.

**`middle`**

> Center the padding box of the cell within the row.

**`bottom`**

> Align the bottom padding edge of the cell with the bottom of the row.

Negative values are allowed.

### Examples

    img {
    	vertical-align: bottom;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[12]: https://developer.mozilla.org/en/docs/CSS/Replaced_element "CSS/Replaced_element"
[13]: https://developer.mozilla.org/en/docs/Web/HTML/Element/textarea "The HTML <textarea> element represents a multi-line plain-text editing control."
[14]: https://developer.mozilla.org/en/docs/CSS/length "CSS/length"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/line-height "On block level elements, the line-height CSS property specifies the minimal height of line boxes within the element."