## time

### Summary

The `<time>` [CSS][0] data type denotes time dimensions expressed in seconds or milliseconds. They consists of a [`<number>`][1] immediately followed by the unit. Like for any CSS dimension, there is no space between the unit literal and the number.

The following units may be used :

* `s` which represents a time in seconds. E.g. `0s`, `1.5s`, `-60s`.
* `ms` which represents a time in milliseconds. E.g. `0ms`, `1500ms`, `-60000ms`.

Conversion between `s` and `ms` follows the logical `1s` = `1000ms`.

Even if all units represent the same time for the value `0`, the unit may not be omitted in that case as it isn't a [`<length>`][2]: `0` is invalid and does not represent `0s`, `0ms`.

### Examples

These are valid time values:

    12s         Positive integer
    -456ms      Negative integer
    4.3ms       Non-integer
    14mS        The unit is case-insensitive, though capital letters are not recommended for s and ms.
    +0s         Zero, with a leading + and the unit
    -0ms        Zero, with a leading - and the unit (Though strange, this is an allowed value)
    

These are invalid time values:

    0           While unitless zero is allowed for <length>, it's invalid for all other units.
    12.0        This is a [<number>][3], not a <time>, it must have a unit
    7 ms        No space is allowed between the [<number>][3] and the unit
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/number
[2]: https://developer.mozilla.org/en/docs/Web/CSS/length
[3]: https://developer.mozilla.org/en/docs/Web/CSS/number "number"