## flex

### Summary

The `flex` [CSS][0] property is a [shorthand][1] property specifying the ability of a flex item to alter its dimensions to fill available space. Flex items can be stretched to use available space proportional to their flex grow factor or their flex shrink factor to prevent overflow.

* _[Initial value][2]_ the concatenation of the initial values of its longhand properties:
  * `flex-grow`: `0`
  * `flex-shrink`: `1`
  * `flex-basis`: `auto` 
* _Applies to_ flex items, including in-flow pseudo-elements 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as each of the properties of the shorthand:
  * `flex-grow`: as specified
  * `flex-shrink`: as specified
  * `flex-basis`: as specified, with lengths made absolute 
* _Animatable_ as each of the properties of the shorthand:
  * `flex-grow`: yes, as a [number][6]
  * `flex-shrink`: yes, as a [number][6]
  * `flex-basis`: yes, as a [length][7], [percentage][8] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ order of appearance in the formal grammar of the values

See [Using CSS flexible boxes][9] for more properties and information.

### Syntax

    [Formal syntax][10]: none [|][11] [ [<'flex-grow'>][12] [<'flex-shrink'>][13][?][14] [||][15] [<'flex-basis'>][16] ]
    

    flex: none                                            _/* value 'none' case */_
    flex: <'flex-grow'>                                   _/* One value syntax, variation 1 */_
    flex: <'flex-basis'>                                  _/* One value syntax, variation 2 */_
    flex: <'flex-grow'> <'flex-basis'>                    _/* Two values syntax, variation 1 */_
    flex: <'flex-grow'> <'flex-shrink'>                   _/* Two values syntax, variation 2 */_
    flex: <'flex-grow'> <'flex-shrink'> <'flex-basis'>    _/* Three values syntax */_
    
    flex: inherit

### Values

**`<'flex-grow'>`**

> Defines the `[flex-grow][17]` of the flex item. See [`<number>`][18] for more details. Negative values are considered invalid. Defaults to `1` when omitted.

**`<'flex-shrink'>`**

> Defines the `[flex-shrink][19]` of the flex item. See [`<number>`][18] for more details. Negative values are considered invalid. Defaults to `1` when omitted.

**`<'flex-basis'>`**

> Defines the [`flex-basis`][20] of the flex item. Any value valid for `width` and `height` properties are accepted. A preferred size of `0` must have a unit to avoid being interpreted as a flexibility. Defaults to `0%` when omitted.

**`none`**

> This keyword computes to `0 0 auto`.

### Examples

    <style type="text/css">
      #flex-container {
        width:100%;
    
        /* flexbox specific properties */
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
      }
      #flex-container .flex-item {
        border:1px solid #f00;
    
        /* flexbox specific properties */
        -webkit-flex: auto;
        flex: auto;
      }
    </style>
    
    <div >
      <div >Flex Box 1</div>
      <div >Flex Box 2</div>
    </div>
    
    **FIXME:** __: Improve on these examples.
    



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.orghttps://developer.mozilla.org/en/docs/Web/CSS/Shorthand_properties
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/number#Interpolation "Values of the <number> CSS data type are interpolated as real, floating-point, numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[8]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Using_CSS_flexible_boxes "CSS/Using_CSS_flexible_boxes"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[12]: https://developer.mozilla.org/en/docs/CSS/flex-grow "<number>"
[13]: https://developer.mozilla.org/en/docs/CSS/flex-shrink "<number>"
[14]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: The previous entity is optional (it may be used once, or not at all)."
[15]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[16]: https://developer.mozilla.org/en/docs/CSS/flex-basis "content | <'width'>"
[17]: https://developer.mozilla.org/en/docs/Web/CSS/flex-grow
[18]: https://developer.mozilla.org/en/docs/Web/CSS/number "The documentation about this has not yet been written; please consider contributing!"
[19]: https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink
[20]: https://developer.mozilla.org/en/docs/CSS/flex-basis "CSS/flex-basis"