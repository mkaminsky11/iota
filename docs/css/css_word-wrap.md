## word-wrap

### Summary

The `word-wrap` [CSS][0] property is used to specify whether or not the browser may break lines within words in order to prevent overflow (in other words, force wrapping) when an otherwise unbreakable string is too long to fit in its containing box.

**Note:** Originally a Microsoft (unprefixed) proprietary extension, the `word-wrap` property has been renamed [`overflow-wrap`][1] in the current draft of the CSS3 Text specification. `word-wrap` is now considered an "alternate name" for `overflow-wrap`. Stable builds of Google Chrome and Opera support the new syntax.

* _[Initial value][2]_ `normal` 
* _Applies to_ all elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: normal [|][7] break-word

    word-wrap: normal
    word-wrap: break-word
    
    word-wrap: inherit
    

### Values

**`normal`**

> Indicates that lines may only break at normal word break points.

**`break-word`**

> Indicates that normally unbreakable words may be broken at arbitrary points if there are no otherwise acceptable break points in the line.

### Examples

    p { width: 13em; background: gold; }

FStrPrivFinÄndG (Gesetz zur Änderung des Fernstraßenbauprivatfinanzierungsgesetzes und straßenverkehrsrechtlicher Vorschriften)

    p { width: 13em; background: gold; word-wrap: break-word; }

FStrPrivFinÄndG (Gesetz zur Änderung des Fernstraßenbauprivatfinanzierungsgesetzes und straßenverkehrsrechtlicher Vorschriften)


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/overflow-wrap "REDIRECT https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/CSS/word-wrap"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."