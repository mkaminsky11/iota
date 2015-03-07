## word-spacing

### Summary

The `word-spacing` CSS property specifies spacing behavior between tags and words.

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][1] and [`::first-line`][2]. 
* _[Inherited][3]_ yes 
* _Percentages_ refer to the width of the affected glyph 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ an optimum, minimum, and maximum value, each consisting of either an absolute length, a percentage, or the keyword `normal` 
* _Animatable_ yes, as a [length][6] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: normal [|][8] [<length>][9]
    

    word-spacing: normal    /* Keyword value */
    word-spacing: 3px       /* <length> values */
    word-spacing: 0.3em
    
    word-spacing: inherit
    

### Values

**`normal`**

> The normal inter-word space, as defined by the current font and/or the browser.

**`<length>`**

> See [`<length>`][10] value for possible units.

### Examples

The following CSS code:

    #mozdiv1 {
      word-spacing: 15px;
    }
    
    #mozdiv2 {
      word-spacing: 5em;
    }

will style two [`<div>`][11] tags containing text as shown here:

![example.png](/@api/deki/files/6103/=example.png)


[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[11]: https://developer.mozilla.org/en/docs/Web/HTML/Element/div "The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate."