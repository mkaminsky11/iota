## attr

### Summary

The `attr()` [CSS][0] function is used to retrieve the value of an attribute of the selected element and use it in the style sheet. It can be used on pseudo-elements too and, in this case, the value of the attribute on the [pseudo-element][1]'s originated element is returned.

The `attr()` function can be used with any CSS property, but support for properties other than [`content`][2] is __.

### Syntax

    [Formal syntax][3]: attr( attribute-name <type-or-unit>? [, <fallback> ]? )
    

### Values

**`attribute-name`**

> Is the name of an attribute on the HTML element referenced in the CSS.

**`<type-`or-unit\> __**

> Is a keyword representing either the type of the attribute's value, or its unit, as in HTML some attributes have implicit units. If the use of `<type-or-unit>` as a value for the given attribute is invalid, the `attr()` expression will be invalid too. If omitted, it defaults to `string`. The list of valid values are:
> Keyword
> Associated type
> Comment
> Default value
> 
> `string`
> [`<string>`][4]
> The attribute value is treated as a CSS [`<string>`][4].  It is NOT reparsed, and in particular the characters are used as-is instead of CSS escapes being turned into different characters.
> An empty string
> 
> `color` __
> [`<color>`][5]
> The attribute value is parsed as a hash (3- or 6-value hash) or a keyword. It must be a valid CSS [`<string>`][4] value.  
> Leading and trailing spaces are stripped.
> `currentColor`
> 
> `url` __
> [`<uri></uri>`][6]
> The attribute value is parsed as a string that is used inside a CSS `url()`function.  
> Relative URL are resolved relatively to the original document, not relatively to the style sheet.  
> Leading and trailing spaces are stripped.
> The url `about:invalid` that points to a non-existent document with a generic error condition.
> 
> `integer` __
> [`<integer>`][7]
> The attribute value is parsed as a CSS [`<integer>`][7]. If it is not valid, that is not an integer or out of the range accepted by the CSS property, the default value is used.  
> Leading and trailing spaces are stripped.
> `0`, or, if `0` is not a valid value for the property, the property's minimum value.
> 
> `number` __
> [`<number>`][8]
> The attribute value is parsed as a CSS [`<number>`][8]. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.  
> Leading and trailing spaces are stripped.
> `0`, or, if `0` is not a valid value for the property, the property's minimum value.
> 
> `length` __
> [`<length>`][9]
> The attribute value is parsed as a CSS [`<length>`][9] dimension, that is including the unit (e.g. `12.5em`). If it is not valid, that is not a length or out of the range accepted by the CSS property, the default value is used.  
> If the given unit is a relative length, `attr()`computes it to an absolute length.  
> Leading and trailing spaces are stripped.
> `0`, or, if `0` is not a valid value for the property, the property's minimum value.
> 
> `em`, `ex`, `px`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `mm`, `cm`, `in`, `pt`, or `pc` __
> [`<length>`][9]
> The attribute value is parsed as a CSS [`<number>`][8], that is without the unit (e.g. `12.5`), and interpreted as a [`<length>`][9] with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.  
> If the given unit is a relative length, `attr()`computes it to an absolute length.  
> Leading and trailing spaces are stripped.
> `0`, or, if `0` is not a valid value for the property, the property's minimum value.
> 
> `angle` __
> [`<angle>`][10]
> The attribute value is parsed as a CSS [`<angle>`][10] dimension, that is including the unit (e.g. `30.5deg`). If it is not valid, that is not an angle or out of the range accepted by the CSS property, the default value is used.  
> Leading and trailing spaces are stripped.
> `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.
> 
> `deg`, `grad`, `rad` __
> [`<angle>`][10]
> The attribute value is parsed as a CSS [`<number>`][8], that is without the unit (e.g. `12.5`), and interpreted as an [`<angle>`][10] with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.  
> Leading and trailing spaces are stripped.
> `0deg`, or, if `0deg` is not a valid value for the property, the property's minimum value.
> 
> `time` __
> [`<time>`][11]
> The attribute value is parsed as a CSS [`<time>`][11] dimension, that is including the unit (e.g. `30.5ms`). If it is not valid, that is not a time or out of the range accepted by the CSS property, the default value is used.  
> Leading and trailing spaces are stripped.
> `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.
> 
> `s`, `ms` __
> [`<time>`][11]
> The attribute value is parsed as a CSS [`<number>`][8], that is without the unit (e.g. `12.5`), and interpreted as an[`<time>`][11] with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.  
> Leading and trailing spaces are stripped.
> `0s`, or, if `0s` is not a valid value for the property, the property's minimum value.
> 
> `frequency` __
> [`<frequency>`][12]
> The attribute value is parsed as a CSS [`<frequency>`][12] dimension, that is including the unit (e.g. `30.5kHz`). If it is not valid, that is not a frequency or out of the range accepted by the CSS property, the default value is used.
> `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.
> 
> `Hz`, `kHz` __
> [`<frequency>`][12]
> The attribute value is parsed as a CSS [`<number>`][8], that is without the unit (e.g. `12.5`), and interpreted as a [`<frequency>`][12] with the specified unit. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.  
> Leading and trailing spaces are stripped.
> `0Hz`, or, if `0Hz` is not a valid value for the property, the property's minimum value.
> 
> `%` __
> [`<percentage>`][13]
> The attribute value is parsed as a CSS [`<number>`][8], that is without the unit (e.g. `12.5`), and interpreted as a [`<percentage>`][13]. If it is not valid, that is not a number or out of the range accepted by the CSS property, the default value is used.  
> If the given value is used as a length, `attr()`computes it to an absolute length.  
> Leading and trailing spaces are stripped.
> `0%`, or, if `0%` is not a valid value for the property, the property's minimum value.
> 
> 

**`<fallback>` __**

> The value to be used if the associated attribute is missing or contains an invalid value. The fallback value must be valid where `attr()` is used, even if it is not used, and must not contain another `attr()` expression. If `attr()` is not the sole component value of a property, its `<fallback>` value must be of the type defined by `<type-or-unit>`. If not set, CSS will use the default value defined for each `<type-or-unit>`.

### Examples

    p::before {
      content: attr(data-foo) " ";
    }
    

    <p data-foo="hello">world</p>
    

### Result



[0]: https://developer.mozilla.org/en/docs/Web/CSS
[1]: https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements
[2]: https://developer.mozilla.org/en/docs/Web/CSS/content "The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element. Objects inserted using the content property are anonymous replaced elements."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/Value_definition_syntax
[4]: https://developer.mozilla.org/en/docs/Web/CSS/string "The documentation about this has not yet been written; please consider contributing!"
[5]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/uri "The documentation about this has not yet been written; please consider contributing!"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/angle "The documentation about this has not yet been written; please consider contributing!"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/time "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/frequency "The documentation about this has not yet been written; please consider contributing!"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"