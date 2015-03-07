## box-shadow

**Box-shadow generator**

[Interactive tool][0] allowing to generate box-shadow.

The `box-shadow` CSS property describes one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a [`border-radius`][1] is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple [text shadows][2] (the first specified shadow is on top).

* _[Initial value][3]_ `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][4]. 
* _[Inherited][5]_ no 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ any length made absolute; any specified color computed; otherwise as specified 
* _Animatable_ yes, as a shadow list 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#

### Values

**`inset`**

> If not specified (default), the shadow is assumed to be a drop shadow (as if the box were raised above the content).  
> The presence of the `inset` keyword changes the shadow to one inside the frame (as if the content was depressed inside the box). Inset shadows are drawn inside the border (even transparent ones), above the background, but below content.

**`<offset-x>` `<offset-y>`**

> These are two [`<length>`][9] values to set the shadow offset. `<offset-x>` specifies the horizontal distance. Negative values place the shadow to the left of the element. `<offset-y>` specifies the vertical distance. Negative values place the shadow above the element. See [`<length>`][9] for possible units.  
> If both values are `0`, the shadow is placed behind the element (and may generate a blur effect if `<blur-radius>` and/or `<spread-radius>` is set).

**`<blur-radius>`**

> This is a third [`<length>`][9] value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be `0` (the shadow's edge is sharp).

**`<spread-radius>`**

> This is a fourth [`<length>`][9] value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be `0` (the shadow will be the same size as the element).

**`<color>`**

> See [`<color>`][10] values for possible keywords and notations.  
> If not specified, the color used depends on the browser - it is usually the value of the [`color`][11] property, but note that Safari currently paints a transparent shadow in this case.

### Live examples

* [box-shadow test][12]
* [box-shadow tutorial and examples][13]

    box-shadow: 60px -16px teal;

    box-shadow: 10px 5px 5px black;

    box-shadow: 3px 3px red, -1em 0 0.4em olive;

    box-shadow: inset 5em 1em gold;

    box-shadow: 0 0 1em gold;

    box-shadow: inset 0 0 1em gold;

    box-shadow: inset 0 0 1em gold, 0 0 1em red;



[0]: https://developer.mozilla.org/en/docs/Web/CSS/Tools/Box-shadow_generator "https://developer.mozilla.org/en/docs/Web/CSS/Tools/Box-shadow_generator"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-radius "The border-radius CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse."
[2]: https://developer.mozilla.org/en/CSS/text-shadow "text-shadow"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[12]: http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html "http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html"
[13]: http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/ "http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/"