## text-decoration-style

### Summary

The `text-decoration-style` CSS property defines the style of the lines specified by [`text-decoration-line`][0]. The style applies to all lines, there is no way to define different style for each of the line defined by `text-decoration-line`.

If the specified decoration has a specific semantic meaning, like a line-through line meaning that some text has been deleted, authors are encouraged to denote this meaning using an HTML tag, like [`<del>`][1] or [`<s>`][2]. As browsers can disabled styling in some cases, the semantic meaning won't disappear in such a situation.

* _[Initial value][3]_ `solid` 
* _Applies to_ all elements. It also applies to [`::first-letter`][4] and [`::first-line`][5]. 
* _[Inherited][6]_ no 
* _Media_ [`visual`][7] 
* _[Computed value][8]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: solid [|][10] double [|][10] dotted [|][10] dashed [|][10] wavy
    

    text-decoration-style: solid
    text-decoration-style: double
    text-decoration-style: dotted
    text-decoration-style: dashed
    text-decoration-style: wavy
    
    text-decoration-style: inherit
    

### Values

**`solid double dotted dashed wavy`**

> Is one of the following keywords :
> Keyword
> Description
> Comment
> 
> `solid`
> Draws a single line
> 
> `double`
> Draws a double line
> 
> `dotted`
> Draws a dotted line
> 
> `dashed`
> Draws a dashed line
> 
> `wavy`
> Draws a wavy line
> 
> `-moz-none`__` `
> Do not draw a line
> **Do not use****:** use [`text-decoration-line`][0]`: none` instead
> 
> 

**`inherit`**

> Is a keyword indicating to reuse the value calculated on the parent element.

### Examples

    .example { 
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: red;
    }
    

    <p >This is how it looks.</p>
    



[0]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration-line "The text-decoration-line CSS property sets what kind of line decorations are added to an element."
[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/del "The HTML <del> element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text."
[2]: https://developer.mozilla.org/en/docs/Web/HTML/Element/s "The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[6]: https://developer.mozilla.org/en/docs/CSS/inheritance
[7]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[8]: https://developer.mozilla.org/en/docs/CSS/computed_value
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."