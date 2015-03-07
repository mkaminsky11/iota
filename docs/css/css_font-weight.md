## font-weight

### Summary

The [`font-weight`][0] [CSS][1] property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on `normal` and `bold`.

* _[Initial value][2]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][3] and [`::first-line`][4]. 
* _[Inherited][5]_ yes 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ the keyword or the numerical value as specified, with `bolder` and `lighter` transformed to the real value 
* _Animatable_ yes, as a [font weight][8] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: normal [|][10] bold [|][10] bolder [|][10] lighter [|][10] 100 [|][10] 200 [|][10] 300 [|][10] 400 [|][10] 500 [|][10] 600 [|][10] 700 [|][10] 800 [|][10] 900

    font-weight: normal
    font-weight: bold
    
    font-weight: lighter
    font-weight: bolder
    
    font-weight: 100
    font-weight: 200
    font-weight: 300
    font-weight: 400
    font-weight: 500
    font-weight: 600
    font-weight: 700
    font-weight: 800
    font-weight: 900
    
    font-weight: inherit

### Values

**`normal`**

> Normal font weight. Same as `400`.

**`bold`**

> Bold font weight. Same as `700`.

**`lighter`**

> One font weight lighter than the parent element (among the available weights of the font).

**`bolder`**

> One font weight darker than the parent element (among the available weights of the font).

**`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`**

> Numeric font weights for fonts that provide more than just normal and bold.

### Fallback

If the exact weight given is unavailable, then the following heuristic is used to determine the weight actually rendered:

* If a weight greater than `500` is given, the closest available darker weight is used (or, if there is none, the closest available lighter weight).
* If a weight less than `400` is given, the closest available lighter weight is used (or, if there is none, the closest available darker weight).
* If a weight of exactly `400` is given, then `500` is used. If `500` is not available, then the heuristic for font weights less than 500 is used.
* If a weight of exactly `500` is given, then `400` is used. If `400` is not available, then the heuristic for font weights less than 400 is used.

This means that for fonts that provide only `normal` and `bold`, `100`-`500` are normal, and `600`-`900` are bold.

### Meaning of relative weights

When `lighter` or `bolder` is given, the following chart is used to calculate the absolute weight of the element:
Inherited value
`bolder`
`lighter`

100
400
100

200
400
100

300
400
100

400
700
100

500
700
100

600
900
400

700
900
400

800
900
700

900
900
700

### Common weight name mapping

The 100 to 900 values roughly correspond to the following common weight names:

**`100`**

> Thin

**`200`**

> Extra Light (Ultra Light)

**`300`**

> Light

**`400`**

> Normal

**`500`**

> Medium

**`600`**

> Semi Bold (Demi Bold)

**`700`**

> Bold

**`800`**

> Extra Bold (Ultra Bold)

**`900`**

> Black (Heavy)

### Interpolation

A `font-weight` value is interpolated via discrete steps (multiples of 100). The interpolation happens in real number space and is converted to an integer by rounding to the nearest multiple of 100, with values halfway between multiples of 100 rounded towards positive infinity.

### Examples

    /* Set paragraph text to be bold. */
    p { font-weight: bold; }
    
    /* Set h1 (level 1 heading) text to one step darker than
       normal but less than a standard bold. */
    h1 { font-weight: 500; }
    
    /* Sets text enclosed within span tag to be one step lighter
       than the parent. */
    span { font-weight: lighter; }

[View the live example][11]


[0]: https://developer.mozilla.org/en/docs/Web/CSS/font-weight "The font-weight CSS property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on normal and bold."
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/font-weight#Interpolation "Font weight values are interpolated via discrete steps (multiples of 100). The interpolation happens in real number space and is converted to an integer by rounding to the nearest multiple of 100, with values halfway between multiples of 100 rounded towards positive infinity."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[11]: /samples/cssref/font-weight.html