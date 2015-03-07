## left

### Summary

The `left` CSS property specifies part of the position of positioned elements.

For absolutely positioned elements (those with [`position`][0]`: absolute` or `position: fixed`), it specifies the distance between the left margin edge of the element and the left edge of its containing block.

* _[Initial value][1]_ `auto` 
* _Applies to_ positioned elements 
* _[Inherited][2]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ if specified as a length, the corresponding absolute length; if specified as a percentage, the specified value; otherwise, `auto` 
* _Animatable_ yes, as a [length][5], [percentage][6] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: [<length>][8] [|][9] [<percentage>][10] [|][9] auto
    

    left: 3px         /* <length> values */
    left: 2.4em
    
    left: 10%         /* <percentage>s of the width of the containing block */
    
    left: auto
    
    left: inherit
    

### Values

**`<length>`**

> Is a negative, null, or positive [`<length>`][11] that represents:
> 
> * for _absolutely positioned elements_, the distance to the left edge of the containing block
> * for _relatively positioned elements_, the offset that the element is moved left from its position in the normal flow if it wasn't positioned.
> 

**`<percentage>`**

> Is a [`<percentage>`][12] of the containing block's width, used as described in the [summary][13].

**`auto`**

> Is a keyword that represents:
> 
> * for absolutely positioned elements, the position of the element based on the [`right`][14] property and treat `width: auto` as a width based on the content.
> * for relatively positioned elements, the left offset of the element from its original position based on the [`right`][14] property, or if `right` is also `auto`, do not offset it at all.
> 

**`inherit`**

> Is a keyword indicating that the value is the same as the computed value from its parent element (which may not be its containing block). This computed value is then handled like it was a [`<length>`][11], [`<percentage>`][12] or the `auto` keyword.

### Examples

### CSS Content

    #wrap {
      width: 700px;
      margin: 0 auto;
      background: #5C5C5C;
    }
    
    pre {
      white-space: pre;
      white-space: pre-wrap;
      white-space: pre-line;
      word-wrap: break-word;
    }
    
    #example_1 {
      width: 200px;
      height: 200px;
      position: absolute;
      left: 20px;
      top: 20px;
      background-color: #D8F5FF;
    }
    
    #example_2 {
      width: 200px;
      height: 200px;
      position: relative;
      top: 0;
      right: 0;
      background-color: #C1FFDB;
    
    }
    #example_3 {
      width: 600px;
      height: 400px;
      position: relative;
      top: 20px;
      left: 20px;
      background-color: #FFD7C2;
    }
    
    #example_4 {
      width:200px;
      height:200px;
      position:absolute;
      bottom:10px;
      right:20px;
      background-color:#FFC7E4;
    }

### HTML Content

    <div >
      <div >
        <pre>
          position: absolute;
          left: 20px;
          top: 20px;
        </pre>
        <p>The only containing element for this div is the main window, so it positions itself in relation to it.</p>
      </div>
    
      <div >
        <pre>
          position: relative;
          top: 0;
          right: 0;
        </pre>
        <p>Relative position in relation to its siblings.</p>
      </div>
    
      <div >
        <pre>
          float: right;
          position: relative;
          top: 20px;
          left: 20px;
        </pre>
        <p>Relative to its sibling div above, but removed from flow of content.</p>
    
        <div >
          <pre>
            position: absolute;
            top: 10px;
            left: 20px;
          </pre>
          <p>Absolute position inside of a parent with relative position</p>
        </div>
      </div>
    </div>

### Live sample



[0]: https://developer.mozilla.org/en/docs/Web/CSS/position
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[6]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[10]: https://developer.mozilla.org/en/docs/CSS/percentage
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length
[12]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[13]: #Summary
[14]: https://developer.mozilla.org/en/docs/Web/CSS/right