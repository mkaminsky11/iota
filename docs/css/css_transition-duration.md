## transition-duration

### Summary

The `transition-duration` [CSS][0] property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.

You may specify multiple durations; each duration will be applied to the corresponding property as specified by the [`transition-property`][1] property, which acts as a master list. If there are fewer durations specified than in the master list, the user agent repeat the list of durations. If there are more durations, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

* _[Initial value][2]_ `0s` 
* _Applies to_ all elements, [`::before`][3] and [`::after`][4] [pseudo-elements][5] 
* _[Inherited][6]_ no 
* _Media_ [`interactive`][7] 
* _[Computed value][8]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<time>][10][#][11]
    

    transition-duration: 6s
    transition-duration: 120ms
    transition-duration: 1s, 15s
    transition-duration: 10s, 30s, 230ms
    
    transition-duration: inherit
    

### Values

**`<time>`**

> Is a [`<time>`][12] denoting the amount of time the transition from the old value of a property to the new value should take. A time of `0s` indicates that no transition will happen, that is the switch between the two states will be instantaneous. A negative value for the time renders the declaration invalid.

### Examples

`transition-duration: 0.5s`


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/transition-property
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::before
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[5]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/time "Possible values: a number followed by 's' or 'ms' like 3s, -2.5ms, or 0s."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/time