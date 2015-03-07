## border-image-repeat

### Summary

The `border-image-repeat` CSS property defines how the middle part of a border image is handled so that it can match the size of the border. It has a one-value syntax that describes the behavior of all the sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior.

* _[Initial value][0]_ `stretch` 
* _Applies to_ all elements, except internal table elements when [`border-collapse`][1] is `collapse`. It also applies to [`::first-letter`][2]. 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [ stretch [|][7] repeat [|][7] round ]{1,2}  

    border-image-repeat: _type_                    _  /* One-value syntax */_       E.g. border-image-value: stretch;
    border-image-repeat: _horizontal_ _vertical_       _/* Two-value syntax */       _E.g. border-image-width: round space;
    
    border-image-repeat: inherit
    

### Values

**_type_**

> One of the `stretch`, `repeat`, `round`, or `space` keywords denoting how the image is treated both horizontally and vertically.

**_horizontal_**

> One of the `stretch`, `repeat`, `round`, or `space` keywords denoting how the image is treated horizontally.

**_vertical_**

> One of the `stretch`, `repeat`, `round`, or `space` keywords denoting how the image is treated vertically.

**`stretch`**

> Keyword indicating that the image must be stretched to fill the gap between the two borders.

**`repeat`**

> Keyword indicating that the image must be repeated until it fills the gap between the two borders.

**`round`**

> Keyword indicating that the image must be repeated until it fills the gap between the two borders. If the image doesn't fit after being repeated for an integral number of times, the image is rescaled to fit.

**`space`**

> Keyword indicating that the image must be tiled to fill the area. If the image doesn't fill the area with a whole number of tiles, the extra space is distributed around the tiles.

**`inherit`**

> Keyword indicating that all four values are inherited from their parents' calculated element value.

### Examples

See [`border-image`][8] for examples of what repeat values will do.


[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse "The border-collapse CSS property selects a table's border model. This has a big influence on the look and style of the table cells."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/border-image "The border-image CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases."