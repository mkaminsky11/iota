## text-decoration-line

### Summary

The `text-decoration-line` CSS property sets what kind of line decorations are added to an element.

Underline and overline decorations are positioned under the text, line-through over it.

* _[Initial value][0]_ `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][1] and [`::first-line`][2]. 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

### Syntax

    [Formal syntax][6]: none [|][7] [ underline [||][8] overline [||][8] line-through [||][8] blink ]
    

    text-decoration-line: none /* This is the only keyword that cannot be mixed with other */
    
    text-decoration-line: underline
    text-decoration-line: overline
    text-decoration-line: line-through
    text-decoration-line: underline overline
    text-decoration-line: overline underline line-through
    
    text-decoration-line: inherit
    

### Values

Accepts **none**, or **one or more** whitespace separated values:

**`none`**

> Produces no text decoration.

**`underline`**

> Each line of text is underlined.

**`overline`**

> Each line of text has a line above it.

**`line-through`**

> Each line of text has a line through the middle.

**`blink __`**

> The text blinks (alternates between visible and invisible). Conforming user agents may simply not blink the text. This value is **deprecated** in favor of [Animations][9].

**`-moz-anchor-decoration `__**

> The text is decorated as an anchor; not suitable for web content.

### Example

### HTML Content

    <p>Here's some text with wavy red underline!</p>

### CSS Content

    p { 
      -moz-text-decoration-line: underline;
      -moz-text-decoration-style: wavy;
      -moz-text-decoration-color: red;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/animation