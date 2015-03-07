## :first-of-type

### Summary

The `:first-of-type` CSS [pseudo-class][0] represents the first sibling of its type in the list of children of its parent element.

### Syntax

    element:first-of-type { _style properties_ }
    

### Example

This example shows how the universal selector is assumed when no simple selector is written.

    div :first-of-type {
      background-color: lime;
    }

    <div>
      <span>This span is first!</span>
      <span>This span is not. :(</span>
      <span>what about this <em>nested element</em>?</span>
      <strike>This is another type</strike>
      <span>Sadly, this one is not...</span>
    </div>
    

...will result in:


[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"