## number

### Summary

The `<number>` [CSS][0] data type represents a number, either integer or fractional. Its syntax extends the one of the [`<integer>`][1] data value. To represent a fractional value, add the fractional part --- a '.' followed by one or several decimal digits --- to any [`<integer>`][1] data value. Like for [`<integer>`][1] data type, there isn't any unit associated to a `<number>`, which is not a CSS dimension.

### Interpolation

Values of the `<number>` CSS data type can be interpolated in order to allow animations. In that case they are interpolated as real, floating-point, numbers. The speed of the interpolation is determined by the [timing function][2] associated with the animation.

### Examples

These are valid number values:

    12          A raw [<integer>][3] is also a <number>
    4.01        A positive non-integer <number>
    -456.8      Negative non-integer <number>
    0.0         Zero
    +0.0        Zero, with a leading +
    -0.0        Zero, with a leading - (Though strange, this is an allowed value)
    .60         Digits are optional before the dot
    10e3        The scientific notation is allowed 
    -3.4e-2     Most complex case of scientific notation
    

These are invalid number values:

    12.         The dot should be followed by a number
    +-12.2    Only one leading +/- is allowed
    12.1.1      Only one dot is allowed
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"
[2]: https://developer.mozilla.org/en/docs/CSS/timing-function "timing-function"
[3]: https://developer.mozilla.org/en/docs/CSS/integer "integer"