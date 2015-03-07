## animation-iteration-count

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `animation-iteration-count` [CSS][1] property defines the number of times an animation cycle should be played before stopping.

It is often convenient to use the shorthand property [`animation`][2] to set all animation properties at once.

* _[Initial value][3]_ `1` 
* _Applies to_ all elements, [`::before`][4] and [`::after`][5] [pseudo-elements][6] 
* _[Inherited][7]_ no 
* _Media_ [`visual`][8] 
* _[Computed value][9]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<single-animation-iteration-count>][11][#][12]
    

    animation-iteration-count: infinite
    animation-iteration-count: 3
    animation-iteration-count: 2.3
    
    animation-iteration-count: 2, 0, infinite
    

### Values

**`infinite`**

> The animation will repeat forever.

**`<number>`**

> The number of times the animation should repeat; this is `1` by default. Negative values are invalid. You may specify non-integer values to play part of an animation cycle (for example `0.5` will play half of the animation cycle).

### Examples

See [CSS animations][13] for examples.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/animation
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::before
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[6]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[7]: https://developer.mozilla.org/en/docs/CSS/inheritance
[8]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[9]: https://developer.mozilla.org/en/docs/CSS/computed_value
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-iteration-count "infinite | <number>"
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[13]: https://developer.mozilla.org/en/docs/CSS/Using_CSS_animations