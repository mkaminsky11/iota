## column-rule-color

### Summary

The `column-rule-color` CSS property lets you set the color of the rule drawn between columns in multi-column layouts.

* _[Initial value][0]_ `currentColor` 
* _Applies to_ multicol elements 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ yes, as a [color][4] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [<color>][6]
    

    column-rule-color: red
    column-rule-color: rgb(192, 56, 78)
    column-rule-color: transparent
    column-rule-color: hsla(0, 100%, 50%, 0.6)
    
    column-rule-color: inherit
    

### Values

**<color\>**

> Is a [`<color>`][7] value representing the color of the rule separating columns.

### Example

    #header { column-rule-color: blue; }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/color
[7]: https://developer.mozilla.org/en/docs/Web/CSS/color_value