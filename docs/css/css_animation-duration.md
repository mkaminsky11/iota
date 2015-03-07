## animation-duration

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `animation-duration` CSS property specifies the length of time that an animation should take to complete one cycle.

A value of `0s`, which is the default value, indicates that no animation should occur.

It is often convenient to use the shorthand property [`animation`][1] to set all animation properties at once.

* _[Initial value][2]_ `0s` 
* _Applies to_ all elements, [`::before`][3] and [`::after`][4] [pseudo-elements][5] 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<time>][10][#][11]
    

    animation-duration: 6s
    animation-duration: 120ms
    animation-duration: 1s, 15s
    animation-duration: 10s, 30s, 230ms
    

### Values

**`<time>`**

> The duration that an animation should take to complete one cycle. This may be specified in either seconds (by specifying `s` as the unit) or milliseconds (by specifying `ms` as the unit). If you don't specify a unit, the declaration will be invalid.

**Note:** Negative values are invalid, causing the declaration to be ignored. Note that some early, prefixed, implementations may consider them as identical to `0s`.

### Examples

See [CSS animations][12] for examples.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/CSS/animation
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::before
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[5]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/time "Possible values: a number followed by 's' or 'ms' like 3s, -2.5ms, or 0s."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[12]: https://developer.mozilla.org/en/CSS/CSS_animations "en/CSS/CSS_animations"