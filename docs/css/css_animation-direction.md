## animation-direction

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `animation-direction` CSS property indicates whether the animation should play in reverse on alternate cycles.

It is often convenient to use the shorthand property [`animation`][1] to set all animation properties at once.

* _[Initial value][2]_ `normal` 
* _Applies to_ all elements, [`::before`][3] and [`::after`][4] [pseudo-elements][5] 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]:  [<single-animation-direction>][10][#][11]
    

    animation-direction: normal
    animation-direction: reverse
    animation-direction: alternate
    animation-direction: alternate-reverse
    animation-direction: normal, reverse
    animation-direction: alternate, reverse, normal
    

### Values

**`normal`**

> The animation should play forward each cycle. In other words, each time the animation cycles, the animation will reset to the beginning state and start over again. This is the default animation direction setting.

**`alternate`**

> The animation should reverse direction each cycle. When playing in reverse, the animation steps are performed backward. In addition, timing functions are also reversed; for example, an `ease-in` animation is replaced with an `ease-out` animation when played in reverse. The count to determine if it is an even or an odd iteration starts at one.

**`reverse`**

> The animation plays backward each cycle. Each time the animation cycles, the animation resets to the end state and start over again.

**`alternate-reverse`**

> The animation plays backward on the first play-through, then forward on the next, then continues to alternate. The count to determinate if it is an even or an odd iteration starts at one.

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
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-direction "normal | reverse | alternate | alternate-reverse"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_animations "CSS/CSS_animations"