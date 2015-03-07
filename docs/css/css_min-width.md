## min-width

### Summary

The `min-width` CSS property is used to set the minimum width of a given element. It prevents the used value of the [`width`][0] property from becoming smaller than the value specified for `min-width`.

The value of `min-width `overrides both [`max-width`][1] and [`width`][0].

* _[Initial value][2]_ `0` 
* _Applies to_ all elements but non-replaced inline elements, table rows, and row groups 
* _[Inherited][3]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][6], [percentage][7] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<length>][9] [|][10] [<percentage>][11] [|][10] auto [|][10] max-content [|][10] min-content [|][10] fit-content [|][10] fill-available

    min-width: 3.5em
    min-width: 10%
    min-width: max-content
    min-width: min-content
    min-width: fit-content
    min-width: fill-available
    
    min-width: inherit
    

### Values

**`<length>`**

> The fixed minimum width. See [`<length>`][12] for possible units. Negative values make the declaration invalid.

**`<percentage>`**

> The fixed minimum width expressed as a [`<percentage>`][13] of containing block's width. Negative values make the declaration invalid.

**`auto`**

> The default minimum size for flex items, providing a more reasonable default than 0 for other layouts.

**`max-content` __**

> The intrinsic preferred width.

**`min-content` __**

> The intrinsic minimum width.

**`fill-available`__**

> The containing block width minus horizontal margin, border and padding. Some browsers implement an ancient name for this keyword, `available`.

**`fit-content` __**

> Defined as `min(max-content, max(min-content, fill-available)`.

### Examples

    table { min-width: 75%; }
    
    form { min-width: 0; }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/width "The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/max-width "The max-width CSS property is used to set the maximum width of a given element. It prevents the used value of the width property from becoming larger than the value specified for max-width."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"