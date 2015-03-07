## animation-timing-function

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The [CSS][1] `animation-timing-function` property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several [`<timing-function>`][2].

For keyframed animations, the timing function applies between [keyframes][3] rather than over the entire animation. In other words, the timing function is applied at the start of the keyframe and at the end of the keyframe.

An animation timing function defined within a keyframe block applies to that keyframe; otherwise. If no timing function is specified for the keyframe, the timing function specified for the overall animation is used.

It is often convenient to use the shorthand property [`animation`][4] to set all animation properties at once.

* _[Initial value][5]_ `ease` 
* _Applies to_ all elements, [`::before`][6] and [`::after`][7] [pseudo-elements][8] 
* _[Inherited][9]_ no 
* _Media_ [`visual`][10] 
* _[Computed value][11]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][12]:  [<timing-function>][13][#][14]
    

    animation-timing-function: ease
    animation-timing-function: ease-in
    animation-timing-function: ease-out
    animation-timing-function: ease-in-out
    animation-timing-function: linear
    animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1)
    animation-timing-function: step-start
    animation-timing-function: step-end
    animation-timing-function: steps(4, end)
    
    animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1)
    

### Values

**`<timingfunction>`**

> Each [`<timing-function>`][2] represents the timing function to link to the corresponding property to animate, as defined in [`animation-property`][15].

### Examples

See [CSS animations][16] for examples.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/timing-function "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/CSS/@keyframes "https://developer.mozilla.org/en/docs/CSS/@keyframes"
[4]: https://developer.mozilla.org/en/docs/Web/CSS/animation "The animation CSS property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode and animation-play-state."
[5]: https://developer.mozilla.org/en/docs/CSS/initial_value
[6]: https://developer.mozilla.org/en/docs/Web/CSS/::before "The documentation about this has not yet been written; please consider contributing!"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/::after "The CSS ::after pseudo-element matches a virtual last child of the selected element. Typically used to add cosmetic content to an element, by using the content CSS property. This element is inline by default."
[8]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[9]: https://developer.mozilla.org/en/docs/CSS/inheritance
[10]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[11]: https://developer.mozilla.org/en/docs/CSS/computed_value
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/timing-function "Possible values: cubic-bezier(), steps(), linear, ease, ease-in, ease-out, east-in-out, step-start-step-end"
[14]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: the previous entity may appear 0, 1 or several times, each occurence being separated from the previous one by a comma"
[15]: https://developer.mozilla.org/en/docs/Web/CSS/animation-property "The documentation about this has not yet been written; please consider contributing!"
[16]: https://developer.mozilla.org/en/docs/CSS/CSS_animations "en-US/docs/CSS/CSS_animations"