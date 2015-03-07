## transition-delay

### Summary

The `transition-delay` [CSS][0] property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the [transition effect][1].

A value of `0s`, or `0ms`, indicates that the property will begin to animate its transition immediately when the value changes; positive values will delay the start of the transition effect for the corresponding number of seconds. Negative values cause the transition to begin immediately, but to cause the transition to seem to begin partway through the animation effect.

You may specify multiple delays; each delay will be applied to the corresponding property as specified by the [`transition-property`][2] property, which acts as a master list. If there are fewer delays specified than in the master list, missing values are set to the initial value (`0s`). If there are more delays, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

* _[Initial value][3]_ `0s` 
* _Applies to_ all elements, [`::before`][4] and [`::after`][5] [pseudo-elements][6] 
* _[Inherited][7]_ no 
* _Media_ [`interactive`][8] 
* _[Computed value][9]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<time>][11][#][12]
    

    transition-delay: 3s
    transition-delay: 2s, 4ms
    
    transition-delay: initial
    

### Values

**`<time>`**

> Is a [`<time>`][13] denoting the amount of time to wait between a property's value changing and the start of the animation effect.

### Examples

`transition-delay: 0.5s`


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/CSS_transitions "en/CSS/CSS transitions"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/transition-property
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::before
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[6]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[7]: https://developer.mozilla.org/en/docs/CSS/inheritance
[8]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[9]: https://developer.mozilla.org/en/docs/CSS/computed_value
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/time "Possible values: a number followed by 's' or 'ms' like 3s, -2.5ms, or 0s."
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/time