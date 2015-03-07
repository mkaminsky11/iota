## column-width

### Summary

The `column-width` CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the [`column-count`][0] CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are [`width`][1], [`column-width`][2], [`column-gap`][3], and [`column-rule-width`][4].

* _[Initial value][5]_ `auto` 
* _Applies to_ non-replaced `block` elements (except `table` elements), `table-cell` or `inline-block` elements 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ the absolute length, zero or larger 
* _Animatable_ yes, as a [length][9] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<length>][11] [|][12] auto
    

    column-width: auto
    column-width: 6px     /* Different <length> values */
    column-width: 25em
    column-width: 0.3vw
    
    column-width: inherit
    

### Values

**`<length>`**

> Is a [`<length>`][13] value giving a hint of the optimal width of the column. The actual column width may be wider (to fill the available space), or narrower (only if the available space is smaller than the specified column width). The length must be strictly positive or the declaration is invalid.

**`auto`**

> Is a keyword indicating that the width of the column should be determined by other CSS properties, like [`column-count`][0].

### Examples

    .content-box {
      border: 10px solid #000000;
      column-width: 300px;
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/column-count "The column-count CSS property describes the number of columns of the element."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/width "The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/column-width "The column-width CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the column-count CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are width, column-width, column-gap, and column-rule-width."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/column-gap "The column-gap CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/column-rule-width "The column-rule-width CSS property lets you set the width of the rule drawn between columns in multi-column layouts."
[5]: https://developer.mozilla.org/en/docs/CSS/initial_value
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"