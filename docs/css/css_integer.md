## integer

### Summary

The `<integer>` [CSS][0] data type denotes an integer number, positive or negative. There isn't any associated unit with the value. An integer consists of one or several decimal digits, 0 to 9, optionally preceded by one single + or - sign.

Integers are used in numerous CSS properties, e. g. [`z-index`][1], [`counter-increment`][2], [`column-count`][3].

Also any `<integer>` CSS value is also a [`<number>`][4] CSS value, though the converse is not true.

There is no official range of valid `<integer>` values. Opera supports values up to 215-1, IE up to 220-1 and other browsers even higher. During the CSS3 Values cycle there were a lot of discussion about setting a minimal limit to support: the latest decision, in April 2012 during the LC phase, was \[-227-1; 227-1\] [\#][5] but other values like 224-1 and 230-1 were also proposed [\#][6] [\#][6]. The latest Editor's draft doesn't list a limit anymore.

### Interpolation

Values of the `<integer>` CSS data type can be interpolated in order to allow animations. In that case they are interpolated via integer discrete steps. The calculation is done as if they were real, floating-point numbers and the discrete value is obtained using the [floor function][7]. The speed of the interpolation is determined by the [timing function][8] associated with the animation.

### Examples

These are valid integer values:

    12          Positive integer (without a leading + sign)
    +123        Positive integer (with a leading + sign)
    -456        Negative integer
    0           Zero
    +0          Zero, with a leading +
    -0          Zero, with a leading - (Though strange, this is an allowed value)
    

These are invalid integer values:

    12.0        This is a <number>, not an <integer>, though it represents an integer
    12.         The dot should not be part of an <integer>
    +---12      Only one leading +/- is allowed
    ten         Letters are not allowed
    _5          Special characters are not allowed
    \35         Escaped Unicode characters are not allowed, even if they are an integer (here: 5)
    \4E94       Non-arabic numerals are not allowed, even escaped (here: the Japanese 5, 五)
    3e4         Scientific notation is not valid on <integer>
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/z-index "The z-index CSS property specifies the z-order of an element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/counter-increment "The counter-increment CSS property is used to increase the value of CSS Counters by a given value. The counter's value can be reset using the counter-reset CSS property."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/column-count "The column-count CSS property describes the number of columns of the element."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[5]: http://lists.w3.org/Archives/Public/www-style/2012Apr/0633.html "http://lists.w3.org/Archives/Public/www-style/2012Apr/0633.html"
[6]: http://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html "http://lists.w3.org/Archives/Public/www-style/2012Apr/0530.html"
[7]: http://en.wikipedia.org/wiki/Floor_function "http://en.wikipedia.org/wiki/Floor_function"
[8]: https://developer.mozilla.org/en/docs/CSS/timing-function "timing-function"