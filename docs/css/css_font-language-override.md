## font-language-override

### Summary

The **`font-language-override`** CSS property controls the usage of language-specific glyphs in a typeface.

By default, browsers use the HTML global attribute `lang` to determine the language of the text contained in an element; with this information, they use special glyphs designed for that language. For example, a lot of font have a special character for the digraph `fi`, making the dot on the `i` merge with the previous character. This ligature should not be used when displaying turkic language as they have two i (`i` and `ı`), one with a dot and one dotless: using the ligature would transform a dotted i in a dotless i.

Sometimes the author want to override this language: like if the typeface doesn't know about the azeri language, that, like the turkish one, has a dotless i. In that case, the `font-language-override` can be used to force the use of the turkish glyphs, better suited for azeri than the default one.

* _[Initial value][0]_ `normal` 
* _Applies to_ all elements 
* _[Inherited][1]_ yes 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: normal [|][5] [<string>][6]

    font-language-override: normal
    font-language-override: "TRK"
    
    font-language-override: initial
    font-language-override: inherit
    font-language-override: unset
    

### Values

**`normal`**

> This keyword forces the browser to use glyphs defined for the given language in the font.

**`<string>`**

> This keyword forces the browser to use the language defined by the string. The values are the [OpenType language system][7] strings.

### Examples

    p {
      font-language-override: none;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[6]: https://developer.mozilla.org/en/docs/CSS/string
[7]: http://www.microsoft.com/typography/otspec/languagetags.htm