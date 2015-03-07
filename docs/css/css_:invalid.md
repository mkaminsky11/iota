## :invalid

### Summary

The `:invalid` CSS [pseudo-class][0] represents any [`<input>`][1] or [`<form>`][2] element whose content fails to [validate][3] according to the input's type setting. This allows you to easily have invalid fields adopt an appearance that helps the user identify and correct errors.

By default, Gecko does not apply a style to the `:invalid` pseudo-class. However it does apply a style (a red "glow" using the [`box-shadow`][4] property) to the [`:-moz-ui-invalid`][5] pseudo-class, which applies in a subset of cases for `:invalid`.

You can disable the glow using the following CSS, or completely override it to alter the appearance of invalid fields.

    :invalid {
      box-shadow: none;
    }
    
    :-moz-submit-invalid {
      box-shadow: none;
    }
    
    :-moz-ui-invalid {
      box-shadow:none;
    }
    

### Notes

#### Radio buttons

If any of the radio buttons in a group (that is, with the same value for their `name` attribute) is `required`, the `:invalid` pseudo-class is applied to all of them if none of the buttons in the group are selected.

### Example

This example presents a simple form that colors elements green when they validate and red when they don't.

### HTML Content

    <form>
      <label>Enter a URL:</label>
      <input type="url" />
      <br />
      <br />
      <label>Enter an email address:</label>
      <input type="email" required/>
    </form>

### CSS Content

    input:invalid {
      background-color: #ffdddd;
    }
      
    input:valid {
      background-color: #ddffdd;
    }
      
    input:required {
      border-color: #800000;
      border-width: 3px;
    }



[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user. The semantics of an <input> varies considerably depending on the value of its type attribute."
[2]: https://developer.mozilla.org/en/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls to submit information to a web server."
[3]: https://developer.mozilla.org/en/HTML/HTML5/Constraint_validation "en/HTML/HTML5/Constraint_validation"
[4]: https://developer.mozilla.org/en/docs/Web/CSS/box-shadow "The box-shadow CSS property describes one or more shadow effects as a comma-separated list."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/:-moz-ui-invalid "The :-moz-ui-invalid CSS pseudo-class represents any validated form element whose value isn't valid based on their validation constraints, in certain circumstances. This pseudo-class is applied according to the following rules:"