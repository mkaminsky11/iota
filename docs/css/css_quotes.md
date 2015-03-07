## quotes

### Summary

The `quotes` [CSS][0] property indicates how user agents should render quotation marks.

* _[Initial value][1]_ user agent specific 
* _Applies to_ all elements 
* _[Inherited][2]_ yes 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [[<string>][6] [<string>][6]][+][7] [|][8] none

    quotes: none
    quotes: "«" "»"         /* Set _open-quote_ and _close-quote_ to the French quotation marks */
    quotes: "«" "»" "‹" "›" /* Set two levels of quotation marks */
    
    quotes: inherit
    

### Values

**`none`**

> The `open-quote` and `close-quote` values of the [`content`][9] property produce no quotation marks.

**`[<string> <string>]+`**

> One or more pairs of [`<string>`][10] values for `open-quote` and `close-quote`. The first pair represents the outer level of quotation, the second pair is for the first nested level, next pair for third level and so on.

### Examples

    q { quotes: '"' '"' "'" "'" }
    q:before { content: open-quote }
    q:after  { content: close-quote }
    

### Notes

Starting in Firefox 3.5, the initial value of the quotes property can be read using `-moz-[initial][11]` This wasn't possible in earlier versions of Firefox.


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/string
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Plus_(.2B) "Plus multiplier: The previous entity may appear 1 or several times."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/content "The content CSS property is used with the ::before and ::after pseudo-elements to generate content in an element. Objects inserted using the content property are anonymous replaced elements."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/string "The documentation about this has not yet been written; please consider contributing!"
[11]: https://developer.mozilla.org/en/docs/CSS/initial "en-US/docs/CSS/initial"