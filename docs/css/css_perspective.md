## perspective

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `perspective` [CSS][1] property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element with z\>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.

Part of the 3D-elements that are behind the user, i.e. that their z-axis coordinate is greater than the value of the `perspective` CSS property are not drawn.

The _vanishing point_ is by default placed at the center of the element, but its position can be changed using the [`perspective-origin`][2] property.

Using this property with a value different than `0` and `none` creates a new [stacking context][3].

* _[Initial value][4]_ `none` 
* _Applies to_ transformable elements 
* _[Inherited][5]_ no 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ the absolute length or `none` 
* _Animatable_ yes, as a [length][8] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][9]: none [|][10] [<length>][11]

    perspective: none
    perspective: 20px     /* <length> values */
    perspective: 3.5em
    
    perspective: inherit
    

### Values

**`none`**

> Is a keyword indicating that no perspective transform has to be applied.

**`<length>`**

> Is a [`<length>`][12] giving the distance from the user to the z=0 plane. It is used to apply a perspective transform to the element and its content. If it `0` or a negative value, no perspective transform is applied.

### Examples

### Three cubes

#### HTML Content

    <table>
       <tbody>
          <tr>
             <th><code>perspective: 250px;</code>
             </th>
             <th><code>perspective: 350px;</code>
             </th>
             <th><code>perspective: 500px;</code>
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

    /* Shorthand classes for different perspective values */
    .pers250 {
        perspective: 250px;
        -webkit-perspective: 250px;
    }
    .pers350 {
        perspective: 350px;
        -webkit-perspective: 350px;
    }
    .pers500 {
        perspective: 500px;
        -webkit-perspective: 500px;
    }
    
    /* Define the container div, the cube div, and a generic face */
     .container {
       width: 200px;
       height: 200px;
       margin: 75px 0 0 75px;
       border: none;
    }
    .cube {
       width: 100%;
       height: 100%;
       backface-visibility: visible;
       perspective-origin: 150% 150%;
       transform-style: preserve-3d;
       -webkit-backface-visibility: visible;
       -webkit-perspective-origin: 150% 150%;
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
[1]: https://developer.mozilla.org/en/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/perspective-origin
[3]: https://developer.mozilla.org/en/CSS/Understanding_z-index/The_stacking_context "en/CSS/Understanding_z-index/The_stacking_context"
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[11]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length