## direction

### Summary

Set the `direction` CSS property to match the direction of the text: `rtl` for languages written from right-to-left (like Hebrew or Arabic) text and `ltr` for other scripts. This is typically done as part of the document (e.g., using the `dir` attribute in HTML) rather than through direct use of CSS.

The property sets the base text direction of block-level elements and the direction of embeddings created by the [`unicode-bidi`][0] property. It also sets the default alignment of text and block-level elements and the direction that cells flow within a table row.

Unlike the `dir` attribute in HTML, the `direction` property is not inherited from table columns into table cells, since CSS inheritance follows the document tree, and table cells are inside of the rows but not inside of the columns.

The `direction` and [`unicode-bidi`][0] properties are the two only properties which are not affected by the [`all`][1] shorthand.

* _[Initial value][2]_ `ltr` 
* _Applies to_ all elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: ltr [|][7] rtl

    direction: ltr
    direction: rtl
    
    direction: inherit
    

### Values

**`ltr`**

> The initial value of `direction` (that is, if not otherwise specified). Text and other elements go from left to right.

**`rtl`**

> Text and other elements go from right to left

For the `direction` property to have any effect on inline-level elements, the [`unicode-bidi`][0] property's value must be `embed` or `override`.

### Examples

    blockquote {
      direction: rtl;
    }
    

### Specification
Specification
Status
Comment

[CSS Writing Modes Module Level 3  
The definition of 'direction' in that specification.][8]
Candidate Recommendation
No change.

[CSS Level 2 (Revision 1)  
The definition of 'direction' in that specification.][9]
Recommendation
Initial definition.

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari (WebKit)

Basic support
2.0
1.0 (1.7 or earlier)
5.5
9.2
1.3

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
1.0
1.0 (1.0)
6
8
3.1

### See also

* [`unicode-bidi`][0]


[0]: https://developer.mozilla.org/en/docs/Web/CSS/unicode-bidi "The unicode-bidi CSS property together with the direction property relates to the handling of bidirectional text in a document. For example, if a block of text contains both left-to-right and right-to-left text then the user-agent uses a complex Unicode algorithm to decide how to display the text. This property overrides this algorithm and allows the developer to control the text embedding."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/all "The CSS all shorthand property resets all properties, but unicode-bidi and direction to their initial or inherited value."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: http://dev.w3.org/csswg/css3-writing-modes/#direction
[9]: http://www.w3.org/TR/CSS2/visuren.html#direction