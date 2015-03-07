## border-image-outset

### Summary

The `border-image-outset` property describes by what amount the _border image area_ extends beyond the border box.

* _[Initial value][0]_ `0s` 
* _Applies to_ all elements, except internal table elements when [`border-collapse`][1] is `collapse`. It also applies to [`::first-letter`][2]. 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ all lengths made absolute, otherwise as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [ [<length>][7] [|][8] [<number>][9] ]{1,4}
    

    border-image-outset: _sides_ _                 /* One-value syntax   */_  e.g. border-image-outset: 30%; 
    border-image-outset: _vertical_ _horizontal_ _   /* Two-value syntax   */ _ e.g. border-image-outset: 10% 30%; 
    border-image-outset: _top_ _horizontal_ _bottom __ /* Three-value syntax */ _ e.g. border-image-outset: 30px 30% 45px; 
    border-image-outset: _top_ _right_ _bottom_ _left __ /* Four-value syntax  */ _ e.g. border-image-outset: 7px 12px 14px 5px;
    
    border-image-repeat: inherit
    

### Values

**_sides_**

> Is a [`<length>`][10] or a [`<percentage>`][11] of the amount by which the border image area extends beyond the border box in all four directions.

**_horizontal_**

> Is a [`<length>`][10] or a [`<percentage>`][11] of the amount by which the border image area extends beyond the border box in both horizontal directions (left and right).

**_vertical_**

> Is a [`<length>`][10] or a [`<percentage>`][11] of the amount by which the border image area extends beyond the border box in both vertical directions (top and bottom).

**_top_**

> Is a [`<length>`][10] or a [`<percentage>`][11] of the amount by which the border image area extends beyond the border box past its top edge.

**_bottom_**

> Is a [`<length>`][10] or a [`<percentage>`][11] of the amount by which the border image area extends beyond the border box past its bottom edge.

**_right_**

> Is a [`<length>`][10] or a [`<percentage>`][11] of the amount by which the border image area extends beyond the border box past its right edge.

**_left_**

> Is a [`<length>`][10] or a [`<percentage>`][11] of the amount by which the border image area extends beyond the border box past its left edge.

**`inherit`**

> Is a keyword indicating that all four values are inherited from each parent elements' calculated value.



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/number
[10]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"