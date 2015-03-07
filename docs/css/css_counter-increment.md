## counter-increment

### Summary

The `counter-increment` [CSS][0] property is used to increase the value of [CSS Counters][1] by a given value. The counter's value can be reset using the [`counter-reset`][2] CSS property.

* _[Initial value][3]_ `none` 
* _Applies to_ all elements 
* _[Inherited][4]_ no 
* _Media_ [`all`][5] 
* _[Computed value][6]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [[<custom-ident>][8] [<integer>][9][?][10]][+][11] [|][12] none
    

    counter-increment: counter-name        /* Increment counter-name by 1 */
    counter-increment: counter-name -1     /* Decrement counter-name by 1 */
    counter-increment: counter1 counter2 -4 /* Increment counter1 by 1, and decrement counter2 by 4 */
    
    counter-increment: none                /* Do not increment/decrement anything: used to hide less specific values */ 
    
    counter-increment: inherit
    

### Values

**[`<custom-ident>`][13]**

> The name of the counter to increment. This identifier is composed by a combination of case-insensitive letters `a` to `z`, numbers `0` to `9`, underscores (`_`), and/or dashes (`-`). The first non-dash character must be a letter (that is, no number at the beginning of it, even if preceded by a dash.) Also, two dashes are forbidden at the beginning of the identifier. It can't be `none`, `unset`, `initial`, or `inherit` in any combination of cases.

**[`<integer>`][14]**

> The value to add to the counter. Defaults to 1 if not given.

**`none`**

> No counter must be incremented. This is used as the default value, or to cancel an increment in more specific rules.

You may specify as many counters to increment as you want, each separated by a space.

### Examples

    h1 {
      counter-increment: chapter section 2 page;
      /* Increases the value of the chapter and page counters by 1
         and the section counter by 2. */
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS_Counters "CSS_Counters"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/counter-reset "The counter-reset CSS property is used to reset CSS Counters to a given value."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-custom-ident "Tooltip not found in DB."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/integer
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Plus_(.2B) "Plus multiplier: The previous entity may appear 1 or several times."
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[13]: https://developer.mozilla.org/en/docs/Web/CSS/custom-ident "The documentation about this has not yet been written; please consider contributing!"
[14]: https://developer.mozilla.org/en/docs/Web/CSS/integer "The documentation about this has not yet been written; please consider contributing!"