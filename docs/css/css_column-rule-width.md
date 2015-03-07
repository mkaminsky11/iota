## column-rule-width

### Summary

The `column-rule-width` CSS property lets you set the width of the rule drawn between columns in multi-column layouts.

* _[Initial value][0]_ `medium` 
* _Applies to_ multicol elements 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ an absolute length; `0` if the column rule style is `none` or `hidden` 
* _Animatable_ yes, as a [length][4] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [<br-width>][6]
    

    column-rule-width: thin    /* Keyword values */
    column-rule-width: medium
    column-rule-width: thick
    column-rule-width: 1px     /* Length values */
    column-rule-width: 2.5em
    
    column-rule-width: inherit
    

### Values

**<br-width\> **

> Is a [`<length>`][7] or one of the `thin`, `medium` or `thick` keyword describing the width of the rule separating two columns.

### Example

    #header {column-rule-width: thick;}
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length