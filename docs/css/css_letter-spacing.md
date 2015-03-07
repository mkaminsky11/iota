## letter-spacing

### Summary

The `letter-spacing` CSS property specifies spacing behavior between text characters.

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements. It also applies to [`::first-letter`][1] and [`::first-line`][2]. 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ an optimum value consisting of either an absolute length or the keyword `normal` 
* _Animatable_ yes, as a [length][6] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: normal [|][8] [<length>][9]
    

    letter-spacing: normal
    
    letter-spacing: 0.3em
    letter-spacing: 3px
    letter-spacing: .3px
    
    letter-spacing: inherit
    

### Values

**`normal`**

> The spacing is the normal spacing for the current font. This value allows the user agent to alter the space between characters in order to justify text. That's the difference to the length value` 0`.

**`<length>`**

> Indicates inter-character space **_in addition to_** the default space between characters. Values may be negative, but there may be implementation-specific limits. User agents may not further increase or decrease the inter-character space in order to justify text.  
> See [`<length>`][10] values for possible units.

###   
Letter spacing examples

### HTML Content

    <p > letter spacing </p>
    <p > letter spacing </p>
    <p > letter spacing </p>
    <p > letter spacing </p>
    

### CSS Content

    .first-example { letter-spacing: 0.4em; }
    .second-example { letter-spacing: 1em; }
    .third-example { letter-spacing: -0.05em; }
    .fourth-example { letter-spacing: 6px; }
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[10]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"