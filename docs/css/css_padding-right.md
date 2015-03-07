## padding-right

### Summary

The `padding-right` [CSS][0] property of an element sets the padding space required on the right side of an element. The [padding area][1] is the space between the content of the element and its border. Negative values are not allowed.

* _[Initial value][2]_ `0` 
* _Applies to_ all elements except `table-row-group`, `table-header-group`, `table-footer-group`, `table-row`, `table-column-group` and `table-column` 
* _[Inherited][3]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][6] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [<length>][8] [|][9] [<percentage>][10]
    

    padding-right: 0.5em;
    padding-right: 0;
    padding-right: 2cm;
    padding-right: 10%
    
    padding-right: inherit
    

### Values

**<length\>**

> Specifies a positive fixed width. See [`<length>`][11] for details.

**<percentage\>**

> A percentage with respect to the width of the containing block.

### Examples

    .content { padding-right: 5%; }
    .sidebox { padding-right: 10px; } 
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/box_model#padding "http://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/Box_model#padding"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/CSS/percentage
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length