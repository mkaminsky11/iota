## frequency

### Summary

The `<frequency>` [CSS][0] data types denotes a frequency dimension, like the pitch of a speaking voice. They consists of a [`<number>`][1] immediately followed by the unit. Like for any CSS dimension, there is no space between the unit literal and the number.

The following units may be used:

* `Hz` which represents a frequency in Hertz. E.g. `0Hz`, `1500Hz`, `10000Hz`.
* `kHz` which represents a frequency in kilohertz. E.g. `0kHz`, `1.5kHz`, `10kHz`.

Even if all units represent the same time for the value `0`, the unit may not be omitted in that case as it isn't a [`<length>`][2]: `0` is invalid and does not represent `0Hz`, `0kHz`. Though the units are case-insensitive in CSS, it is good practice to use a capital H for `Hz` and `kHz`, as in the [SI][3], [Hertz][4] being a family noun.

### Examples

These are valid frequency values:

    12Hz        Positive integer.
    -456kHz     Negative integer.
    4.3Hz       Non-integer.
    14KhZ       The unit is case-insensitive, though non-SI capitalization is not recommended.
    +0Hz        Zero, with a leading + and the unit.
    -0kHz       Zero, with a leading - and the unit (Though strange, this is an allowed value).
    

These are invalid frequency values:

    12.0        This is a [<number>][5], not an <frequency>, it must have a unit.
    7 Hz        No space is allowed between the [<number>][5] and the unit.
    0           Zero values can be written without a unit only if there are [<length>][6] values, not <frequency>.
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/number "The <number> CSS data type represents a number, either integer or fractional. Its syntax extends the one of the <integer> data value. To represent a fractional value, add the fractional part — a '.' followed by one or several decimal digits — to any <integer> data value. Like for <integer> data type, there isn't any unit associated to a <number>, which is not a CSS dimension."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/length "The <length> CSS data type denotes distance measurements. It is a <number> immediately followed by a length unit (px, em, pc, in, mm, …). Like for any CSS dimension, there is no space between the unit literal and the number."
[3]: http://en.wikipedia.org/wiki/International_System_of_Units "http://en.wikipedia.org/wiki/International_System_of_Units"
[4]: http://en.wikipedia.org/wiki/Heinrich_Hertz "http://en.wikipedia.org/wiki/Heinrich_Hertz"
[5]: https://developer.mozilla.org/en/docs/Web/CSS/number "en/CSS/number"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/length "en/CSS/length"