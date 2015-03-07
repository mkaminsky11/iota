## table-layout

### Summary

The `table-layout` CSS property defines the algorithm to be used to layout the table cells, rows, and columns.

* _[Initial value][0]_ `auto` 
* _Applies to_ table and inline-table elements 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: auto [|][5] fixed
    

    table-layout: auto
    table-layout: fixed
    
    table-layout: inherit
    

### Values

**[`auto`][6]**

> An automatic table layout algorithm is commonly used by most browsers for table layout. The width of the table and its cells depends on the content thereof.

**`fixed`**

> Table and column widths are set by the widths of `table` and `col `elements or by the width of the first row of cells. Cells in subsequent rows do not affect column widths.  
>   
> Under the "fixed" layout method, the entire table can be rendered once the first table row has been downloaded and analyzed. This can speed up rendering time over the "automatic" layout method, but subsequent cell content may not fit in the column widths provided. Any cell that has content that overflows uses the [`overflow`][7] property to determine whether to clip the overflow content.

### Examples

    .contentbox {
      table-layout: fixed;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/auto
[7]: https://developer.mozilla.org/en/docs/Web/CSS/overflow