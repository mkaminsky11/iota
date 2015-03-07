## column-count

### Summary

The `column-count` CSS property describes the number of columns of the element.

* _[Initial value][0]_ `auto` 
* _Applies to_ non-replaced `block` elements (except `table` elements), `table-cell` or `inline-block` elements 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ yes, as an [integer][4] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [<number>][6] [|][7] auto
    

    column-count: 3
    column-count: auto

### Values

**`auto`**

> Is a keyword indicating that the number of columns should be determined by other CSS properties, like [`column-width`][8].

**`<number>`**

> Is a strictly positive [`<integer>`][9] describing the ideal number of columns into which the content of the element will be flowed. If the [`column-width`][8] is also set to a non-**auto** value, it merely indicates the maximum allowed number of columns.

### Examples

    .content-box {
      border: 10px solid #000000;
      column-count:3;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/integer#Interpolation "Values of the <integer> CSS data type are interpolated via integer discrete steps. The calculation is done as if they were real, floating-point numbers and the discrete value is obtained using the floor function."
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/number
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/column-width "The column-width CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the column-count CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are width, column-width, column-gap, and column-rule-width."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"