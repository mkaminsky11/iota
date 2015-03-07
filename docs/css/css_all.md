## all

### Summary

The CSS_all_ shorthand property resets all properties, but [`unicode-bidi`][0] and [`direction`][1] to their initial or inherited value.

* _[Initial value][2]_ There is no practical initial value for it. 
* _Applies to_ all elements 
* _[Inherited][3]_ no 
* _Media_ There is no practical media for it. 
* _[Computed value][4]_ as the specified value applies to each property this is a shorthand for. 
* _Animatable_ as each of the properties of the shorthand (all properties but [`unicode-bidi`][0] and [`direction`][1]) 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: initial [|][6] inherit [|][6] unset

    all: initial
    all: inherit
    all: unset
    

### Values

**`initial`**

> This keyword indicates to change all the properties applying to the element or the element's parent to their initial value. [`unicode-bidi`][0] and [`direction`][1] values are not affected.

**`inherit`**

> This keyword indicates to change all the properties applying to the element or the element's parent to their parent value. [`unicode-bidi`][0] and [`direction`][1] values are not affected.

**`unset`**

> This keyword indicates to change all the properties applying to the element or the element's parent to their parent value if they are inheritable or to their initial value if not. [`unicode-bidi`][0] and [`direction`][1] values are not affected.

### Examples

**HTML**

    <blockquote >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.

**CSS**

    html {
      font-size: small;
      background-color: #F0F0F0;
      color: blue;
    }
    
    blockquote {
      background-color: skyblue;
      color: red;
    }
    

Results in:

#### No `all` property

The [`<blockquote>`][7] uses the browsers default styling together with a specific background and text color. It also behaves as a _block_ element: the text that follows it is beneath it.

#### `all:unset`

The [`<blockquote>`][7] doesn't use the browser default styling: it is an _inline_ element now (initial value), its [`background-color`][8] is `transparent` (initial value), but its [`font-size`][9] is still `small` (inherited value) and its [`color`][10] is `blue` (inherited value).

#### `all:initial`

The [`<blockquote>`][7] doesn't use the browser default styling: it is an _inline_ element now (initial value), its [`background-color`][8] is `transparent` (initial value), its [`font-size`][9] is  `normal` (initial value) and its [`color`][10] is `black` (initial value).

#### `all:inherit`

The [`<blockquote>`][7] doesn't use the browser default styling: it is a _block_ element now (inherited value from its containing [`<div>`][11]), its [`background-color`][8] is `transparent` (inherited value), its [`font-size`][9] is `small` (inherited value) and its [`color`][10] is `blue` (inherited value).


[0]: https://developer.mozilla.org/en/docs/Web/CSS/unicode-bidi "The unicode-bidi CSS property together with the direction property relates to the handling of bidirectional text in a document. For example, if a block of text contains both left-to-right and right-to-left text then the user-agent uses a complex Unicode algorithm to decide how to display the text. This property overrides this algorithm and allows the developer to control the text embedding."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/direction "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[7]: https://developer.mozilla.org/en/docs/Web/HTML/Element/blockquote "The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element, either through a color value or the keyword transparent."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/font-size "The font-size CSS property specifies the size of the font – specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of em and ex length units."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[11]: https://developer.mozilla.org/en/docs/Web/HTML/Element/div "The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate."