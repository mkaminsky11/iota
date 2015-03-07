## list-style-position

### Summary

The `list-style-position` [CSS][0] property specifies the position of the marker box in the principal block box.

It is often more convenient to use the shorthand [`list-style`][1].

* _[Initial value][2]_ `outside` 
* _Applies to_ list items 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: inside [|][7] outside

    list-style-position: inside
    list-style-position: outside
    
    list-style-position: inherit
    

### Values

**`outside`**

> The marker box is outside the principal block box.

**`inside`**

> The marker box is the first inline box in the principal block box, after which the element's content flows.

### Examples

[View the live example][8]

    .one {
      list-style:url(starsolid.gif) inside;
    }
    
    .two {
      list-style-position: outside;
      list-style-type: circle;
    }
    
    .three {
      list-style-image: url(starsolid.gif);
      list-style-position: inherit;
    }



[0]: https://developer.mozilla.org/en/docs/Web/CSS
[1]: https://developer.mozilla.org/en/docs/Web/CSS/list-style "The list-style CSS property is a shorthand property for setting list-style-type, list-style-image and list-style-position."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: /samples/cssref/list-style