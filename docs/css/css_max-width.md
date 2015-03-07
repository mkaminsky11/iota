## max-width

### Summary

The `max-width` CSS property is used to set the maximum width of a given element. It prevents the used value of the [`width`][0] property from becoming larger than the value specified for `max-width`.

[`max-width`][1] overrides [`width`][0], but [`min-width`][2] overrides [`max-width`][1].

* _[Initial value][3]_ `none` 
* _Applies to_ all elements but non-replaced inline elements, table rows, and row groups 
* _[Inherited][4]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ the percentage as specified or the absolute length or `none` 
* _Animatable_ yes, as a [length][7], [percentage][8] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<length>][10] [|][11] [<percentage>][12] [|][11] none [|][11] max-content [|][11] min-content [|][11] fit-content [|][11] fill-available
    

    max-width: 3.5em
    max-width: 75%
    max-width: none
    max-width: max-content
    max-width: min-content
    max-width: fit-content
    max-width: fill-available
    
    max-width: inherit
    

### Values

**`none`**

> The width has no maximum value.

**`<length>`**

> See [`<length>`][13] for possible units.

**`<percentage>`**

> Specified as a [`<percentage>`][14] of containing block's width.

**`max-content`__**

> The intrinsic preferred width.

**`min-content`__**

> The intrinsic minimum width.

**`fill-available`__**

> The containing block width minus horizontal margin, border, and padding. Some browsers implement an ancient name for this keyword, `available`.

**`fit-content`__**

> The same as `max-content.`

### Examples

In this example, the "child" <div\> has its width property set so that it will use the full width of the parent <div\> but the max-width property constrains its width to 150px.

    <div >
        <div >
            The Mozilla community produces a lot of great software.
        </div>
    </div>
    

    #parent { width: 300px; }
    
    #child  { background: gold;
              width: 100%;
              max-width: 150px;
            }
    

The fit-content value can be used to set the width of an element based on the intrinsic size required by its content:

    #parent { background: lightblue;
              width: 300px; }
    
    #child  { background: gold;
              width: 100%;
              max-width: -moz-fit-content;
              max-width: -webkit-fit-content;
            }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/width "The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/max-width "The max-width CSS property is used to set the maximum width of a given element. It prevents the used value of the width property from becoming larger than the value specified for max-width."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/min-width "The min-width CSS property is used to set the minimum width of a given element. It prevents the used value of the width property from becoming smaller than the value specified for min-width."
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