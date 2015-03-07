## padding

### Summary

The `padding` CSS property sets the required padding space on all sides of an element. The [padding area][0] is the space between the content of the element and its border. Negative values are not allowed.

The `padding` property is a shorthand to avoid setting each side separately (`padding-top`, `padding-right`, `padding-bottom`, `padding-left`).

* _[Initial value][1]_ the concatenation of the initial values of its longhand properties:
  * `padding-bottom`: `0`
  * `padding-left`: `0`
  * `padding-right`: `0`
  * `padding-top`: `0` 
* _Applies to_ all elements except `table-row-group`, `table-header-group`, `table-footer-group`, `table-row`, `table-column-group` and `table-column`. It also applies to [`::first-letter`][2]. 
* _[Inherited][3]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as each of the properties of the shorthand:
  * `padding-bottom`: the percentage as specified or the absolute length
  * `padding-left`: the percentage as specified or the absolute length
  * `padding-right`: the percentage as specified or the absolute length
  * `padding-top`: the percentage as specified or the absolute length 
* _Animatable_ yes, as a [length][6] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [ [<length>][8] [|][9] [<percentage>][10] ]{1,4}

### Values

Specifies one, two, three or four of the following values:

**`<length>`**

> Specifies a non-negative fixed width. See [`<length>`][11] for details.

**`<percentage>`**

> With respect to the**width **of the containing block.

* **One** single value applies to _all 4 sides_
* **Two** values apply to **1\.** _top and bottom_ and **2\.** to the _left and right_ side
* **Three** values apply to **1\.** _top_, **2\.** _right and left_ and **3\.** to the _bottom_ side
* **Four** values apply to **1\.** _top_, **2\.** _right_, **3\.** _bottom_ and **4\.** to the _left_ side

### Examples

     padding: 5%;               /* on all sides 5% padding */
    

     padding: 10px;              /* on all sides 10px padding */
    

     padding: 10px 20px;         /*  top and bottom 10px padding  */
                                 /*  left and right 20px padding  */
    

     padding: 10px 3% 20px;      /*  top 10px padding          */
                                 /*  left and right 3% padding */
                                 /*  bottom 20px padding       */
    

     padding: 1em 3px 30px 5px;  /*  top    1em  padding  */
                                 /*  right  3px  padding  */
                                 /*  bottom 30px padding  */
                                 /*  left   5px  padding  */
    

border:outset; padding:5% 1em;

### Live Sample

### HTML

    <h4>Hello world!</h4>
    <h3>The padding is different in this line.</h3>
    

### CSS

    h4{
      background-color: green;
      padding: 50px 20px 20px 50px;
    }
    
    h3{
      background-color: blue;
      padding: 400px 50px 50px 400px;
    }
    

[Live Sample Link][12]


[0]: https://developer.mozilla.org/en/CSS/box_model#padding "http://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/Box_model#padding"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/Web/CSS/length "Possible values: a number followed by'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc' or 'px', like 3px, 1.5cm, -0.5em or 0"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[12]: https://mdn.mozillademos.orghttps://developer.mozilla.org/en/docs/Web/CSS/padding$samples/Live_Sample?revision=725051