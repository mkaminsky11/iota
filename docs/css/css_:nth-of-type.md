## :nth-of-type

### Summary

The `:nth-of-type` CSS [pseudo-class][0] matches an element that has `_a_n+_b_-1` siblings with the same element name before it in the document tree, for a given positive or zero value for `n`, and has a parent element. See [`:nth-child`][1] for a more thorough description of the syntax of its argument. This is a more flexible and useful pseudo selector if you want to ensure you're selecting the same type of tag no matter where it is inside the parent element, or what other different tags appear before it.

### Syntax

    element:nth-of-type(_a_n + _b_) { _style properties_ }
    

### Example

This example causes the text alignment of paragraphs to alternate between left and right.

### CSS Content

    p:nth-of-type(2n+1) { text-align: left; }
    p:nth-of-type(2n) { text-align: right; }

### HTML Content

    <div>
        <p>First paragraph (left aligned)</p>
        <p>Second paragraph (right aligned)</p>
        <p>Third paragraph (left aligned)</p>
    </div>



[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/:nth-child "The :nth-child(an+b) CSS pseudo-class matches an element that has an+b-1 siblings before it in the document tree, for a given positive or zero value for n, and has a parent element."