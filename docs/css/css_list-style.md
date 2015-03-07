## list-style

### Summary

The `list-style` CSS property is a shorthand property for setting [`list-style-type`][0], [`list-style-image`][1] and [`list-style-position`][2].

* _[Initial value][3]_ the concatenation of the initial values of its longhand properties:
  * `list-style-type`: `disc`
  * `list-style-position`: `outside`
  * `list-style-image`: `none` 
* _Applies to_ list items 
* _[Inherited][4]_ yes 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ as each of the properties of the shorthand:
  * `list-style-image`: none or the image with its URI made absolute
  * `list-style-position`: as specified
  * `list-style-type`: as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][7]: [<'list-style-type'>][8] [||][9] [<'list-style-position'>][10] [||][9] [<'list-style-image'>][11]

### Values

Accepts one, two or three keywords in any order.

**`<'list-style-type'>`**

> See [`list-style-type`][0]

**`<'list-style-image'>`**

> See [`list-style-image`][1]

**`<'list-style-position'>`**

> See [`list-style-position`][2]

### Examples

[View the live example][12]

    List 1
    <ul >
      <li>List Item1</li>
      <li>List Item2</li>
      <li>List Item3</li>
    </ul>
    List 2
    <ul >
      <li>List Item A</li>
      <li>List Item B</li>
      <li>List Item C</li>
    </ul>
      
    

    .one { list-style: circle; }
    

    .two { list-style: square inside; }



[0]: https://developer.mozilla.org/en/docs/Web/CSS/list-style-type "The list-style-type CSS property specifies appearance of a list item element. As it is the only one which defaults to display:list-item, this is usually a <li> element, but can be any element with this display value."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/list-style-image "The list-style-image CSS property sets the image that will be used as the list item marker."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/list-style-position "The list-style-position CSS property specifies the position of the marker box in the principal block box."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/list-style-type "disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[10]: https://developer.mozilla.org/en/docs/CSS/list-style-position "inside | outside"
[11]: https://developer.mozilla.org/en/docs/CSS/list-style-image "<uri> | none"
[12]: /samples/cssref/list-style