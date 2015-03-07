## shape-margin

### Summary

The `shape-margin` [CSS][0] property adds a margin to `[shape-outside][1].`

* _[Initial value][2]_ `0` 
* _Applies to_ floats 
* _[Inherited][3]_ no 
* _Percentages_ refer to the width of the element's containing block 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ yes, as a [length][6], [percentage][7] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<length>][9] [|][10] [<percentage>][11]

    shape-outside: circle()
    shape-margin: 10px
    
    shape-margin: [initial][12]
    shape-margin: [inherit][13]
    shape-margin: [unset][14]
    

### Values

**<length\>**

> Sets the margin of the shape to the [`<length>`][15] .

**<percentage\>**

> Sets the margin of the shape to a percentage of the width of the element's containing block.

### Examples

See \[COMING SOON\] for examples.


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/shape-outside
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/CSS/percentage
[12]: https://developer.mozilla.org/en/docs/Web/CSS/initial
[13]: https://developer.mozilla.org/en/docs/Web/CSS/inherit
[14]: https://developer.mozilla.org/en/docs/Web/CSS/unset
[15]: https://developer.mozilla.org/en/docs/Web/CSS/length