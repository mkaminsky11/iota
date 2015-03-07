## animation-delay

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `animation-delay` [CSS][1] property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element.

A value of `0s`, which is the default value of the property, indicates that the animation should begin as soon as it's applied. Otherwise, the value specifies an offset from the moment the animation is applied to the element; animation will begin that amount of time after being applied.

Specifying a negative value for the animation delay causes the animation to begin executing immediately. However, it will appear to have begun executing partway through its cycle. For example, if you specify `-1s` as the animation delay time, the animation will begin immediately but will start 1 second into the animation sequence.

If you specify a negative value for the animation delay, but the starting value is implicit, the starting value is taken from the moment the animation is applied to the element.

It is often convenient to use the shorthand property [`animation`][2] to set all animation properties at once.

* _[Initial value][3]_ `0s` 
* _Applies to_ all elements, [`::before`][4] and [`::after`][5] [pseudo-elements][6] 
* _[Inherited][7]_ no 
* _Media_ [`visual`][8] 
* _[Computed value][9]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<time>][11][#][12]
    

    animation-delay: 3s
    animation-delay: 2s, 4ms
    

### Values

**`<time>`**

> The time offset from the time at which the animation is applied to the element at which the animation should begin. This may be specified in either seconds (by specifying `s` as the unit) or milliseconds (by specifying `ms` as the unit). If you don't specify a unit, the statement is invalid.

### Examples

See [CSS animations][13] for examples.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/animation
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
[13]: https://developer.mozilla.org/en/docs/CSS/CSS_animations "CSS/CSS_animations"