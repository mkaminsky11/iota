## margin-right

### Summary

![The effect of the CSS margin-right property on the element box](/files/4041/margin-right.svg)The `margin-right` [CSS][0] property of an element sets the margin space required on the right side of an element. A negative value is also allowed.

The vertical margins of two adjacent boxes may fuse. This is called [_margin collapsing_][1].

* _[Initial value][2]_ `0` 
* _Applies to_ all elements except elements with table [`display`][3] types other than `table-caption`, `table` and `inline-table`. It also applies to [`::first-letter`][4]. 
* _[Inherited][5]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][8] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<length>][10] [|][11] [<percentage>][12] [|][11] auto

    margin-right: 20px;        /* An absolute length */
    margin-right: 1em;         /* A length relative to the text size */
    margin-right: 5%;          /* A margin relative to the nearest block container's width */
    margin-right: auto;
    
    margin-right: inherit;
    

### Values

**`<length>`**

> Is a [`<length>`][13] specifying a fixed width: it can be absolute width, e.g. in `px`, or a width relative to the text size, e.g. in `em`, or relative to the viewport size, e.g. in `vh`.

**`<percentage>`**

> Is a [`<percentage>`][14] relative to the _width_ of the nearest containing block.

**`auto`**

> Is a keyword indicating that the right margin receives a share of the remaining space, defined mainly by the current layout mode.. If there several `auto` values for `margin-left` or `margin-right`, the calculated space is evenly distributed between all the `auto` values. This table summarizes the different cases:
> Value of [`display`][3]
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

    .content { margin-right: 5%; }
    .sidebox { margin-right: 10px; }
    .logo    { margin-right: -5px; }
    



[0]: mailto:setiawan345@rocketmail.com?subject=%5Berrkk%5D&body=terrreeh "CSS"
[1]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/CSS/margin_collapsing "https://developer.mozilla.org/en/docs/CSS/margin_collapsing"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/display "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[13]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/float "The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it. A floating element is one where the computed value of float is not none."
[16]: https://developer.mozilla.org/en/docs/Web/CSS/position "The position CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects."
[17]: https://developer.mozilla.org/en/docs/Web/CSS/border-spacing "The border-spacing CSS property specifies the distance between the borders of adjacent cells (only for the separated borders model). This is equivalent to the cellspacing attribute in presentational HTML, but an optional second value can be used to set different horizontal and vertical spacing."