## :enabled

### Summary

The `:enabled` CSS [pseudo-class][0] represents any enabled element. An element is enabled if it can be activated (e.g. selected, clicked on or accept text input) or accept focus. The element also has an disabled state, in which it can't be activated or accept focus.

### Example

The following will make the text color a medium green shade when enabled, and a gray shade when disabled. This allows for feedback to the user of which elements are interactable or not.

The following HTML...

        <form action="url_of_form">
          <label for="FirstField">First field (enabled):</label> <input type="text"  value="Lorem"><br />
          <label for="SecondField">Second field (disabled):</label> <input type="text"  value="Ipsum" disabled="disabled"><br />
          <input type="submit" value="Submit" />
        </form>
      

...used with this CSS...

        input:enabled {
          color: #22AA22;
        }
        input:disabled {
          color: #D9D9D9;
        }
      

...will result in:
Note that the color of the text on the button is also green, as the button is enabled too.


[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"