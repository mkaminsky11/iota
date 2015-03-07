## :first-child

### Summary

The `:first-child` [CSS][0] [pseudo-class ][1]represents any element that is the first child element of its parent.

### Syntax

    element:first-child { _style properties_ }
    

### Examples

### Example 1

#### HTML Content

    <div>
      <span>This span is limed!</span>
      <span>This span is not. :(</span>
    </div>
    

#### CSS Content

    span:first-child {
        background-color: lime;
    }
    

... looks like ...

### Example 2 - Using UL

#### HTML Content

    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ul>

#### CSS Content

    li{
      color:red;
    }
    li:first-child{
      color:green;
    }

... looks like ...



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"