## :nth-last-of-type

### Summary

The `:nth-last-of-type` CSS [pseudo-class][0] matches an element that has `_a_n+_b_-1` siblings with the same element name after it in the document tree, for a given positive or zero value for `n`, and has a parent element. See [`:nth-child`][1] for a more thorough description of the syntax of its argument.

### Syntax

    element:nth-last-of-type(_a_n + _b_) { _style properties_ }
    

### Last Type Example

The following HTML...

    <div>
      <span>This span is first!</span>
      <span>This span is not. :(</span>
      <em>This one is odd. </em>
      <span>But this one is!</span>
      <strike>This is another type</strike>
      <span>Sadly, this one is not...</span>
    </div>

...using this CSS...

    span:nth-last-of-type(2) {
      background-color: lime;
    }

...will result in:


[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/:nth-child "The :nth-child(an+b) CSS pseudo-class matches an element that has an+b-1 siblings before it in the document tree, for a given positive or zero value for n, and has a parent element."