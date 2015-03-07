## clip-path

### Summary

The clip-path property prevents a portion of an element from drawing by defining a clipping region.

* _[Initial value][0]_ See the initial clipping path: 'overflow' and 'clip' properties
* _Applies to_ all elements
* _[Inherited][1]_ no
* _Media_ [`visual`][2]
* _[Computed value][3]_

### Syntax

    clip-path: <uri> | none | inherit

### Values

**uri**

> <uri\> | none | inherit

### Examples

    .target { clip-path: url(#c1); }
    
    .anothertarget { clip-path: url(resources.svg#c1); }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/Web/CSS/Media/Visual "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value