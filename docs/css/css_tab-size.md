## tab-size

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `tab-size` CSS property is used to customize the width of a tab (`U+0009`) character.

* _[Initial value][1]_ `8` 
* _Applies to_ block containers 
* _[Inherited][2]_ yes 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ the specified integer or an absolute length 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [|][6] <length"><integer> [|][7] <length>
    

    tab-size: 4
    tab-size: 0
    tab-size: 8
    
    tab-size: inherit
    

### Values

**[`<integer>`][8]**

> The number of spaces in a tab. Must be positive.

**[`<length>`][9]**

> The width of a tab. Must be positive.

**`inherit`**

> Inherits from the parent element.

### Examples

    pre {
      tab-size: 4; /* Set tab size to 4 spaces */
    }
    

    pre {
      tab-size: 0; /* Remove indentation */
    }
    

    pre {
      tab-size: 99; /* Don't use tabs! */
    }
    



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-integer> <a title= "| <length>"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"