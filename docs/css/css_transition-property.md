## transition-property

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `transition-property` CSS property is used to specify the names of CSS properties to which a [transition effect][1] should be applied.

**Note:** The set of properties that can be animated is subject to change; as such, you should avoid including any properties in the list that don't currently animate, because someday they might, causing unexpected results.

If you specify a shorthand property (for example, [`background`][2], all of its longhand sub-properties that can be animated will be.

* _[Initial value][3]_ `all` 
* _Applies to_ all elements, [`::before`][4] and [`::after`][5] [pseudo-elements][6] 
* _[Inherited][7]_ no 
* _Media_ [`visual`][8] 
* _[Computed value][9]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: none [|][11] [<single-transition-property>][12][#][13]  [ ‘,’ [<single-transition-property>][12][#][13] ][*][14]  
    
    

    transition-property: none
    transition-property: all
    transition-property: test_05
    transition-property: -specific
    transition-property: sliding-vertically
    
    transition-property: test1
    transition-property: test1, animation4
    transition-property: all, height, all
    transition-property: all, -moz-specific, sliding
    
    transition-property: inherit
    

### Values

**`none`**

> No properties will transition.

**`all`**

> All properties that can have an animated transition will do so.

**`IDENT`**

> A string identifying the property to which a transition effect should be applied when its value changes. This identifier is composed by case-insensitive letter `a` to `z`, numbers `0` to `9`, an underscore (`_`) or a dash(`-`). The first non-dash character must be a letter (that is no number at the beginning of it, even preceded by a dash). Also two dashes are forbidden at the beginning of the identifier.

### Examples

There are several examples of CSS transitions included in the main [CSS transitions][1] article.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/Guide/CSS/Using_CSS_transitions
[2]: https://developer.mozilla.org/en/docs/Web/CSS/background
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::before
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[6]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[7]: https://developer.mozilla.org/en/docs/CSS/inheritance
[8]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[9]: https://developer.mozilla.org/en/docs/CSS/computed_value
[10]: https://developer.mozilla.org/en/docs/Web/CSS/Value_definition_syntax
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-transition-property "all | IDENT"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[14]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Asterisk_(*) "Asterisk multiplier: the previous entity may appear 0, 1 or several times."