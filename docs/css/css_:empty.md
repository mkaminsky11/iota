## :empty

### Summary

The `:empty` [pseudo-class][0] represents any element that has no children at all. Only element nodes and text (including whitespace) are considered. Comments or processing instructions do not affect whether an element is considered empty or not.

### Syntax

    <element>:empty { _style properties_ }
    

### Examples

    .box {
      background: red;
      height: 200px;
      width: 200px;
    }
    
    .box:empty {
      background: lime;
    }
    

    <div ><!-- I will be lime --></div>
    <div >I will be red</div>
    <div >
        <!-- I will be red because of the whitespace around this comment -->
    </div>



[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"