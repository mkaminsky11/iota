## :last-of-type

### Summary

The `:last-of-type` [CSS pseudo-class][0] represents the last sibling with the given element name in the list of children of its parent element.

### Syntax

    element:last-of-type { _style properties_ }
    

### Example

To match the last em element inside a `p` element, you can use this:

    p em:last-of-type {
      color: lime;
    }
    

    <p>
      <em>I'm not lime :(</em>
      <strong>I'm not lime :(</strong>
      <em>I'm lime :D</em>
      <strong>I'm also not lime :(</strong>
    </p>
    
    <p>
      <em>I'm not lime :(</em>
      <span><em>I am lime!</em></span>
      <strong>I'm not lime :(</strong>
      <em>I'm lime :D</em>
      <span><em>I am also lime!</em> <strike> I'm not lime </strike></span>
      <strong>I'm also not lime :(</strong>
    </p>

...will result in:


[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"