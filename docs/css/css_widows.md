## widows

The `widows` [CSS][0] property defines how many minimum lines must be left on top of a new page, on a `paged` media. In typography, a _widow_ is the last line of a paragraph appearing alone at the top of a page. Setting the `widows` property allows to prevent widows to be left.

On a non-paged media, like `screen`, the `widows` CSS property has no effect.

* _[Initial value][1]_ ``2`` 
* _Applies to_ block container elements 
* _[Inherited][2]_ yes 
* _Media_ [`visual, paged`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][5]: [<integer>][6]
    

    widows: 2
    widows: 3
    
    widows: inherit
    

### Values

**`<integer>`**

> Denotes the minimum amount of lines that can stay alone on the top of a new page. If the value is not **positive**, the declaration is invalid.

### Example

    p {
      widows: 3;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[6]: https://developer.mozilla.org/en/docs/Web/CSS/integer