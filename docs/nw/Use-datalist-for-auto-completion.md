## Use-datalist-for-auto-completion

The Datalist element is used to suggest input values to the user, thereby providing an "autocomplete" feature on form elements. This is especially useful for long lists, such as countries or clothing manufacturers. Rather than scan through the entire list, the input control can suggest some items as soon as the user has typed in some characters. Thus, it behaves as a sort of combobox, possessing both a textbox and list component. Here is how it would appear:

```html
<input type="text" value="" list="fruits" />
<datalist id="fruits">
  <option value="Apple"></option> 
  <option value="Orange"></option> 
  <option value="Peach"></option> 
</datalist>
```

For more demos you can have a look at http://demo.agektmr.com/datalist/.