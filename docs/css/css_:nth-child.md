## :nth-child

### Summary

The `:nth-child(an+b)` [CSS][0] [pseudo-class][1] matches an element that has `_a_n+_b_-1` siblings before it in the document tree, for a given positive or zero value for `n`, and has a parent element.

This can more clearly be described this way: the matching element is the `_b_th` child of an element after all its children have been split into groups of `_a_` elements each.

The values `_a_` and `_b_` must both be integers, and the index of an element's first child is 1\.

In other words, this class matches all children whose index fall in the set { an + b; n = 0, 1, 2, ... }.

Among other things, this allows selectors to match every other row in a table.

### Syntax

    element:nth-child(_a_n + _b_) { _style properties_ }
    

### Examples

### Example selectors

**`tr:nth-child(2n+1)`**

> Represents the odd rows of an HTML table.

**`tr:nth-child(odd)`**

> Represents the odd rows of an HTML table.

**`tr:nth-child(2n)`**

> Represents the even rows of an HTML table.

**`tr:nth-child(even)`**

> Represents the even rows of an HTML table.

**`span:nth-child(0n+1)`**

> Represents a span element which is the first child of its parent; this is the same as the [`:first-child`][2] selector.

**`span:nth-child(1)`**

> Equivalent to the above.

**`span:nth-child(-n+3)`**

> Matches if the element is one of the first three children of its parent and also a span.

### Odd Selector Example

The following HTML...

        <div>
          <span>This span is limed!</span>
          <span>This span is not. :(</span>
          <em>This one is odd. </em>
          <span>Sadly, this one is not...</span>
          <span>But this one is!</span>
        </div>
    

...using this CSS...

        span:nth-child(2n+1) {
          background-color: lime;
        }
    

...will result in:


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "Pseudo-classes"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/:first-child "The :first-child CSS pseudo-class represents any element that is the first child element of its parent."