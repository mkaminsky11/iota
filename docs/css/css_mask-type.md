## mask-type

The CSS `mask-type` properties defines if a SVG [`<mask>`][0] element is a _luminance_ or an _alpha mask_.

* _[Initial value][1]_ `luminance`
* _Applies to_ [`<mask>`][0]
* _[Inherited][2]_ no
* _Media_ [`visual`][3]
* _[Computed value][4]_ the unique non-ambiguous order defined by the formal grammar
* _Animatable_ no

### Syntax

    mask-type: luminance | alpha

### Values

**`luminance`**

> Is a keyword indicating that the associated [`<mask>`][0] is a luminance mask, that is that its [relative luminance][5] values must be used when applying it.

**`alpha`**

> Is a keyword indicating that the associated [`<mask>`][0] is an alpha mask, that is that its [_alpha channel_][6] values must be used when applying it.

### Examples

Let's apply the following rectangle as a mask:

    <rect x="10" y="10" width="80" height="80" fill="red" fill-opacity="0.7" />

which leads to the following square: 

to this box:

The result, if your browser supports the property, with different value of `mask-type` applied to the [`<mask>`][0] element are these two different squares:
`mask-type: alpha;`
`mask-type: luminance;`



[0]: https://developer.mozilla.org/en/docs/Web/SVG/Element/mask "In SVG, you can specify that any other graphics object or <g> element can be used as an alpha mask for compositing the current object into the background. A mask is defined with the mask element. A mask is used/referenced using the mask property."
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/Web/CSS/Media/Visual "The documentation about this has not yet been written; please consider contributing!"
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: http://en.wikipedia.org/wiki/Luminance_%28relative%29 "http://en.wikipedia.org/wiki/Luminance_%28relative%29"
[6]: http://en.wikipedia.org/wiki/Alpha_compositing "http://en.wikipedia.org/wiki/Alpha_compositing"