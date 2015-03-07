## flex-flow

### Summary

The [CSS][0] `flex-flow` property is a shorthand property for `flex-direction` and `flex-wrap` individual properties.

* _[Initial value][1]_ the concatenation of the initial values of its longhand properties:
  * `flex-direction`: `row`
  * `flex-wrap`: `nowrap` 
* _Applies to_ flex containers 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as each of the properties of the shorthand:
  * `flex-direction`: as specified
  * `flex-wrap`: as specified 
* _Animatable_ no 
* _Canonical order_ order of appearance in the formal grammar of the values

See [Using CSS flexible boxes][5] for more properties and information.

### Syntax

    [Formal syntax][6]: [<'flex-direction'>][7] [||][8] [<'flex-wrap'>][9]

### Values

See [`flex-direction`][10] and [`flex-wrap`][11] for details on the values.

### Examples

    element { 
      /* Main-axis is the block direction with reversed main-start and main-end. Flex items are laid out in multiple lines */
      flex-flow: column-reverse wrap;            
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Using_CSS_flexible_boxes "https://developer.mozilla.org/en/docs/CSS/Using_CSS_flexible_boxes"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/flex-direction "row | row-reverse | column | column-reverse"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: the two entities are optional, and may appear in any order."
[9]: https://developer.mozilla.org/en/docs/CSS/flex-wrap "nowrap | wrap | wrap-reverse"
[10]: https://developer.mozilla.org/en/docs/CSS/flex-direction "en-US/docs/CSS/flex-direction"
[11]: https://developer.mozilla.org/en/docs/CSS/flex-wrap "flex-wrap"