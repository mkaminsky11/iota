## columns

### Summary

The `columns` [CSS][0] property is a shorthand property allowing to set both the [`column-width`][1] and the [`column-count`][2] properties at the same time.

* _[Initial value][3]_ the concatenation of the initial values of its longhand properties:
  * `column-width`: `auto`
  * `column-count`: `auto` 
* _Applies to_ non-replaced `block` elements (except `table` elements), `table-cell` or `inline-block` elements 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ as each of the properties of the shorthand:
  * `column-width`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `column-count`: is itself a shorthand, applies to the same elements as each of its longhand properties. 
* _Animatable_ as each of the properties of the shorthand:
  * `column-width`: yes, as a [length][7]
  * `column-count`: yes, as an [integer][8] 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][9]: [<'column-width'>][10] [||][11] [<'column-count'>][12]
    

### Values

**`<'column-width'>`**

> Is a [`<length>`][13] value giving a hint of the optimal width of the column. The actual column width may be wider (to fill the available space), or narrower (only if the available space is smaller than the specified column width). The length must be strictly positive or the declaration is invalid.

**`<'column-count'>`**

> Is a strictly positive [`<integer>`][14] describing the ideal number of columns into which the content of the element will be flowed. If the [`column-width`][1] is also set to a non-**auto** value, it merely indicates the maximum allowed number of columns.

### Examples

    .content-box {
      border: 10px solid #000000;
      columns:3;
    }



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/column-width "The column-width CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the column-count CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are width, column-width, column-gap, and column-rule-width."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/column-count "The column-count CSS property describes the number of columns of the element."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/integer#Interpolation "Values of the <integer> CSS data type are interpolated via integer discrete steps. The calculation is done as if they were real, floating-point numbers and the discrete value is obtained using the floor function."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/column-width "<length> | auto"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[12]: https://developer.mozilla.org/en/docs/CSS/column-count "<number> | auto"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"