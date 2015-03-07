## column-rule-style

### Summary

The `column-rule-style` CSS property lets you set the style of the rule drawn between columns in multi-column layouts.

* _[Initial value][0]_ `none` 
* _Applies to_ multicol elements 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: [<br-style>][5]
    

    column-rule-style: none
    column-rule-style: hidden
    column-rule-style: dotted
    column-rule-style: dashed
    column-rule-style: solid
    column-rule-style: double
    column-rule-style: groove
    column-rule-style: ridge
    column-rule-style: inset
    column-rule-style: outset
    
    column-rule-style: inherit
    

### Values

**<br-style\> **

> Is a keyword defined by [`border-style`][6] describing the style of the rule. The styling must be interpreted as in the collapsing border model.

### Example

    #header {-moz-column-rule-style: inset;}



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/border-style