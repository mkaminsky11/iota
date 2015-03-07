## border-color

### Summary

The `border-color` CSS property is a shorthand for setting the color of the four sides of an element's border: [`border-top-color`][0], [`border-right-color`][1], [`border-bottom-color`][2], [`border-left-color`][3]

* _[Initial value][4]_ the concatenation of the initial values of its longhand properties:
  * `border-top-color`: `currentColor`
  * `border-right-color`: `currentColor`
  * `border-bottom-color`: `currentColor`
  * `border-left-color`: `currentColor` 
* _Applies to_ all elements. It also applies to [`::first-letter`][5]. 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as each of the properties of the shorthand:
  * `border-bottom-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`.
  * `border-left-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`.
  * `border-right-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`.
  * `border-top-color`: If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ as each of the properties of the shorthand:
  * `border-bottom-color`: yes, as a [color][9]
  * `border-left-color`: yes, as a [color][9]
  * `border-right-color`: yes, as a [color][9]
  * `border-top-color`: yes, as a [color][9] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<color>][11]{1,4}

    border-color:  _color_     _             /* one-value syntax */ 
    _border-color:  _horizontal vertical    /* two-value syntax */
    _border-color:  _top_ _vertical __bottom    /* three-value syntax */_
    border-color: _ top right bottom left  /* four-value syntax */_
    border-color:  inherit
    

### Values

**_color_**

> Is a  [`<color>`][12] denoting the color to apply to all four edges. It is used only in the one-value syntax.

**_horizontal_**

> Is a  [`<color>`][12] denoting the color to apply to all horizontal edges, that is the top and bottom edges. It is used only in the two-value syntax.

**_vertical_**

> Is a  [`<color>`][12] denoting the color to apply to all vertical edges, that is the right and left edges. It is used only in the two- and three-value syntaxes.

**_top_**

> Is a  [`<color>`][12] denoting the color to apply to the top edge. It is used only in the three- and four-value syntaxes.

**_bottom_**

> Is a  [`<color>`][12] denoting the color to apply to the bottom edge. It is used only in the three- and four-value syntaxes.

**_right_**

> Is a  [`<color>`][12] denoting the color to apply to the top edge. It is used only in the four-value syntax.

**_left_**

> Is a  [`<color>`][12] denoting the color to apply to the top edge. It is used only in the four-value syntax.

**`inherit`**

> Is a keyword indicating that all four values are inherited from their parent's element calculated value.

### Examples

### Complete border-color usage

#### HTML Content

    <div >
        <p><code>border-color: red;</code> is equivalent to</p>
        <ul><li><code>border-top-color: red;</code></li>
           <li><code>border-right-color: red;</code></li>
           <li><code>border-bottom-color: red;</code></li>
           <li><code>border-left-color: red;</code></li>
        </ul>
    </div>
    <div >
        <p><code>border-color: gold red;</code> is equivalent to</p>
        <ul><li><code>border-top-color: gold;</code></li>
           <li><code>border-right-color: red;</code></li>
           <li><code>border-bottom-color: gold;</code></li>
           <li><code>border-left-color: red;</code></li>
        </ul>
    </div>
    <div >
        <p><code>border-color: red cyan gold;</code> is equivalent to</p>
        <ul><li><code>border-top-color: red;</code></li>
            <li><code>border-right-color: cyan;</code></li>
            <li><code>border-bottom-color: gold;</code></li>
            <li><code>border-left-color: cyan;</code></li>
        </ul>
    </div>
    <div >
        <p><code>border-color: cyan black gold;</code> is equivalent to</p>
        <ul><li><code>border-top-color: red;</code></li>
            <li><code>border-right-color: cyan;</code></li>
            <li><code>border-bottom-color: black;</code></li>
            <li><code>border-left-color: gold;</code></li>
        </ul>
    </div>
    

#### CSS Content

    #justone {
        border-color: red;
    }
    #horzvert {
        border-color: gold red;
    }
    #topvertbott {
        border-color: red cyan gold;
    }
    #trbl {
        border-color: red cyan black gold;
    }
    
    /* Set width and style for all divs */
    div {
        border: solid 0.3em;
        width: auto;
        margin: 0.5em;
        padding: 0.5em;
    }
    ul {
        margin: 0;
        list-style: none;
    }
    

#### Result



[0]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-color "The border-top-color CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties border-color or border-top are more convenient and preferable."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-right-color "The border-right-color CSS property sets the color of the right border of an element. Note that in many cases the shorthand CSS properties  border-color or border-right are more convenient and preferable."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-color "The border-bottom-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-bottom are more convenient and preferable."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-color "The border-left-color CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties border-color or border-left are more convenient and preferable."
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/color
[12]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"