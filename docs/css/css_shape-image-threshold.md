## shape-image-threshold

### Summary

The `shape-image-threshold` [CSS][0] property defines the alpha channel threshold used to extract the shape using an image as the value for [`shape-outside`][1]. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.

* _[Initial value][2]_ `0.0` 
* _Applies to_ floats 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ yes, as a [number][6] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [<number>][8]

    shape-outside: url(image.png)
    shape-image-threshold: 0.7
    
    shape-image-threshold: [initial][9]
    shape-image-threshold: [inherit][10]
    shape-image-threshold: [unset][11]
    

### Values

**<number\>**

> Sets the threshold used for extracting a shape from an image. The shape is defined by the pixels whose alpha value is greater than the threshold. A threshold value outside the range 0.0 (fully transparent) to 1.0 (fully opaque) will be clamped to this range.

### Examples

See \[COMING SOON\] for examples.


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/number#Interpolation "Values of the <number> CSS data type are interpolated as real, floating-point, numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/number
[9]: https://developer.mozilla.org/en/docs/Web/CSS/initial
[10]: https://developer.mozilla.org/en/docs/Web/CSS/inherit
[11]: https://developer.mozilla.org/en/docs/Web/CSS/unset