## backface-visibility

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The [CSS][1] `backface-visibility` property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.

There are cases when we do not want the front face of an element to be visible through the back face, like when doing a flipping card effect (setting two elements side-to-side).

This property has no effect on 2D transforms as there is no perspective.

* _[Initial value][2]_ `visible` 
* _Applies to_ transformable elements 
* _[Inherited][3]_ no 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]:  visible [|][7] hidden 
    

    backface-visibility: _visibility_
    
    backface-visibility: visible
    backface-visibility: hidden
    

### Values

**_visibility_**

> Is a keyword indicating if the backface must be visible or not. It can have the following values:
> 
> * `visible` meaning that the back face is visible, allowing the front face to be displayed mirrored;
> * `hidden` meaning that the back face is not visible, hiding the front face.
> 

### Examples

### Cube with transparent faces

#### HTML Content

    <table>
      <tbody>
        <tr>
          <th><code>backface-visibility: visible;</code></th>
          <th><code>backface-visibility: hidden;</code></th>
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
            <p>All the faces are transparent and the three back faces are visible through the front ones.</p>
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
            <p>No face is opaque, but the three back faces are always hidden now.</p>
          </td>
        </tr>
      </tbody>
    </table>

#### CSS Content

    /* Shorthand classes that will show or hide the three back faces of the "cube" */
    .hidebf div {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    
    .showbf div {
      backface-visibility: visible;
      -webkit-backface-visibility: visible;
    }
    
    /* Define the container div, the cube div, and a generic face */
    .container {
      width: 150px;
      height: 150px;
      margin: 75px 0 0 75px;
      border: none;
    }
    
    .cube {
      width: 100%;
      height: 100%;
      perspective: 550px;
      perspective-origin: 150% 150%;
      transform-style: preserve-3d;
      -webkit-perspective: 300px;
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
      margin: 0px;
      padding: 6px;
      font-family: sans-serif;
      text-align: left;
    }

#### Result



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."