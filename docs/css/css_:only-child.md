## :only-child

### Summary

The `:only-child` CSS [pseudo-class][0] represents any element which is the only child of its parent. This is the same as `:first-child:last-child` or `:nth-child(1):nth-last-child(1)`, but with a lower specificity.

### Syntax

    parent child:only-child {
      property: value;
    } 
    

### Examples

### Basic example

    span:only-child {
      color: red;
    }
    

    <div>
      <span>This span is the only child of its father</span>
    </div>
    
    <div>
      <span>This span is one of the two children of its father</span>
      <span>This span is one of the two children of its father</span>
    </div> 
    

#### Result

### A list example

    li li {
      list-style-type: disc;
    }
    li:only-child {
      color: #6699ff;
      font-style: italic;
      list-style-type: square;
    }

    <ol>
      <li>First
        <ul>
          <li>This is only child element
        </ul>
      </li>
      <li>Second
        <ul>
          <li>This list has two elements
          <li>This list has two elements
        </ul>
      </li>
      <li>Third
        <ul>
          <li>This list has three elements
          <li>This list has three elements
          <li>This list has three elements
        </ul>
      </li>
    <ol>
    

#### Result



[0]: https://developer.mozilla.org/en/docs/CSS/Pseudo-classes "Pseudo-classes"