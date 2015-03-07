## transition-timing-function

### Summary

The [CSS][0] `transition-timing-function` property is used to describe how the intermediate values of the CSS properties being affected by a [transition effect][1] are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.

This acceleration curve is defined using one [`<timing-function>`][2] for each property to be transitioned. 

You may specify multiple timing functions; each one will be applied to the corresponding property as specified by the [`transition-property`][3] property, which acts as a master list. If there are fewer functions specified than in the master list, missing values are set to the initial value (`ease`). If there are more timing functions, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

* _[Initial value][4]_ `ease` 
* _Applies to_ all elements, [`::before`][5] and [`::after`][6] [pseudo-elements][7] 
* _[Inherited][8]_ no 
* _Media_ [`interactive`][9] 
* _[Computed value][10]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]: [<timing-function>][12][#][13]
    

    transition-timing-function: ease
    transition-timing-function: ease-in
    transition-timing-function: ease-out
    transition-timing-function: ease-in-out
    transition-timing-function: linear
    transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1)
    transition-timing-function: step-start
    transition-timing-function: step-end
    transition-timing-function: steps(4, end)
    
    transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1)
    
    transition-timing-function: inherit
    

### Values

**`<timing-function>`**

> Each [`<timing-function>`][2] represents the timing function to link to the corresponding property to transition, as defined in [`transition-property`][3].

### Examples

`transition-timing-function: ease`


[0]: https://developer.mozilla.org/en/docs/CSS "https://developer.mozilla.org/en/docs/CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/Tutorials/Using_CSS_transitions "en/CSS/CSS transitions"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/timing-function
[3]: https://developer.mozilla.org/en/docs/Web/CSS/transition-property
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::before
[6]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[7]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[8]: https://developer.mozilla.org/en/docs/CSS/inheritance
[9]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[10]: https://developer.mozilla.org/en/docs/CSS/computed_value
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/CSS/timing-function "Possible values: cubic-bezier(), steps(), linear, ease, ease-in, ease-out, east-in-out, step-start-step-end"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"