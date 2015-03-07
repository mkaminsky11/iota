## column-span

### Summary

The `column-span` [CSS][0] property makes it possible for an element to span across all columns when its value is set to `all`. An element that spans more than one column is called a **spanning element**.

* _[Initial value][1]_ `none` 
* _Applies to_ in-flow block-level elements 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: none [|][6] all
    

    column-span: none
    column-span: all
    
    column-span: inherit
    

### Values

**`none`**

> The element does not span multiple columns.

**`all`**

> The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appears. The element establishes a new block formatting context.

### Examples

    h1, h2 {
      column-span: all;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "https://developer.mozilla.org/en/docs/CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."