## :not

### Summary

The **negation **[CSS pseudo-class][0], `:not(X)`, is a functional notation taking a simple selector _X_ as an argument. It matches an element that is not represented by the argument. _X_ must not contain another negation selector.

The [specificity][1] of the `:not` pseudo-class is the specificity of its argument. The `:not` pseudo-class does not add to the selector specificity, unlike other pseudo-classes.

**Notes:**

* Useless selectors can be written using this pseudo-class. E.g. `:not(*)` matching any element which is not any element will never be applied.
* It is possible to rewrite other rules. E.g. `foo:not(bar)` will match the same element as the simple `foo`. Nevertheless the [specificity][1] of the first one is higher.
* `:not(foo){} `will match anything that isn't `foo`, **including `html` and `body`**.

### Syntax

    :not(selector) { _style properties_ }

### Examples

### Usage Example

    p:not(.classy) { color: red; }
    body :not(p) { color: green; }

...where...

    <p>Some text.</p>
    <p >Some other text.</p>
    <span>One more text<span>
    

...should look like...



[0]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/CSS/Specificity "Specificity"