## margin

### Summary

The `margin` CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties: [`margin-top`][0], [`margin-right`][1], [`margin-bottom`][2] and [`margin-left`][3].  
Negative values are also allowed.

* _[Initial value][4]_ the concatenation of the initial values of its longhand properties:
  * `margin-bottom`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `margin-left`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `margin-right`: is itself a shorthand, its initial value is the concatenation of its own longhand properties
  * `margin-top`: is itself a shorthand, its initial value is the concatenation of its own longhand properties 
* _Applies to_ all elements except elements with table [`display`][5] types other than `table-caption`, `table` and `inline-table`. It also applies to [`::first-letter`][6]. 
* _[Inherited][7]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][8] 
* _[Computed value][9]_ as each of the properties of the shorthand:
  * `margin-bottom`: the percentage as specified or the absolute length
  * `margin-left`: the percentage as specified or the absolute length
  * `margin-right`: the percentage as specified or the absolute length
  * `margin-top`: the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][10] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][11]: [ [<length>][12] [|][13] [<percentage>][14] [|][13] auto ]{1,4}

    margin: _style_                  /* _One-value syntax_   */  E.g. margin: 1em; 
    margin: _vertical_ _horizontal_    /* _Two-value syntax_   */  E.g. margin: 5% auto; 
    margin: _top_ _horizontal_ _bottom_  /* _Three-value syntax_ */  E.g. margin: 1em auto 2em; 
    margin: _top_ _right_ _bottom_ _left_  /* _Four-value syntax_  */  E.g. margin: 2px 1em 0 auto; 
    
    margin: inherit
    

### Values

Accepts one, two, three or four values of the following:

**`<length>`**

> Specifies a fixed width. Negative Values are allowed. See for [`<length>`][15] possible units.

**`<percentage>`**

> A [`<percentage>`][16] relative to the **width** of the containing block. Negative values are allowed.

**`auto`**

> `auto `is replaced by some suitable value, e.g. it can be used for centering of blocks.  
> `div { width:50%;  margin:0 auto; }` centers the div container horizontally.

* **One** single value applies to all **four sides**.
* **Two** values apply first to **top and bottom**, the second one to **left and right**.
* **Three** values apply first to **top**, second to **left and right** and third to **bottom**.
* **Four** values apply to **top**, **right**, **bottom** and **left** in that order (clockwise).

### Examples

### Simple example

#### HTML

    <div >
      margin:     auto;
      background: gold;
      width:      66%;
    </div>
    <div >
      margin:     20px 0 0 -20px;
      background: gold;
      width:      66%;
    </div>

#### CSS

    .ex1 {
      margin: auto;
      background: gold;
      width: 66%;
    }
    .ex2 {
      margin: 20px 0px 0 -20px;
      background: gold;
      width: 66%;
    }

### Another example

    margin: 5%;                /* all sides 5% margin */
    
    margin: 10px;              /* all sides 10px margin */
    
    margin: 1.6em 20px;        /* top and bottom 1.6em, left and right 20px margin */
    
    margin: 10px 3% 1em;       /* top 10px, left and right 3%, bottom 1em margin */
    
    margin: 10px 3px 30px 5px; /* top 10px, right 3px, bottom 30px, left 5px margin */
    
    margin: 1em auto;          /* 1em margin on top and bottom, box is horizontally centered */
    
    margin: auto;              /* box is horizontally centered, 0 margin on top and bottom */
    

### Horizontal centering with `margin: 0 auto;`

To center something horizontally in modern browsers, use `[display][17]: flex; [justify-content][18]: center;` .

However, in older browsers like IE8-9, these are not available. In order to center an element inside its parent, use `margin: 0 auto;`


[0]: https://developer.mozilla.org/en/docs/Web/CSS/margin-top "The margin-top CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/margin-right "The margin-right CSS property of an element sets the margin space required on the right side of an element. A negative value is also allowed."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom "The margin-bottom CSS property of an element sets the margin space required on the bottom of an element. A negative value is also allowed."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/margin-left "The margin-left CSS property of an element sets the margin space required on the left side of a box associated with an element. A negative value is also allowed."
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/Web/CSS/display "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[7]: https://developer.mozilla.org/en/docs/CSS/inheritance
[8]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[9]: https://developer.mozilla.org/en/docs/CSS/computed_value
[10]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[11]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[13]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[15]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[16]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"
[17]: https://developer.mozilla.org/en/docs/Web/CSS/display
[18]: https://developer.mozilla.org/en/docs/Web/CSS/justify-content