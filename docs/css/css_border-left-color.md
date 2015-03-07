## border-left-color

### Summary

The `border-left-color` CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties [`border-color`][0] or [`border-left`][1] are more convenient and preferable.

* _[Initial value][2]_ `currentColor` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3]. 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ yes, as a [color][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<color>][9]
    

    border-left-color: red
    border-left-color: rgb(255, 255, 0)
    border-left-color: hsla(100%, 50%, 25%, 0.75)
    border-left-color: transparent
    border-left-color: #ffbb00
    border-left-color: currentColor
    
    border-left-color: inherit
    

### Values

**`<color>`**

> Is a [`<color>`][10] CSS value describing the color of the left border.

**`inherit`**

> Is a keyword denoting the color of the bottom border of the parent's element (which may be different from the `border-left-color` default value)

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
        border-left-color: red;
        width: auto;
    }
    .redtext {
        color: red;
    }

#### Result



[0]: https://developer.mozilla.org/en/docs/Web/CSS/border-color "The border-color CSS property is a shorthand for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-left "The border-left CSS property is a shorthand that sets the values of border-left-color, border-left-style, and border-left-width. These properties describe the left border of elements."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/color_value
[10]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"