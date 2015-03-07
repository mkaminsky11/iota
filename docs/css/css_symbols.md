## symbols

### Summary

The `symbols()` function allows counter styles to be defined inline, directly as the value of the CSS property. Unlike styles defines with [`@counter-style`][0], these styles are anonymous. The `symbols()` function doesn't have all the capabilities and options of the [`@counter-style`][0] at-rule, but is useful in cases such as when the style is used only once and you don't need all the the options provided by [`@counter-style`][0].

### Syntax

    symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );

`<symbols-type>` is one of the following keyword:

* `cyclic`, meaning that the system repeatedly goes through the different values, in the order of their definition and in an endless cycle.
* `numeric`, meaning that the system interprets the given values as the successive units of a place-value numerical system.
* `alphabetic`, meaning that the system interprets the given values as the digits of an alphabetic numbering system, as a place-value numerical system, but without `0`.
* `symbolic`, meaning that the system cycles through the values, printing them one more time at each cycle (one time for the first cycle, two times for the second, ...).
* `fixed`, meaning that the system prints each symbol once, then falls back to arab numericals.

### Example

    ol {
        list-style: symbols(cyclic "*" "\2020" "\2021");
    }

The above example code will render a list like this:

* \* One
* † Two
* ‡ Three
* \* Four
* † Five


[0]: https://developer.mozilla.org/en/docs/Web/CSS/@counter-style "The @counter-style CSS at-rule defines a specific counter style that are not part of the predefined set of styles. A @counter-style rule defines how to convert a counter value into a string representation."