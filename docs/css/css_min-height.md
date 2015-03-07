## min-height

### Summary

The `min-height` CSS property is used to set the minimum height of a given element. It prevents the used value of the [`height`][0] property from becoming smaller than the value specified for `min-height`.

The value of [`min-height`][1] overrides both [`max-height`][2] and [`height`][0].

* _[Initial value][3]_ `0` 
* _Applies to_ all elements but non-replaced inline elements, table columns, and column groups 
* _[Inherited][4]_ no 
* _Percentages_ The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the percentage value is treated as `0`. 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][7], [percentage][8] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<length>][10] [|][11] [<percentage>][12] [|][11] auto [|][11] max-content [|][11] min-content [|][11] fit-content [|][11] fill-available
    

    min-height: 3.5em
    min-height: 10%
    min-height: max-content
    min-height: min-content
    min-height: fit-content
    min-height: fill-available
    
    min-height: inherit
    

### Values

**`<length>`**

> The fixed minimum height. See [`<length>`][13] for possible units. Negative values make the declaration invalid.

**`<percentage>`**

> The fixed minimum height expressed as a [`<percentage>`][14] of containing block's height. Negative values make the declaration invalid.

**`max-content` __**

> The intrinsic preferred height.

**`min-content` __**

> The intrinsic minimum height.

**`fill-available`__**

> The containing block height minus horizontal margin, border and padding. Some browsers implement an ancient name for this keyword, `available`.

**`fit-content` __**

> According CSS3 Box, this is a synonym of `min-content.` CSS3 Sizing defines a more complex algorithm, but no browser implements it, even in an experimental way.

### Examples

    table { min-height: 75%; }
    
    form { min-height: 0; }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/height "The height CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/min-height "The min-height CSS property is used to set the minimum height of a given element. It prevents the used value of the height property from becoming smaller than the value specified for min-height."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/max-height "The max-height CSS property is used to set the maximum height of a given element. It prevents the used value of the height property from becoming larger than the value specified for max-height."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"