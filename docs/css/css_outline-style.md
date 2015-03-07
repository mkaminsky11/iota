## outline-style

### Summary

The `outline-style` CSS property is used to set the style of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.

It is often more convenient to use the shortcut property [`outline`][0] instead of` outline-style`,` outline-width `and` outline-color`.

* _[Initial value][1]_ `none` 
* _Applies to_ all elements 
* _[Inherited][2]_ no 
* _Media_ [`visual, interactive`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: auto [|][6] [<br-style>][7]
    

    outline-style: auto
    
    outline-style: none
    outline-style: dotted
    outline-style: dashed
    outline-style: solid
    outline-style: double
    outline-style: groove
    outline-style: ridge
    outline-style: inset
    outline-style: outset
    
    outline-style: inherit
    

### Values

`<br-style> `can be any of the following:

**none**
  

> No outline ([`outline-width`][8] is` 0`).

**dotted**
  

> The outline is a series of dots.

**dashed**
  

> The outline is a series of short line segments.

**solid**
  

> The outline is a single line.

**double**
  

> The outline is two single lines. The [`outline-width`][8] is the sum of the two lines and the space between them.

**groove**
  

> The outline looks as though it were carved into the canvas.

**ridge**
  

> The opposite of` groove`: the outline looks as though it were coming out of the canvas.

**inset**
  

> The outline makes the box look as though it were embeded in the canvas.

**outset**
  

> The opposite of` inset`: the outline makes the box look as though it were coming out of the canvas.

### Examples

    .example {  /* make the outline a 3D groove style */
       outline-style: groove;        /* same result as "outline: groove" */ 
    }
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/outline "The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style, outline-width and outline-color in a single declaration. In most cases the use of this shortcut is preferable and more convenient."
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[7]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-br-style "none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/outline-width "The outline-width CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:"