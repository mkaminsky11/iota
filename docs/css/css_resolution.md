## resolution

### Summary

The `<resolution>` [CSS][0] data types, used in [media queries][1], denotes the density of pixels of an output device, its resolution. It is a [`<number>`][2] immediately followed by a unit of resolution (`dpi`, `dpcm`, ...). Like for any CSS dimension, there is no space between the unit literal and the number.

On screens, the length is related to CSS inches, centimeters or pixels, not on physical values.

Even if all units represent the same resolution for the value `0`, the unit may not be omitted in that case as it isn't a [`<length>`][3]: `0` is invalid and does not represent `0dpi`, `0dpcm`, nor `0dppx`.

### Units

**`dpi`**

> This unit represents the number of [dots per inch][4]. A screen typically contains 72 or 96 dpi; a printed document usually reach much greater dpi. As 1 inch is 2.54 cm, `1dpi ≈ 0.39dpcm`.

**`dpcm`**

> This unit represents the number of [dots per centimeter][5]. As 1 inch is 2.54 cm, `1dpcm ≈ 2.54dpi`.

**`dppx`**

> This unit represents the number of dots per `px` unit. Due to the 1:96 fixed ratio of CSS `in` to CSS `px`, `1dppx` is equivalent to `96dpi`, that corresponds to the default resolution of images displayed in CSS as defined by [`image-resolution`][6].

### Examples

Here are some correct uses of `<resolution>` values:

    96dpi                                              Correct use: a [<number>][2] (here an [<integer>][7]) followed by the unit.
    @media print and (min-resolution: 300dpi) { ... }  Correct use in the context of a [media query][1].
    

Here are some incorrect uses:

    72 dpi                                             Incorrect: no spaces allowed between the [<number>][2] and the unit.
    ten dpi                                            Incorrect: only digits must be used.
    0                                                  Incorrect: the unit can be omitted for 0 values only for [<length>][3].
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS
[1]: https://developer.mozilla.org/en/docs/Web/Guide/CSS/Media_queries
[2]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[4]: http://en.wikipedia.org/wiki/Dots_per_inch
[5]: http://en.wikipedia.org/wiki/Dots_per_centimetre
[6]: https://developer.mozilla.org/en/docs/Web/CSS/image-resolution "The documentation about this has not yet been written; please consider contributing!"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"