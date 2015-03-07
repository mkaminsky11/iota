## angle

### Summary

The `<angle>` [CSS][0] data type represents angle values. Positive angles represent right angles, negative angles represent left angles. Its syntax is a [`<number>`][1] data type immediately followed by the unit (`deg`, `grad`, `rad` or `turn`). Like for any CSS dimension, there is no space between the unit literal and the number.

For static properties and a given unit, an angle can be represented by several values: `90deg` and `-270deg`, or `1turn` and `4turn` represents the same final position. For dynamic properties, like applying a [`transition`][2] on the [`transform`][3] property, the effect will nevertheless be different.

The following units may be used:

* `deg` which represents an angle in [degrees][4]. One full circle is `360deg`. E.g. `0deg`, `90deg`,` 360deg`.
* `grad` which represents an angle in [gradians][5]. One full circle is `400grad`. E.g. `0grad`, `100grad`,` 400grad`.
* `rad` which represents an angle in [radians][6].  One full circle is 2π radians which approximates to `6.2832rad`. `1rad` is 180/π degrees. E.g. `0rad`, `1.0708rad`,` 6.2832rad`.
* `turn` which represents the number of turns the angle is. One full circle is `1turn`. E.g. `0turn`, `0.25turn`,` 1turn`.

Even if all units represent the same time for the value `0`, the unit may not be omitted in that case as it isn't a [`<length>`][7]: `0` is invalid and does not represent `0deg`, `0grad`, `0rad` or `0turn`.


[0]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/transition "The CSS transition property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay. It allows to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/transform "The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set."
[4]: http://en.wikipedia.org/wiki/Degree_%28angle%29 "http://en.wikipedia.org/wiki/Degree_%28angle%29"
[5]: http://en.wikipedia.org/wiki/Gradian "http://en.wikipedia.org/wiki/Gradian"
[6]: http://en.wikipedia.org/wiki/Radian "http://en.wikipedia.org/wiki/Radian"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"