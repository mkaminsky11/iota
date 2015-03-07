## page-break-inside

### Summary

The `page-break-inside` CSS property adjusts page breaks _inside_ the current element.

* _[Initial value][0]_ `auto` 
* _Applies to_ block-level elements in the normal flow of the root element. UA may also apply it to other elements like table-row elements. 
* _[Inherited][1]_ no 
* _Media_ [`visual, paged`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: auto [|][5] avoid
    

    page-break-inside: auto
    page-break-inside: avoid
    
    page-break-inside: inherit
    

### Values

**`auto`**

> Initial value. Automatic page breaks (neither forced nor forbidden).

**`avoid`**

> Avoid page breaks inside the element.

### Examples

    /* avoid page break inside the paragraph */
    p { page-break-inside: avoid;  } 
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."