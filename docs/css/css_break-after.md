## break-after

### Summary

The `break-after` [CSS][0] property describes how the page, column or region break behavior after the generated box. If there is no generated box, the property is ignored.

Each possible break point, that is each element boundary, is under the influence of three properties, the `break-after` value of the previous element, the [`break-before`][1] value of the next element and the [`break-inside`][2] of the containing element.

To define if a break must be done, the following rules are applied:

1. If any of the three concerned values is a _forced break value_, that is `always`, `left`, `right`, `page`, `column` or `region`, it has precedence. If several of the concerned values is such a break, the one of the element that appears the latest in the flow is taken (that is the [`break-before`][1] value has precedence over the `break-after` value, which itself has precedence over the [`break-inside`][2] value).
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

    [Formal syntax][7]: auto [|][8] always [|][8] avoid [|][8] left [|][8] right [|][8] page [|][8] column [|][8] avoid-page [|][8] avoid-colum
    

    break-after: auto
    break-after: always
    break-after: left
    break-after: right
    break-after: recto
    break-after: verso
    break-after: page
    break-after: column
    break-after: region
    break-after: avoid
    break-after: avoid-page
    break-after: avoid-column
    break-after: avoid-region
    

### Values

**`auto`**

> Initial value. Allows, meaning neither forbid nor force, any break (either page, column or region) to be be inserted after the principal box.

**`always`**

> Always force page breaks after the principal box. This is a synonym of `page`, it has been kept to facilitate transition from [`page-break-after`][9] which is subset of this property.

**`avoid`**

> Prevent any break, either page, column or region, to be inserted right after the principal box.

**`left`**

> Force one or two page breaks right after the principal box so that the next page is formatted as a left page.

**`right`**

> Force one or two page breaks right after the principal box so that the next page is formatted as a right page.

**`page`**

> Always force one page break right after the principal box.

**`column`**

> Always force one column break right after the principal box.

**`region `__**

> Always force one region break right after the principal box.

**`recto` __**

> Force one or two page breaks right after the principal box so that next page is formatted as a recto page, that is a right page in a left-to-right spread or a left page in a right-to-left spread.

**`verso `__**

> Force one or two page breaks right after the principal box so that next page is formatted as a verso page, that is a left page in a left-to-right spread or a left right in a right-to-left spread.

**`avoid-page`**

> Avoid any page break right after the principal box.

**`avoid-column`**

> Avoid any column break right after the principal box.

**`avoid-region `__**

> Avoid any region break right after the principal box.

### Examples


[0]: https://developer.mozilla.org/en/docs/CSS
[1]: https://developer.mozilla.org/en/docs/Web/CSS/break-before "The break-before CSS property describes how the page, column or region break behavior before the generated box. If there is no generated box, the property is ignored."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/break-inside "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/page-break-after "The page-break-after CSS property adjusts page breaks after the current element."