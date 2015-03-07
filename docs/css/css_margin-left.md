## margin-left

### Summary

![Area on which CSS margin-left apply](/files/4039/margin-left.svg)The `margin-left` [CSS][0] property of an element sets the margin space required on the left side of a [box][1] associated with an element. A negative value is also allowed.

The vertical margins of two adjacent boxes may fuse. This is called [_margin collapsing_][2].

In the rare cases where width is overconstrained (that is when all of `width`, `margin-left`, `border`, `padding`, the content area and `margin-right` are defined), `margin-left` is ignored, and will have the same calculated value as if the `auto` value was specified.

* _[Initial value][3]_ `0` 
* _Applies to_ all elements except elements with table [`display`][4] types other than `table-caption`, `table` and `inline-table` 
* _[Inherited][5]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][8] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<length>][10] [|][11] [<percentage>][12] [|][11] auto

    margin-left: 10px;        /* An absolute length */
    margin-left: 1em;         /* A length relative to the text size */
    margin-left: 5%;          /* A margin relative to the nearest block container's width */
    margin-left: auto;
    
    margin-left: inherit;
    

### Values

**`<length>`**

> Is a [`<length>`][13] specifying a fixed width: it can be absolute width, e.g. in `px`, or a width relative to the text size, e.g. in `em`, or relative to the viewport size, e.g. in `vh`.

**`<percentage>`**

> Is a [`<percentage>`][14] relative to the _width_ of the nearest containing block.

**`auto`**

> Is a keyword indicating that the left margin receives a share of the remaining space, defined mainly by the current layout mode.. If there several `auto` values for `margin-left` or `margin-right`, the calculated space is evenly distributed between all the `auto` values. This table summarizes the different cases:  
> Value of [`display`][4]
> Value of [`float`][15]
> Value of [`position`][16]
> Computed value of `auto`
> Comment
> 
> `inline`, `inline-block`, `inline-table`
> _any_
> `static` or `relative`
> `0`
> Inline layout mode
> 
> `block`, `inline`, `inline-block`, `block`, `table`, `inline-table`, `list-item`, `table-caption`
> _any_
> `static` or `relative`
> `0`, except if both `margin-left` and `margin-right` are set to `auto`. In this case, it is set to the value centering the element inside its parent.
> Block layout mode
> 
> `block`, `inline`, `inline-block`, `block`, `table`, `inline-table`, `list-item`, `table-caption`
> `left` or `right`
> `static` or `relative`
> `0`
> Block layout mode (floating element)
> 
> _any _`table-*`_, except _`table-caption`
> _any_
> _any_
> `0`
> Internal `table-*` elements don't have margins, use [`border-spacing`][17] instead
> 
> _any, except `flex`,_ `inline-flex`_, or _`table-*`
> _any_
> _`fixed`_ or `absolute`
> `0`, except if both `margin-left` and `margin-right` are set to `auto`. In this case, it is set to the value centering the border area inside the available `width`, if fixed.
> Absolutely positioned layout mode
> 
> `flex`, `inline-flex`
> _any_
> _any_
> `0`, except if there is any positive horizontal free space. In this case, it is evenly distributed to all horizontal `auto` margins.
> Flexbox layout mode
> 
> 

### Examples

    .content { margin-left:   5%; }
    .sidebox { margin-left: 10px; }
    .logo    { margin-left: -5px; }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/box_model "https://developer.mozilla.org/en/docs/CSS/box_model"
[2]: https://developer.mozilla.org/en/docs/CSS/margin_collapsing "https://developer.mozilla.org/en/docs/CSS/margin_collapsing"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/display
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[12]: https://developer.mozilla.org/en/docs/CSS/percentage
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[15]: https://developer.mozilla.org/en/docs/Web/CSS/float
[16]: https://developer.mozilla.org/en/docs/Web/CSS/position
[17]: https://developer.mozilla.org/en/docs/Web/CSS/border-spacing