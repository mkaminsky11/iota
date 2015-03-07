## list-style-image

### Summary

The `list-style-image` [CSS][0] property sets the image that will be used as the list item marker.

It is often more convenient to use the shorthand [`list-style`][1].

* _[Initial value][2]_ `none` 
* _Applies to_ list items 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ none or the image with its URI made absolute 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [<uri>][7] [|][8] none
    

    list-style-image: none
    list-style-image: url('starsolid.gif')
    
    list-style-image: inherit
    

### Values

**`<uri>`**

> Location of image to use as the marker.

**`none`**

> Specifies that no image is used as the marker. If this value is set, the marker defined in [`list-style-type`][9] will be used instead.

### Examples

[View the live example][10]

### HTML Content

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    

### CSS Content

    ul { list-style-image: url("https://developer.mozilla.org/samples/cssref/list-style/starsolid.gif") }



[0]: https://developer.mozilla.org/en/docs/Web/CSS
[1]: https://developer.mozilla.org/en/docs/Web/CSS/list-style "The list-style CSS property is a shorthand property for setting list-style-type, list-style-image and list-style-position."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-uri "Tooltip not found in DB."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/list-style-type "The list-style-type CSS property specifies appearance of a list item element. As it is the only one which defaults to display:list-item, this is usually a <li> element, but can be any element with this display value."
[10]: /samples/cssref/list-style