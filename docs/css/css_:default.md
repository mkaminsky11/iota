## :default

### Summary

The `:default` [CSS][0] [pseudo-class][1] represents any user interface element that is the default among a group of similar elements.

For example, the default button in a set of buttons could be selected using this pseudo-class.

User interface elements that permit multiple selections may have multiple defaults set in order to initially appear with multiple items selected. In that case all defaults can be represented using the `:default` pseudo-class.

### Syntax

    :default { _style properties_ }
    

### Examples

    :default
    {
        background-color: lime;
    }
    

...where...

     <form method="get">
      <p><input type="submit" ></p>
      <p><input type="submit" ></p>
      <p><input type="reset"></p>
     </form>
    

This example causes the background color to be `lime` for the default submit button in the form.


[0]: https://developer.mozilla.org/en/docs/CSS "https://developer.mozilla.org/en/docs/CSS"
[1]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"