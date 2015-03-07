## column-fill

### Summary

The `column-fill` CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using `auto`, just take up the room the content needs.

* _[Initial value][0]_ `balance` 
* _Applies to_ multicol elements 
* _[Inherited][1]_ no 
* _Media_ `visual`, but, in continuous media, has no effect in overflow columns 
* _[Computed value][2]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][3]: auto [|][4] balance
    

    column-fill: auto
    column-fill: balance
    
    column-fill: inherit
    

### Values

**`auto`**

> Is a keyword indicating that columns are filled sequentially.

**`balance`**

> Is a keyword indicating that content is equally divided between columns.

### Examples

    .content-box {
      column-count: 4;
      column-rule: 1px solid black;
      column-fill: balance;
      height: 200px;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/computed_value
[3]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."