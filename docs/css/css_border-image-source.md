## border-image-source

### Summary

The `border-image-source` CSS property defines the [`<image>`][0] to use instead of the style of the border. If this property is set to `none`, the style defined by [`border-style`][1] is used instead.

**Note:** Though any [`<image>`][0] can be used with this CSS property, browser support is still limited and some browsers support only images defined using the `url()` functional notation.

* _[Initial value][2]_ `none` 
* _Applies to_ all elements, except internal table elements when [`border-collapse`][3] is `collapse` 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ none or the image with its URI made absolute 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: none [|][8] [<image>][9] 
    

    border-image-source: none                                  /* no border-image, use the specified border-style */
    border-image-source: url(image.jpg)                        /* the image.jpg is used as image */
    border-image-source: linear-gradient(to top, red, yellow)  /* a gradient is used as image */
    
    border-image-source: inherit
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/image
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-style
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/CSS/image