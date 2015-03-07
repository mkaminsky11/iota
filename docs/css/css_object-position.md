## object-position

### Summary

The `object-position` property determines the alignment of the replaced element inside its box.

* _[Initial value][0]_ `50% 50%` 
* _Applies to_ replaced elements 
* _[Inherited][1]_ yes 
* _Percentages_ refer to width and height of element itself 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ as specified 
* _Animatable_ yes, as a repeatable list of a simple list of a [length][4], [percentage][5] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]:  [<position>][7]

### Values

**`<position>`**

> Is a [`<position>`][8], that is one to four values representing a 2D position regarding the edges of the element's box. Relative or absolute offsets can be given. Note that the position can be set outside of the element's box.

### Example

#### HTML Content

    <img  src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo"/>
    <img  src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo"/>
    

#### CSS Content

    img {
      width: 150px;
      height: 100px;
      border: 1px solid #000;
      background-color: yellow;
      margin-right: 1em;
    }
    
    #object-position-1 {
      object-position: 10px;
    }
    
    #object-position-2 {
      object-position: 20% 10%;
    }
    

#### Output



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[5]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/position_value
[8]: https://developer.mozilla.org/en/docs/Web/CSS/position_value "The documentation about this has not yet been written; please consider contributing!"