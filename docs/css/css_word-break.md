## word-break

### Summary

The `word-break` CSS property is used to specify how (or if) to break lines within words.

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements 
* _[Inherited][1]_ yes 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: normal [|][5] break-all [|][5] keep-all
    

    word-break: normal 
    word-break: break-all 
    word-break: keep-all
    
    word-break: inherit
    

### Value

**`normal`**

> Use the default line break rule.

**`break-all`**

> Word breaks may be inserted between any character for non-CJK (Chinese/Japanese/Korean) text.

**`keep-all`**

> Don't allow word breaks for CJK text.  Non-CJK text behavior is same as `normal`.

### Examples

**FIXME:** __


[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."