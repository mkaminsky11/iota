## animation-name

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `animation-name` [CSS][1] property specifies a list of animations that should be applied to the selected element. Each name indicates a [`@keyframes`][2] at-rule that defines the property values for the animation sequence.

It is often convenient to use the shorthand property [`animation`][3] to set all animation properties at once.

* _[Initial value][4]_ `none` 
* _Applies to_ all elements, [`::before`][5] and [`::after`][6] [pseudo-elements][7] 
* _[Inherited][8]_ no 
* _Media_ [`visual`][9] 
* _[Computed value][10]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]: [<single-animation-name>][12][#][13]

    animation-name: none
    animation-name: test_05
    animation-name: -specific
    animation-name: sliding-vertically
    
    animation-name: test1
    animation-name: test1, animation4
    animation-name: none, -moz-specific, sliding
    
    animation-name: [initial][14]
    animation-name: [inherit][15]
    animation-name: [unset][16]
    

### Values

`<single-animation-name>` is one of the following keywords:

**`none`**

> Is a special keyword denoting no keyframes. It can be used to deactivate an animation without changing the ordering of the other identifiers, or to deactivate animations coming from the cascade.

**[`<custom-ident>`][17]**

> A string identifying the animation. This identifier is composed by a combination of case-insensitive letters `a` to `z`, numbers `0` to `9`, underscores (`_`), and/or dashes (`-`). The first non-dash character must be a letter (that is, no number at the beginning of it, even if preceded by a dash.) Also, two dashes are forbidden at the beginning of the identifier. It can't be `none`, `unset`, `initial`, or `inherit` in any combination of cases.

### Examples

See [CSS animations][18] for examples.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/@keyframes "The @keyframes CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation. This gives you more specific control over the intermediate steps of the animation sequence than you get when letting the browser handle everything automatically."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/animation "The animation CSS property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode and animation-play-state."
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::before "::before creates a pseudo-element that is the first child of the element matched. It is often used to add cosmetic content to an element by using the content property. This element is inline by default."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/::after "The CSS ::after pseudo-element matches a virtual last child of the selected element. Typically used to add cosmetic content to an element, by using the content CSS property. This element is inline by default."
[7]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[8]: https://developer.mozilla.org/en/docs/CSS/inheritance
[9]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[10]: https://developer.mozilla.org/en/docs/CSS/computed_value
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-name "none | IDENT"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: The previous entity may appear 0, 1 or several times, each occurrence being separated from the previous one by a comma."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/initial
[15]: https://developer.mozilla.org/en/docs/Web/CSS/inherit
[16]: https://developer.mozilla.org/en/docs/Web/CSS/unset
[17]: https://developer.mozilla.org/en/docs/Web/CSS/custom-ident "The documentation about this has not yet been written; please consider contributing!"
[18]: https://developer.mozilla.org/en/docs/CSS/CSS_animations "CSS/CSS_animations"