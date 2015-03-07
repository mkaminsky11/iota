## ruby-position

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).

* _[Initial value][1]_ `over` 
* _Applies to_ ruby annotations containers 
* _[Inherited][2]_ yes 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: over [|][6] under [|][6] inter-character

    ruby-position: over
    ruby-position: under
    ruby-position: inter-character
    
    ruby-position: inherit
    ruby-position: initial
    ruby-position: unset
    

### Values

**`over`**

> ![Over example](https://mdn.mozillademos.org/files/10251/Screen%20Shot%202015-03-04%20at%2013.02.20.png)Is a keyword indicating that the ruby has to be placed over the main text for horizontal scripts and right to it for vertical scripts.

**`under`**

> ![Under example](https://mdn.mozillademos.org/files/10249/Screen%20Shot%202015-03-04%20at%2013.02.07.png)Is a keyword indicating that the ruby has to be placed under the main text for horizontal scripts and left to it for vertical scripts.

**`inter-character`**

> Is a keyword indicating that the ruby has to be placed between the different characters.

### Examples

This HTML will render differently with each value of `ruby-position`:

    <ruby>
      <rb>超電磁砲</rb>
      <rp>（</rp><rt>レールガン</rt><rp>）</rp>
    </ruby>
    

### Ruby positioned over the text

    ruby {
        ruby-position:over;
    }

This gives the following result:

### Ruby positioned under the text

    ruby {
        ruby-position:under;
    }

This gives the following result:



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."