## align-content

### Summary

The [CSS][0] `align-content` property aligns a flex container's lines within the flex container when there is extra space on the cross-axis. This property has no effect on single line flexible boxes.

* _[Initial value][1]_ `stretch` 
* _Applies to_ multi-line flex containers 
* _[Inherited][2]_ no 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

See [Using CSS flexible boxes][5] for more properties and information.

### Syntax

    [Formal syntax][6]: flex-start [|][7] flex-end [|][7] center [|][7] space-between [|][7] space-around [|][7] stretch
    

    align-content: flex-start
    align-content: flex-end
    align-content: center
    align-content: space-between
    align-content: space-around
    align-content: stretch
    
    align-content: inherit
    

### Values

**`flex-start`**

> Lines are packed starting from the cross-start. Cross-start edge of the first line and cross-start edge of the flex container are flushed together. Each following line is flush with the preceding.

**`flex-end`**

> Lines are packed starting from the cross-end. Cross-end of the last line and cross-end of the flex container are flushed together. Each preceding line is flushed with the following line.

**`center`**

> Lines are packed toward the center of the flex container. The lines are flushed with each other and aligned in the center of the flex container. Space between the cross-start edge of the flex container and first line and between cross-end of the flex container and the last line is the same.

**`space-between`**

> Lines are evenly distributed in the flex container. The spacing is done such as the space between two adjacent items is the same. Cross-start edge and cross-end edge of the flex container are flushed with respectively first and last line edges.

**`space-around`**

> Lines are evenly distributed so that the space between two adjacent lines is the same. The empty space before the first and after the last lines equals half of the space between two adjacent lines.

**`stretch`**

> Lines stretch to use the remaining space. The free-space is split equally between all the lines.

### Examples

**HTML:**

    <div >
      <p>align-content: flex-start</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>align-content: center</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>align-content: flex-end</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>align-content: space-between</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>align-content: space-around</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>align-content: stretch</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

**CSS:**

    #container > div {
      display: flex;
      flex-flow: row wrap;
      width: 140px;
      height: 140px;
      background: linear-gradient(-45deg, #78ff8c, #b4ffc8);
    }
    
    #container > div > div {
      margin: 2px;
      width: 30px;
      min-height: 30px;
      background: linear-gradient(-45deg, #788cff, #b4c8ff);
    }
    
    #flex-start {
      align-content: flex-start;
    }
    
    #center {
      align-content: center;
    }
    
    #flex-end {
      align-content: flex-end;
    }
    
    #space-between {
      align-content: space-between;
    }
    
    #space-around {
      align-content: space-around;
    }
    
    #stretch {
      align-content: stretch;
    }

Results in:



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/Using_CSS_flexible_boxes "CSS/Using_CSS_flexible_boxes"
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."