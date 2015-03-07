## animation

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `animation` [CSS][1] property is a [shorthand property][2] for [`animation-name`][3], [`animation-duration`][4], [`animation-timing-function`][5], [`animation-delay`][6], [`animation-iteration-count`][7], [`animation-direction`][8], [`animation-fill-mode`][9] and [`animation-play-state`][10].

A [list of CSS properties that can be animated][11] is available; it's worth noting that these are the same properties supported by [CSS transitions][12].

* _[Initial value][13]_ the concatenation of the initial values of its longhand properties:
  * `animation-name`: `none`
  * `animation-duration`: `0s`
  * `animation-timing-function`: `ease`
  * `animation-delay`: `0s`
  * `animation-iteration-count`: `1`
  * `animation-direction`: `normal`
  * `animation-fill-mode`: `none`
  * `animation-play-state`: `running` 
* _Applies to_ all elements, [`::before`][14] and [`::after`][15] [pseudo-elements][16] 
* _[Inherited][17]_ no 
* _Media_ [`visual`][18] 
* _[Computed value][19]_ as each of the properties of the shorthand:
  * `animation-name`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `animation-duration`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `animation-timing-function`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `animation-delay`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `animation-direction`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `animation-iteration-count`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `animation-fill-mode`: is itself a shorthand, applies to the same elements as each of its longhand properties.
  * `animation-play-state`: is itself a shorthand, applies to the same elements as each of its longhand properties. 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][20]: [<single-animation-name>][21] [||][22] [<time>][23] [||][22] [<timing-function>][24] [||][22] [<time>][23] [||][22] [<single-animation-iteration-count>][25] [||][22] [<single-animation-direction>][26] [||][22] [<single-animation-fill-mode>][27] [||][22] [<single-animation-play-state>][28]
    

The order is important within each animation definition: the first value that can be parsed as a [`<time>`][29] is assigned to the [`animation-duration`][4], and the second one is assigned to [`animation-delay`][6].

### Examples

See [CSS animations][30] for examples.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/Shorthand_properties "Shorthand properties"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/animation-name "The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/animation-duration "The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/animation-timing-function "The CSS animation-timing-function property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several <timing-function>."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/animation-delay "The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element."
[7]: https://developer.mozilla.org/en/docs/Web/CSS/animation-iteration-count "The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/animation-direction "The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/animation-fill-mode "The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/animation-play-state "The animation-play-state CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation."
[11]: https://developer.mozilla.org/en/docs/CSS/CSS_transitions#Properties_that_can_be_animated "CSS/CSS_transitions#Properties_that_can_be_animated"
[12]: https://developer.mozilla.org/en/docs/CSS/CSS_transitions "CSS/CSS_transitions"
[13]: https://developer.mozilla.org/en/docs/CSS/initial_value
[14]: https://developer.mozilla.org/en/docs/Web/CSS/::before "::before creates a pseudo-element that is the first child of the element matched. It is often used to add cosmetic content to an element by using the content property. This element is inline by default."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/::after "The CSS ::after pseudo-element matches a virtual last child of the selected element. It is typically used to add cosmetic content to an element by using the content CSS property. This element is inline by default."
[16]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[17]: https://developer.mozilla.org/en/docs/CSS/inheritance
[18]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[19]: https://developer.mozilla.org/en/docs/CSS/computed_value
[20]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[21]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-name "none | IDENT"
[22]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[23]: https://developer.mozilla.org/en/docs/Web/CSS/time "Possible values: a number followed by 's' or 'ms', like 3s, -2.5ms or 0s."
[24]: https://developer.mozilla.org/en/docs/Web/CSS/timing-function "Possible values: cubic-bezier(), steps(), linear, ease, ease-in, ease-out, east-in-out, step-start-step-end"
[25]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-iteration-count "infinite | <number>"
[26]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-direction "normal | reverse | alternate | alternate-reverse"
[27]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-fill-mode "none | forwards | backwards | both"
[28]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-animation-play-state "running | paused"
[29]: https://developer.mozilla.org/en/docs/Web/CSS/time "The documentation about this has not yet been written; please consider contributing!"
[30]: https://developer.mozilla.org/en/docs/CSS/CSS_animations "CSS/CSS_animations"