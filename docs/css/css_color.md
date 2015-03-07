## color

### Summary

The [CSS][0] `color` property sets the foreground [color][1] of an element's text content, and its [decorations][2]. It doesn't affect any other characteristic of the element; it should really be called `text-color` and would have been named so, save for historical reasons and its appearance in CSS Level 1\.

Note that the color value must be a uniform color, which may include a transparency value from CSS3 onwards. It can't be a [`<gradient>`][3] which is an [`<image>`][4] in CSS.

* _[Initial value][5]_ Varies from one browser to another 
* _Applies to_ all elements 
* _[Inherited][6]_ yes 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ If the value is translucent, the computed value will be the `rgba()` corresponding one. If it isn't, it will be the `rgb()` corresponding one. The `transparent` keyword maps to `rgba(0,0,0,0)`. 
* _Animatable_ yes, as a [color][9] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<color>][11]

    color: red;                     // A CSS Level 1 color.
    color: orange;                  // The only color added in CSS Level 2 (Revision 1).
    color: antiquewhite;            // A CSS Level 3 color, sometimes called a SVG or X11 color.
    color: #0f0;                    // The color 'lime' defined using the 3-character _dash_ notation.
    color: #00ff00;                 // The color 'lime' defined using the 6-character _dash_ notation.
    color: rgba( 34, 12, 64, 0.3);  // A color defined using the available functional notations.
    color: currentcolor;            // The special keyword representing the color's value of its direct ancestor.
    
    color: inherit;
    

### Values

**`<color>`**

> Is a [`<color>`][1] value giving the color of the textual elements of the element.

### Examples

The following are all ways to make the element's text red:

    element { color: red }
    element { color: #f00 }
    element { color: #ff0000 }
    element { color: rgb(255,0,0) }
    element { color: rgb(100%, 0%, 0%) }
    element { color: hsl(0, 100%, 50%) }
    
    /* 50% translucent */
    element { color: rgba(255, 0, 0, 0.5) } 
    element { color: hsla(0, 100%, 50%, 0.5) }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS
[1]: https://developer.mozilla.org/en/docs/Web/CSS/color_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration
[3]: https://developer.mozilla.org/en/docs/Web/CSS/gradient
[4]: https://developer.mozilla.org/en/docs/Web/CSS/image
[5]: https://developer.mozilla.org/en/docs/CSS/initial_value
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/Value_definition_syntax
[11]: https://developer.mozilla.org/en/docs/CSS/color