## hyphens

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `hyphens` [CSS][1] property tells the browser how to go about splitting words to improve the layout of text when line-wrapping. On HTML, the language is determined by the `lang` attribute: browsers will hyphenate only if this attribute is present and if an appropriate hyphenation dictionary is available. On XML, the `xml:lang` attribute must be used.

**Note:** The rules defining how hyphenation is performed are not explicitly defined by the specification, so the exact hyphenation may vary from browser to browser.

* _[Initial value][2]_ `manual` 
* _Applies to_ all elements 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: none [|][7] manual [|][7] auto
    

    hyphens: none
    hyphens: manual
    hyphens: auto
    
    hyphens: inherit
    

### Values

**`none`**

> Words are not broken at line breaks, even if characters inside the words suggest line break points. Lines will only wrap at whitespace.

**`manual`**

> Words are broken for line-wrapping only where characters inside the word suggest line break opportunities. See [Suggesting line break opportunities][8] for details.

**`auto`**

> The browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses to use. Suggested line break opportunities, as covered in [Suggesting line break opportunities][8], should be preferred over automatically selecting break points whenever possible.

**Note:** The `auto` setting's behavior depends on the language being properly tagged so that the appropriate hyphenation rules can be selected. You must specify a language using the `lang` HTML attribute in order to guarantee that automatic hyphenation is applied in the language of your choice.

### Suggesting line break opportunities

There are two Unicode characters that can be used to manually specify potential line break points within text:

**U+2010 (HYPHEN)**

> The "hard" hyphen character indicates a visible line break opportunity. Even if the line is not actually broken at that point, the hyphen is still rendered.

**U+00AD (SHY)**

> An invisible, "soft" hyphen. This character is not rendered visibly; instead, it suggests a place where the browser might choose to break the word if necessary. In HTML, you can use `&shy;` to insert a soft hyphen.

### Example

This CSS snippet creates three classes, one for each possible configuration of the `hyphens` property.

    <ul>
      <li><code>none</code>: no hyphen; overflow if needed
        <p lang="en" >An extreme&shy;ly long English word</p>
      </li>  
      <li><code>manual</code>: hyphen only at &amp;hyphen; or &amp;shy; (if needed)
        <p lang="en" >An extreme&shy;ly long English word</p>
      </li>
      <li><code>auto</code>: hyphen where the algo is deciding (if needed)
        <p lang="en" >An extreme&shy;ly long English word</p>
      </li>
    </ul>
    

    p { 
      width: 55px;
      border: 1px solid black;
     }
    p.none {
      -moz-hyphens: none;
      hyphens: none;
    }
    p.manual {
      -moz-hyphens: manual;
      hyphens: manual;
    }
    p.auto {
      -moz-hyphens: auto;
      hyphens: auto;
    }
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: #Suggesting_line_break_opportunities