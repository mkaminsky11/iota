## border-right-color

### Summary

The `border-right-color` CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties  [`border-color`][0] or [`border-right`][1] are more convenient and preferable.

* _[Initial value][2]_ `currentColor` 
* _Applies to_ all elements 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ yes, as a [color][6] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [<color>][8]
    

    border-right-color: red
    border-right-color: rgb(255, 128, 0)
    border-right-color: hsla(100%, 50%, 25%, 0.75)
    border-right-color: #ffbb00
    border-right-color: currentColor
    border-right-color: transparent
    
    border-right-color: inherit
    

### Values

**`<color`\>**

> Is a [`<color>`][9] CSS value describing the color of the right border.

**`inherit`**

> Is a keyword denoting the color of the bottom border of the parent's element (which may be different from the `border-right-color` default value)

### Examples

### A simple div with a border

#### HTML Content

    <div >
        <p>This is a box with a border around it.
           Note which side of the box is
           <span >red</span>.</p>
    </div>

#### CSS Content

    .mybox {
        border: solid 0.3em gold;
        border-right-color: red;
        width: auto;
    }
    .redtext {
        color: red;
    }

#### Result



[0]: https://developer.mozilla.org/en/docs/Web/CSS/border-color
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-right
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/color
[9]: https://developer.mozilla.org/en/docs/Web/CSS/color_value