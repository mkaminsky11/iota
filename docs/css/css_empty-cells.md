## empty-cells

### Summary

The `empty-cells` CSS property specifies how user agents should render borders and backgrounds around cells that have no visible content.

* _[Initial value][0]_ `show` 
* _Applies to_ table-cell elements 
* _[Inherited][1]_ yes 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: show [|][5] hide
    

    empty-cells: show
    empty-cells: hide
    
    empty-cells: inherit

### Values

**`show`**

> Is a keyword indicating that borders and backgrounds should be drawn like in normal cells.

**`hide`**

> Is a keyword indicating that no borders or backgrounds should be drawn.

### Examples

    .contentbox td {
      empty-cells: show;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."