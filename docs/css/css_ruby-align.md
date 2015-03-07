## ruby-align

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.

* _[Initial value][1]_ `space-around` 
* _Applies to_ ruby bases, ruby annotations, ruby base containers, ruby annotation containers 
* _[Inherited][2]_ yes 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: start [|][6] center [|][6] space-between [|][6] space-around

    ruby-align: start
    ruby-align: center
    ruby-align: space-between
    ruby-align: space-around
    
    ruby-align: inherit
    ruby-align: initial
    ruby-align: unset
    

### Values

**`start`**

> Is a keyword indicating that the ruby will be aligned with the start of the base text.

**`center`**

> Is a keyword indicating that the ruby will be aligned at the middle of the base text

**`space-between`**

> Is a keyword indicating that the extra space will be distributed between the elements of the ruby.

**`space-around`**

> Is a keyword indicating that the extra space will be distributed between the elements of the ruby, and around it.

### Examples

This HTML will render differently with each value of `ruby-align`:

    <ruby>
      <rb>This is a long text to check</rb>
      <rp>（</rp><rt>short ruby</rt><rp>）</rp>
    </ruby>
    

### Ruby aligned at the start of the base text

    ruby {
        ruby-align:start;
    }

This gives the following result:

### Ruby aligned at the center of the base text

    ruby {
        ruby-align:center;
    }

This gives the following result:

### Extra space distributed between ruby elements

    ruby {
        ruby-align:space-between;
    }

This gives the following result:

### Extra space distributed between and around ruby element

    ruby {
        ruby-align:space-around;
    }

This gives the following result:



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."