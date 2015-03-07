## mask

### Summary

* _[Initial value][0]_ `none`
* _Applies to_ all elements
* _[Inherited][1]_ no
* _Media_ [`visual`][2]
* _[Computed value][3]_
* _Animatable_ yes

### Syntax

    mask: <uri> | none | inherit

### Values

If the value is a URI value, the element pointed to by the URI is used as an SVG mask.

### Examples

    .target { mask: url(#c1); }
    
    .anothertarget { mask: url(resources.svg#c1); }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/Web/CSS/Media/Visual "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value