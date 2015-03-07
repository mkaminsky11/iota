## border-width

### Summary

The `border-width` CSS property sets the width of the border of a box. Using the shorthand property [`border`][0] is often more convenient.

* _[Initial value][1]_ the concatenation of the initial values of its longhand properties:
  * `border-top-width`: `medium`
  * `border-right-width`: `medium`
  * `border-bottom-width`: `medium`
  * `border-left-width`: `medium` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2]. 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as each of the properties of the shorthand:
  * `border-bottom-width`: the absolute length or `0` if [`border-bottom-style`][6] is `none` or `hidden`
  * `border-left-width`: the absolute length or `0` if [`border-left-style`][7] is `none` or `hidden`
  * `border-right-width`: the absolute length or `0` if [`border-right-style`][8] is `none` or `hidden`
  * `border-top-width`: the absolute length or `0` if [`border-top-style`][9] is `none` or `hidden` 
* _Animatable_ as each of the properties of the shorthand:
  * `border-bottom-width`: yes, as a [length][10]
  * `border-left-width`: yes, as a [length][10]
  * `border-right-width`: yes, as a [length][10]
  * `border-top-width`: yes, as a [length][10] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]: [<br-width>][12]{1,4}
    

    border-width: _width_ _                 /* One-value syntax */_
    border-width: _horizontal_ _vertical_ _   /* Two-value syntax */_
    border-width: _top_ _horizontal bottom __   /* Three-value syntax */_
    border-width: _top_ _right_ _bottom_ _left __ /* Four-value syntax */_
    
    border-width: inherit
    

### Values

**`<br-width>`**

> Is either a non-negative explicit [`<length>`][13] value or a keyword denoting the thickness of the bottom border. The keyword must be one of the following values:
> `thin`
> 
> A thin border
> 
> `medium`
> 
> A medium border
> 
> `thick`
> 
> A thick border
> 
> The specification doesn't precisely define the thickness of each of the keywords, which is therefore implementation specific. Nevertheless, it requests that the thickness does follow the `thin ≤ medium ≤ thick` inequality and that the values are constant on a single document.

`inherit`

> Is a keyword indicating that all four values are inherited from their parent's element calculated value.

### Examples

### A mix of values and lengths

#### HTML

    <p >
        one value: 6px wide border on all 4 sides</p>
    <p >
        two different values: 2px wide top and bottom border, 10px wide right and left border</p>
    <p >
        three different values: 0.3em top, 9px bottom, and zero width right and left</p>
    <p >
        four different values: "thin" top, "medium" right, "thick" bottom, and 1em right</p>

#### CSS

    #sval {
        border: ridge #ccc;
        border-width: 6px;
    }
    #bival {
        border: solid red;
        border-width: 2px 10px;
    }
    #treval {
        border: dotted orange;
        border-width: 0.3em 0 9px;
    }
    #fourval {
        border: solid lightgreen;
        border-width: thin medium thick 1em;
    }
    p {
        width: auto;
        margin: 0.25em;
        padding: 0.25em;
    }

#### Result



[0]: https://developer.mozilla.org/en/docs/Web/CSS/border "The border CSS property is a shorthand property for setting the individual border property values in a single place in the style sheet. border can be used to set the values for one or more of: border-width, border-style, border-color."
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style "The border-bottom-style CSS property sets the line style of the bottom border of a box."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/border-left-style "The border-left-style CSS property sets the line style of the left border of a box."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/border-right-style "The border-right-style CSS property sets the line style of the right border of a box."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/border-top-style "The border-top-style CSS property sets the line style of the top border of a box."
[10]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-width "<length> | thin | medium | thick"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"