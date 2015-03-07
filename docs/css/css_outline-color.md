## outline-color

### Summary

The `outline-color` CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.

* _[Initial value][0]_ `invert`, for browsers supporting it, `currentColor` for the other 
* _Applies to_ all elements 
* _[Inherited][1]_ no 
* _Media_ [`visual, interactive`][2] 
* _[Computed value][3]_ For the keyword `invert`, the computed value is `invert`. For the color value, if the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The transparent keyword maps to `rgb(0,0,0)`. 
* _Animatable_ yes, as a [color][4] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [<color>][6] [|][7] invert
    

    outline-color: invert
    outline-color: red
    
    outline-color: inherit
    

### Values

**`<color>`**

> See [`<color>`][8] for the various color keywords and notations.

**`invert`**

> To ensure the outline is visible, performs a color inversion of the background. This makes the focus border more salient, regardless of the color in the background. Note that browsers are not required to support it. If not, they just consider the statement as invalid

### Example

### HTML

    <p >My outline is blue, da ba dee.</p>

### CSS

    .example {
      /* first need to set "outline" */
      outline: 2px solid;
      /* make the outline blue */
      outline-color: #0000FF;
    }

### Live:



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/color_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"