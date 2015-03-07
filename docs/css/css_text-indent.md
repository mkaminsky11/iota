## text-indent

### Summary

The `text-indent` CSS property specifies how much horizontal space should be left before the beginning of the first line of the text content of an element. Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block element's box.

* _[Initial value][0]_ `0` 
* _Applies to_ block containers 
* _[Inherited][1]_ yes 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][2] 
* _[Computed value][3]_ the percentage as specified or the absolute length, plus any keywords as specified 
* _Animatable_ yes, as a [length][4], [percentage][5] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the length or percentage before the keywords, if both are present. If several keywords are present, they appear in the same order as their appearance in the formal grammar.

### Syntax

    [Formal syntax][6]: [<length>][7] [|][8] [<percentage>][9] [&&][10] [ hanging [||][11] each-line ]

    text-indent: 3mm       /* <length>values */
    text-indent: 40px
    text-indent: 15%       /* <percentage> values, relatives to the containing block width */
    text-indent: each-line /* keywords values */
    text-indent: hanging
    
    text-indent: inherit
    </percentage></length>

### Values

**`<length>`**

> Indentation is specified as an absolute [`<length>`][12]. Negative values are allowed. See [`<length>`][12] values for possible units.

**`<percentage>`**

> Indentation is a [`<percentage>`][13] of the containing block width.

**`each-line` __**

> Indentation affects the first line of the block container as well as each line after a
> _forced line break_
> , but does not affect lines after a
> _soft wrap break_
> .

**`hanging` __**

> Inverts which lines are indented. All lines _except_ the first line will be indented.

### Simple indent example

### HTML

    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>  
    

### CSS

    p { 
      text-indent: 5em; 
      background: powderblue;
    }

### Percentage indent example

### HTML Content

    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p> 

### CSS Content

    p { 
      text-indent: 30%; 
      background: plum;
    }



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[5]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_ampersand "Double ampersand: The two entities are mandatory, but may appear in any order."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_bar "Double bar: The two entities are optional, and may appear in any order."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[13]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"