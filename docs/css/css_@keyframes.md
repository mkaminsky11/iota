## @keyframes

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `@keyframes` CSS at-rule lets authors control the intermediate steps in a CSS animation sequence by establishing keyframes (or waypoints) along the animation sequence that must be reached by certain points during the animation. This gives you more specific control over the intermediate steps of the animation sequence than you get when letting the browser handle everything automatically.

The `@keyframes` at-rule can be accessed via the CSS object model interface [`CSSKeyframesRule`][1].

To use keyframes, you create a `@keyframes` rule with a name that is then used by the [`animation-name`][2] property to match an animation to its keyframe list. Each `@keyframes` rule contains a style list of keyframe selectors, each of which is comprised of a percentage along the animation at which the keyframe occurs as well as a block containing the style information for that keyframe.

You can list the keyframes in any order; they will be handled in the order in which their specified percentages indicate they should occur.

### Valid keyframe lists

In order for a keyframe list to be valid, it must include rules for at least the times `0%` (or `from`) and `100%` (or `to`) (that is, the starting and ending states of the animation). If both of these time offsets aren't specified, the keyframe declaration is invalid and can't be used for animation.

If you include properties that can't be animated in your keyframe rules, they get ignored, but the supported properties will still be animated.

### Duplicate resolution

If multiple keyframe sets exist for a given name, the last one encountered is used. `@keyframes` rules don't cascade, so animations never drive keyframes from more than one rule set.

If a given animation time offset is duplicated, the last keyframe in the `@keyframes` rule for that percentage is used for that frame. There's no cascading within a `@keyframes` rule if multiple keyframes specify the same percentage values.

### When properties are left out of some keyframes

Any properties that you don't specify in every keyframe are interpolated (with the exception of those that can't be interpolated, which are instead dropped from the animation entirely). For example:

    @keyframes identifier {
      0% { top: 0; left: 0; }
      30% { top: 50px; }
      68%, 72% { left: 50px; }
      100% { top: 100px; left: 100%; }
    }
    

Here, the [`top`][3] property animates using the `0%`, `30%`, and `100%` keyframes, and [`left`][4] animates using the `0%`, `68%`, and `100%` keyframes.

Only properties that are specified in both the `0%` and `100%` keyframes will be animated; any property not included in both of those keyframes will retain their starting value for the duration of the animation sequence.

### When a keyframe is defined multiple times

The specification defines that if a keyframe is defined multiple times but not all properties affected are specified in each keyframe, only the values specified in the latest keyframe are considered. For example:

    @keyframes identifier {
      0% { top: 0; }
      50% { top: 30px; left: 20px; }
      50% { top: 10px; }
      100% { top: 0; }
    }
    

In this example, at the `50%` keyframe, the value used is `top: 10px` and all other values at this keyframe are ignored.

### !important in a keyframe

Declarations in a keyframe that are qualified with `!important` are ignored

    @keyframes important1 {
      from { margin-top: 50px; }
      50%  { margin-top: 150px !important; } /* ignored */
      to   { margin-top: 100px; }
    }
    
    @keyframes important2 {
      from { margin-top: 50px;
             margin-bottom: 100px; }
      to   { margin-top: 150px !important; /* ignored */
             margin-bottom: 50px; }
    }

Non-standard Cascading keyframes are supported starting in Firefox 14\. For the example above, it means that at the `50%` keyframe, the value `left: 20px` will be considered. This is not defined in the specification yet, but it is being discussed.

### Syntax

    @keyframes <identifier> {
      [ [ from | to | <percentage> ] [, from | to | <percentage> ]* block ]*
    }
    

### Values

**`<identifier>`**

> A name identifying the keyframe list. This must match the identifier production in CSS syntax.

**`from`**

> A starting offset of `0%`.

**`to`**

> An ending offset of `100%`.

**[`<percentage>`][5]**

> A percentage of the time through the animation sequence at which the specified keyframe should occur.

### Examples

See [CSS animations][6] for examples.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/API/CSSKeyframesRule "The CSSKeyframesRule interface describes an object representing a complete set of keyframes for a CSS animation. It corresponds to the contains of a whole @keyframes at-rule. It implements the CSSRule interface with a type value of 7 (CSSRule.KEYFRAMES_RULE)."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/animation-name "The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/top "The top CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/left "The left CSS property specifies part of the position of positioned elements."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[6]: https://developer.mozilla.org/en/CSS/CSS_animations "en/CSS/CSS_animations"