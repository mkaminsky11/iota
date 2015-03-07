## animation-play-state

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `animation-play-state` [CSS][1] property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.

Resuming a paused animation will start the animation from where it left off at the time it was paused, rather than starting over from the beginning of the animation sequence.

* _[Initial value][2]_ `running` 
* _Applies to_ all elements, [`::before`][3] and [`::after`][4] [pseudo-elements][5] 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: [<single-animation-play-state>][10][#][11]
    

    animation-play-state: running
    animation-play-state: paused
    
    animation-play-state: paused, running, running
    

### Values

**`running`**

> The animation is currently playing.

**`paused`**

> The animation is currently paused.

### Examples

See [CSS animations][12] for examples.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::before
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::after
[5]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-play-state "running | paused"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_animations "CSS/CSS_animations"