## border-image-width

### Summary

The `border-image-width` CSS property defines the width of the border. If specified, it overrides the [`border-width`][0] property.

* _[Initial value][1]_ `1` 
* _Applies to_ all elements, except table elements when [`border-collapse`][2] is `collapse`. It also applies to [`::first-letter`][3]. 
* _[Inherited][4]_ no 
* _Percentages_ refer to the width or height of the border image area 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ all lengths made absolute, otherwise as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [ [<length>][8] [|][9] [<percentage>][10] [|][9] [<number>][11] [|][9] auto ]{1,4} 
    

    border-image-width: _all_                    _    /* One-value syntax */_       E.g. border-image-width: 3;
    border-image-width: _vertical horizontal_        _/* Two-value syntax */       _E.g. border-image-width: 2em 3em;
    border-image-width: _top horizontal bottom   __   /* Three-value syntax */     _E.g. border-image-width: 5% 15% 10%;
    border-image-width: _top_ _right_ _bottom_ _left __     /* Four-value syntax */      _E.g. border-image-width: 5% 2em 10% auto;
    
    border-image-width: inherit
    

where:

**_width_**

> Is a value denoting the width of the image used as a border to apply to all four edges. It is used only in the one-value syntax.

**_vertical_**

> Is a value denoting the width of the image used as a border to apply to all vertical edges, that is the top and bottom edges. It is used only in the two-value syntax.

**_horizontal_**

> Is a value denoting the width of the image used as a border to apply to all horizontal edges, that is the right and left edges. It is used only in the two- and three-value syntaxes.

**_top_**

> Is a value denoting the width of the image used as a border to apply to the top edge. It is used only in the three- and four-value syntaxes.

**_bottom_**

> Is a value denoting the width of the image used as a border to apply to the bottom edge. It is used only in the three- and four-value syntaxes.

**_right_**

> Is a value denoting the width of the image used as a border to apply to the right edge. It is used only in the four-value syntax.

**_left_**

> Is a value denoting the width of the image used as a border to apply to the left edge. It is used only in the four-value syntax.

**`inherit`**

> Is a keyword indicating that all four values are inherited from their parent's element calculated value.

### Values

**`<length>`**

> Represents the width of the border. It can be an absolute or relative length. This length must not be negative.

**`<percentage>`**

> Represents the width of the border as a percentage of the element. The percentage must not be negative.

**`<number>`**

> Represents a multiple of the computed value of the element's [`border-width`][0] property to be used as the border width. The number must not be negative.

**`auto`**

> Indicates that the width, or height, of the border must be the intrinsic size of that dimension.



[0]: https://developer.mozilla.org/en/docs/Web/CSS/border-width "The border-width CSS property sets the width of the border of a box. Using the shorthand property border is often more convenient."
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[11]: https://developer.mozilla.org/en/docs/Web/CSS/number