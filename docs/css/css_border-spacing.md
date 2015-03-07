## border-spacing

### Summary

The `border-spacing` CSS property specifies the distance between the borders of adjacent cells (only for the [separated borders model][0]). This is equivalent to the `cellspacing` attribute in presentational HTML, but an optional second value can be used to set different horizontal and vertical spacing.

The `border-spacing` value is also used along the outside edge of the table, where the distance between the table's border and the cells in the first/last column or row is the sum of the relevant (horizontal or vertical) border-spacing and the relevant (top, right, bottom, or left) padding on the table.

This property applies only when [`border-collapse`][1] is `separate`.

* _[Initial value][2]_ `0` 
* _Applies to_ table and inline-table elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ two absolute lengths 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [<length>][7] [<length>][7][?][8]
    

    border-spacing: _length_              _/* one-value syntax */_
    border-spacing: _horizontal vertical_ _/* two-value syntax */_
    
    border-spacing: inherit 
    

### Values

**_length_**

> Is a [`<length>`][9] value that describes both the horizontal and vertical spacings between cells. It is used only in the one-value syntax.

**_horizontal_**

> Is a [`<length>`][9] value that describes the horizontal spacing between cells, that is the space between cells in adjacent columns. It is used only in the two-value syntax.

**_vertical_**

> Is a [`<length>`][9] value that describes the vertical spacing between cells, that is the space between cells in adjacent rows. It is used only in the two-value syntax.

**`inherit`**

> Is a keyword indicating that the calculated value of `border-spacing` of the parent's element must be used.

### Examples

[View Live Examples][10]

    table { border-spacing: 10px 5px; }
    



[0]: https://developer.mozilla.org/en/CSS/border-collapse "en/CSS/border-collapse"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[10]: /samples/cssref/border-spacing.html