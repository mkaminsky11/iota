## break-inside

### Summary

The `break-inside` [CSS][0] property describes how the page, column or region break inside the generated box. If there is no generated box, the property is ignored.

Each possible break point, that is each element boundary, is under the influence of three properties, the [`break-after`][1] value of the previous element, the [`break-before`][2] value of the next element and the `break-inside` of the containing element.

To define if a break must be done, the following rules are applied:

1. If any of the three concerned values is a _forced break value_, that is `always`, `left`, `right`, `page`, `column` or `region`, it has precedence. If several of the concerned values is such a break, the one of the element that appears the latest in the flow is taken (that is the [`break-before`][2] value has precedence over the [`break-after`][1] value, which itself has precedence over the `break-inside` value).
2. If any of the three concerned values is an _avoid break value_, that is `avoid`, `avoid-page`, `avoid-region`, `avoid-column`, no such break will be applied at that point.

Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding avoid value.

* _[Initial value][3]_ `auto` 
* _Applies to_ block-level elements 
* _[Inherited][4]_ no 
* _Media_ [`paged`][5] 
* _[Computed value][6]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: auto [|][8] avoid [|][8] avoid-page [|][8] avoid-column
    

    break-inside: auto
    break-inside: avoid
    break-inside: avoid-page
    break-inside: avoid-column
    break-inside: avoid-region
    

### Values

**`auto`**

> Allows, meaning neither forbid nor force, any break (either page, column or region) to be be inserted within the principle box.

**`avoid-page`**

> Avoid any page break within the principle box.

**`avoid-column`**

> Avoid any column break within the principle box.

**`avoid-region `__**

> Avoid any region break within the principle box.



[0]: https://developer.mozilla.org/en/docs/CSS
[1]: https://developer.mozilla.org/en/docs/Web/CSS/break-after "The break-after CSS property describes how the page, column or region break behavior after the generated box. If there is no generated box, the property is ignored."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/break-before "The break-before CSS property describes how the page, column or region break behavior before the generated box. If there is no generated box, the property is ignored."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."