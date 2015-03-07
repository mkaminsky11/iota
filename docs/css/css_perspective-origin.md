## perspective-origin

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `perspective-origin` [CSS][1] property determines the position the viewer is looking at. It is used as the _vanishing point_ by the [`perspective`][2] property.

* _[Initial value][3]_ `50% 50%` 
* _Applies to_ transformable elements 
* _[Inherited][4]_ no 
* _Percentages_ refer to the size of bounding box 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ for [`<length>`][7] the absolute value, otherwise a percentage 
* _Animatable_ yes, as a simple list of a [length][8], [percentage][9] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ One or two values, with length made absolute and keywords translated to percentages

### Syntax

    [Formal syntax][10]: [ [<percentage>][11] [|][12] [<length>][13] [|][12] left [|][12] center [|][12] right [|][12] top [|][12] bottom] [|][12] [ [ [<percentage>][11] [|][12] [<length>][13] [|][12] left [|][12] center [|][12] right ] [&&][14] [ [<percentage>][11] [|][12] [<length>][13] [|][12] top [|][12] center [|][12] bottom ] ]
    

    perspective-origin: _x-position_            /* one-value syntax */
    perspective-origin: _x-position_ _y-position_ /* two-value syntax */
    
    When both _x-position_ and _y-position_ are keywords, the following is also valid:
    perspective-origin: _y-position x-position_
    
    perspective-origin: inherit
    

### Values

**_x-position_**

> Indicates the position of the abscissa of the _vanishing point_. It can have one of the following values:
> 
> * [`<percentage>`][15] indicating the position relative to the width of the element. The value may be negative.
> * [`<length>`][7] indicating the position using a length value. The value may be negative.
> * `left`, a keyword being a shortcut for the `0` length value.
> * `center`, a keyword being a shortcut for the `50%` percentage value.
> * `right`, a keyword being a shortcut for the `100%` percentage value.
> 

**_y-position_**

> Indicates the position of the ordinate of the _vanishing point_. It can have one of the following values:
> 
> * [`<percentage>`][15] indicating the position relative to the height of the element. The value may be negative.
> * [`<length>`][7] indicating the position using a length value. The value may be negative.
> * `top`, a keyword being a shortcut for the `0` length value.
> * `center`, a keyword being a shortcut for the `50%` percentage value.
> * `bottom`, a keyword being a shortcut for the `100%` percentage value.
> 

### Examples

### Cubes with popular `perspective-origin` values

#### HTML Content

    <table>
       <tbody>
          <tr>
             <th><code>perspective-origin: top left;</code>
             </th>
             <th><code>perspective-origin: top;</code>
             </th>
             <th><code>perspective-origin: top right;</code>
             </th>
          </tr>
          <tr>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
          </tr>
          <tr>
             <th><code>perspective-origin: left;</code>
             </th>
             <th><code>perspective-origin: 50% 50%;</code>
             </th>
             <th><code>perspective-origin: right;</code>
             </th>
          </tr>
          <tr>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
          </tr>
          <tr>
             <th><code>perspective-origin: bottom left;</code>
             </th>
             <th><code>perspective-origin: bottom;</code>
             </th>
             <th><code>perspective-origin: bottom right;</code>
             </th>
          </tr>
          <tr>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
             <td>
                <div >
                   <div >
                      <div >1</div>
                      <div >2</div>
                      <div >3</div>
                      <div >4</div>
                      <div >5</div>
                      <div >6</div>
                   </div>
                </div>
             </td>
          </tr>
       </tbody>
    </table>

#### CSS Content

    /* Shorthand classes for perspective-origin values */
    .potl {
        perspective-origin: top left;
        -webkit-perspective-origin: top left;
    }
    .potm {
        perspective-origin: top;
        -webkit-perspective-origin: top;
    }
    .potr {
        perspective-origin: top right;
        -webkit-perspective-origin: top right;
    }
    .poml {
        perspective-origin: left;
        -webkit-perspective-origin: left;
    }
    .pomm {
        perspective-origin: 50% 50%;
        -webkit-perspective-origin: 50% 50%;
    }
    .pomr {
        perspective-origin: right;
        -webkit-perspective-origin: right;
    }
    .pobl {
        perspective-origin: bottom left;
        -webkit-perspective-origin: bottom left;
    }
    .pobm {
        perspective-origin: bottom;
        -webkit-perspective-origin: bottom;
    }
    .pobr {
        perspective-origin: bottom right;
        -webkit-perspective-origin: bottom right;
    }
    
    /* Define the container div, the cube div, and a generic face */
     .container {
       width: 100px;
       height: 100px;
       margin: 24px;
       border: none;
    }
    .cube {
       width: 100%;
       height: 100%;
       backface-visibility: visible;
       perspective: 300px;
       transform-style: preserve-3d;
       -webkit-backface-visibility: visible;
       -webkit-perspective: 300px;
       -webkit-transform-style: preserve-3d;
    }
    .face {
       display: block;
       position: absolute;
       width: 100px;
       height: 100px;
       border: none;
       line-height: 100px;
       font-family: sans-serif;
       font-size: 60px;
       color: white;
       text-align: center;
    }
    
    /* Define each face based on direction */
     .front {
       background: rgba(0, 0, 0, 0.3);
       transform: translateZ(50px);
       -webkit-transform: translateZ(50px);
    }
    .back {
       background: rgba(0, 255, 0, 1);
       color: black;
       transform: rotateY(180deg) translateZ(50px);
       -webkit-transform: rotateY(180deg) translateZ(50px);
    }
    .right {
       background: rgba(196, 0, 0, 0.7);
       transform: rotateY(90deg) translateZ(50px);
       -webkit-transform: rotateY(90deg) translateZ(50px);
    }
    .left {
       background: rgba(0, 0, 196, 0.7);
       transform: rotateY(-90deg) translateZ(50px);
       -webkit-transform: rotateY(-90deg) translateZ(50px);
    }
    .top {
       background: rgba(196, 196, 0, 0.7);
       transform: rotateX(90deg) translateZ(50px);
       -webkit-transform: rotateX(90deg) translateZ(50px)
    }
    .bottom {
       background: rgba(196, 0, 196, 0.7);
       transform: rotateX(-90deg) translateZ(50px);
       -webkit-transform: rotateX(-90deg) translateZ(50px);
    }
    
    /* Make the table a little nicer */
    th, p, td {
       background-color: #EEEEEE;
       padding: 10px;
       font-family: sans-serif;
       text-align: left;
    }

#### Result



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/perspective
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/Web/CSS/length
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/percentage
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[13]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[14]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_ampersand "Double ampersand: the two entities are mandatory, but may appear in any order."
[15]: https://developer.mozilla.org/en/docs/Web/CSS/percentage