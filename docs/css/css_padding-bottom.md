## padding-bottom

### Summary

![The effect of the CSS padding-bottom property on the element box](/files/4109/padding-bottom.svg)The `padding-bottom` [CSS][0] property of an element sets the height of the padding area at the bottom of an element. The [padding area][1] is the space between the content of the element and it's border. Contrary to [`margin-bottom`][2] values, negative values of `padding-bottom` are invalid.

* _[Initial value][3]_ `0` 
* _Applies to_ all elements except `table-row-group`, `table-header-group`, `table-footer-group`, `table-row`, `table-column-group` and `table-column` 
* _[Inherited][4]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<length>][9] [|][10] [<percentage>][11]
    

    padding-bottom: 0.5em;
    padding-bottom: 0;
    padding-bottom: 2cm;
    padding-bottom: 10%
    
    padding-bottom: inherit
    

### Values

**<length\>**

> Specifies a positive fixed width. See [`<length>`][12] for details.

**<percentage\>**

> A percentage with respect to the width of the containing block.

### Examples

    .content { padding-bottom: 5%; }
    .sidebox { padding-bottom: 10px; } 
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/box_model#padding "http://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/Box_model#padding"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/CSS/percentage
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length