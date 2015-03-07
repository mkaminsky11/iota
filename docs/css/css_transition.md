## transition

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The [CSS][1] `transition` property is a [shorthand property][2] for [`transition-property`][3], [`transition-duration`][4], [`transition-timing-function`][5], and [`transition-delay`][6]. It allows to define the transition between two states of an element. Different states may be defined using [pseudo-classes][7] like [`:hover`][8] or [`:active`][9] or dynamically set using JavaScript.

* _[Initial value][10]_ the concatenation of the initial values of its longhand properties:
  * `transition-delay`: `0s`
  * `transition-duration`: `0s`
  * `transition-property`: `all`
  * `transition-timing-function`: `ease` 
* _Applies to_ all elements, [`::before`][11] and [`::after`][12] [pseudo-elements][13] 
* _[Inherited][14]_ no 
* _Media_ [`interactive`][15] 
* _[Computed value][16]_ as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][17]: [ none [|][18] [<single-transition-property>][19] ] [||][20] [<time>][21] [||][20] [<timing-function>][22] [||][20] [<time>][21]
    

Note that order is important within the items in this property: the first value that can be parsed as a time is assigned to the [transition-duration][23], and the second value that can be parsed as a time is assigned to [transition-delay][24].

See [When property value lists are of different lengths][25] for details on how things are handled when lists of property values aren't the same length. In short, extra transition descriptions beyond the number of properties actually being animated are ignored.

### Examples

There are several more examples of CSS transitions included in the main [CSS transitions][26] article.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/Shorthand_properties "https://developer.mozilla.org/en/docs/CSS/Shorthand_properties"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/transition-property "The transition-property CSS property is used to specify the names of CSS properties to which a transition effect should be applied."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/transition-duration "The transition-duration CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/transition-timing-function "The CSS transition-timing-function property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/transition-delay "The transition-delay CSS property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect."
[7]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "https://developer.mozilla.org/en/docs/CSS/Pseudo-classes"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/:hover "The :hover CSS pseudo-class matches when the user designates an element with a pointing device, but does not necessarily activate it. This style may be overridden by any other link-related pseudo-classes, that is :link, :visited, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :hover rule after the :link and :visited rules but before the :active one, as defined by the LVHA-order: :link — :visited — :hover — :active."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/:active "The :active CSS pseudo-class matches when an element is being activated by the user. It allows the page to give a feedback that the activation has been detected by the browser. When interacting with a mouse, this is typically the time between the user presses the mouse button and releases it. The :active pseudo-class is also typically matched when using the keyboard tab key. It is frequently used on <a> and <button> HTML elements, but may not be limited to just those."
[10]: https://developer.mozilla.org/en/docs/CSS/initial_value
[11]: https://developer.mozilla.org/en/docs/Web/CSS/::before "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/::after "The CSS ::after pseudo-element matches a virtual last child of the selected element. Typically used to add cosmetic content to an element, by using the content CSS property. This element is inline by default."
[13]: https://developer.mozilla.org/en/docs/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/CSS/Pseudo-elements"
[14]: https://developer.mozilla.org/en/docs/CSS/inheritance
[15]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[16]: https://developer.mozilla.org/en/docs/CSS/computed_value
[17]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[18]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[19]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-single-transition-property "all | IDENT"
[20]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[21]: https://developer.mozilla.org/en/docs/Web/CSS/time "Possible values: a number followed by 's' or 'ms' like 3s, -2.5ms, or 0s."
[22]: https://developer.mozilla.org/en/docs/Web/CSS/timing-function "Possible values: cubic-bezier(), steps(), linear, ease, ease-in, ease-out, east-in-out, step-start-step-end"
[23]: https://developer.mozilla.org/en/docs/CSS/transition-duration "https://developer.mozilla.org/en/docs/CSS/transition-duration"
[24]: https://developer.mozilla.org/en/docs/CSS/transition-delay "https://developer.mozilla.org/en/docs/CSS/transition-delay"
[25]: https://developer.mozilla.org/en/CSS/CSS_transitions#When_property_value_lists_are_of_different_lengths "en/CSS/CSS transitions#When property value lists are of different lengths"
[26]: https://developer.mozilla.org/en/CSS/CSS_transitions "en/CSS/CSS transitions"