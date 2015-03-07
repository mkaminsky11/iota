## counter-reset

### Summary

The `counter-reset` [CSS][0] property is used to reset [CSS Counters][1] to a given value.

* _[Initial value][2]_ `none` 
* _Applies to_ all elements 
* _[Inherited][3]_ no 
* _Media_ [`all`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [[<custom-ident>][7] [<integer>][8][?][9]][+][10] [|][11] none
    

    counter-reset: counter-name        /* Set counter-name to 0 */
    counter-reset: counter-name -1     /* Set counter-name to -1 */
    counter-reset: counter1 1 counter2 4 /* Set counter1 to 1, and counter2 to 4 */
    
    counter-reset: none                /* Cancel any reset that could have been set in less specific rules */
    
    counter-reset: inherit
    

### Values

**[`<custom-ident>`][12]**

> The name of the counter to increment. This identifier is composed by a combination of case-insensitive letters `a` to `z`, numbers `0` to `9`, underscores (`_`), and/or dashes (`-`). The first non-dash character must be a letter (that is, no number at the beginning of it, even if preceded by a dash.) Also, two dashes are forbidden at the beginning of the identifier. It can't be `none`, `unset`, `initial`, or `inherit` in any combination of cases.

**[`<integer>`][13]**

> The value to reset the counter to on each occurrence of the element. Defaults to `0` if not given.

**`none`**

> Is a keyword indicating that no counter reset is to be performed. It can be used to hide `counter-reset` defined in less specific rules.

You may specify as many counters to reset as you want, each separated by a space.

### Examples

    h1 {
      counter-reset: chapter section 1 page;
      /* Sets the chapter and page counters to 0
         and the section counter to 1. */
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS_Counters "CSS_Counters"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-custom-ident "Tooltip not found in DB."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/integer
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Plus_(.2B) "Plus multiplier: The previous entity may appear 1 or several times."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/custom-ident "The documentation about this has not yet been written; please consider contributing!"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"