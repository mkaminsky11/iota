## :disabled

### Summary

The `:disabled` CSS [pseudo-class][0] represents any disabled element. An element is disabled if it can't be activated (e.g. selected, clicked on or accept text input) or accept focus. The element also has an enabled state, in which it can be activated or accept focus.

### Examples

### Example selectors

**input:disabled**

> Selects all disabled inputs

**select.country:disabled**

> Targets a select element with class country that is disabled

### Usage example

The following CSS:

    input[type="text"]:disabled { background: #ccc; }
    

applied to this HTML5 fragment:

    <form action="#">
      <fieldset>
        <legend>Shipping address</legend>
        <input type="text" name="shipping_firstName" disabled>
        <input type="text" name="shipping_lastName" disabled>
        <input type="text" name="shipping_address1" disabled>
        <input type="text" name="shipping_address2" disabled>
        <input type="text" name="shipping_zipCode" disabled>
        <input type="text" name="shipping_town" disabled>
      </fieldset>
      <fieldset>
        <legend>Billing address</legend>
        <label>
          <input type="checkbox" name="billing_is_shipping" value="true" checked> 
          Billing address is the same as shipping address
        </label>
        <input type="text" name="billing_firstName" disabled>
        <input type="text" name="billing_lastName" disabled>
        <input type="text" name="billing_address1" disabled>
        <input type="text" name="billing_address2" disabled>
        <input type="text" name="billing_zipCode" disabled>
        <input type="text" name="billing_town" disabled>
      </fieldset>
    </form>
    

Will result in all text elements in the billing fieldset having a light grey background.


[0]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"