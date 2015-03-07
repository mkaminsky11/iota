## mix-blend-mode

### Summary

The `mix-blend-mode` CSS property describes how an element content should blend with the content of the element that is below it and the element's background.

* _[Initial value][0]_ `normal` 
* _Applies to_ all HTML elements 
* _[Inherited][1]_ no 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    Formal syntax:  [<blend-mode>][4]

    mix-blend-mode: normal;
    mix-blend-mode: multiply;
    mix-blend-mode: screen;
    mix-blend-mode: overlay;
    mix-blend-mode: darken;
    mix-blend-mode: lighten;
    mix-blend-mode: color-dodge
    mix-blend-mode: color-burn;
    mix-blend-mode: hard-light;
    mix-blend-mode: soft-light;
    mix-blend-mode: difference;
    mix-blend-mode: exclusion;
    mix-blend-mode: hue;
    mix-blend-mode: saturation;
    mix-blend-mode: color;
    mix-blend-mode: luminosity;
    
    mix-blend-mode: initial;
    mix-blend-mode: inherit;
    mix-blend-mode: unset;
    

### Values

**`<blend-mode>`**

> Is a [`<blend-mode>`][5] denoting the blending mode that should be applied. There can be several values, separated by commas.

### Examples

    <svg>
      <circle cx="40" cy="40" r="40" fill="red"/>
      <circle cx="80" cy="40" r="40" fill="lightgreen"/>
      <circle cx="60" cy="80" r="40" fill="blue"/>
    </svg>

    circle { mix-blend-mode: screen; }

### Live result



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/blend-mode "Possible values: normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity"
[5]: https://developer.mozilla.org/en/docs/Web/CSS/blend-mode "The documentation about this has not yet been written; please consider contributing!"