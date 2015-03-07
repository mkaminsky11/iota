## :last-child

### Summary

The `:last-child` CSS [pseudo-class][0] represents any element that is the last child element of its parent.

### Syntax

    element:last-child { _style properties_ }

### Example

### HTML Content

    <ul>
      <li>This item is not limed.</li>
      <li>Also not this one.</li>
      <li>This item is! :)</li>
    </ul>

### CSS Content

    li:last-child {
        background-color: lime;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "Pseudo-classes"