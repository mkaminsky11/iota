## justify-content

### Summary

The [CSS][0] `justify-content` property defines how a browser distributes available space between and around elements when aligning flex items in the main-axis of the current line. The alignment is done after the lengths and auto margins are applied, meaning that, if there is at least one flexible element, with [`flex-grow`][1] different than `0`, it will have no effect as there won't be any available space.

Do not assume that this property will only apply on flex containers in the future and therefore do not simply hide it by setting another [`display`][2] value. The CSSWG is working into [extending its usage to any block element][3]. The draft specification is still in its very early stage and isn't implement yet.

* _[Initial value][4]_ `flex-start` 
* _Applies to_ flex containers 
* _[Inherited][5]_ no 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

See [Using CSS flexible boxes][8] for more properties and information.

### Syntax

    [Formal syntax][9]: flex-start [|][10] flex-end [|][10] center [|][10] space-between [|][10] space-around
    

    justify-content: flex-start
    justify-content: flex-end
    justify-content: center
    justify-content: space-between
    justify-content: space-around
    
    justify-content: inherit
    

### Values

**`flex-start`**

> The flex items are packed starting from the **main-start**. Margins of the first flex item is flushed with the main-start edge of the line and each following flex item is flushed with the preceding.

**`flex-end`**

> The flex items are packed starting from the **main-end**. The margin edge of the last flex item is flushed with the main-end edge of the line and each preceding flex item is flushed with the following.

**`center`**

> The flex items are packed toward the center of the line. The flex items are flushed with each other and aligned in the center of the line. Space between the main-start edge of the line and first item and between main-end and the last item of the line is the same.

**`space-between`**

> Flex items are evenly distributed along the line. The spacing is done such as the space between two adjacent items is the same. Main-start edge and main-end edge are flushed with respectively first and last flex item edges.

**`space-around`**

> Flex items are evenly distributed so that the space between two adjacent items is the same. The empty space before the first and after the last items equals half of the space between two adjacent items.

### Examples

**HTML:**

    <div >
      <p>justify-content: flex-start</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
      </div>
    
      <p>justify-content: flex-end</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
      </div>
    
      <p>justify-content: center</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
      </div>
    
      <p>justify-content: space-between</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
      </div>
    
      <p>justify-content: space-around</p>
      <div >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    

**CSS:**

    #container > div {
      display: flex;
      font-family: Courier New, Lucida Console, monospace;
    }
    
    #container > div > div {
      width: 50px;
      height: 50px;
      background: linear-gradient(-45deg, #788cff, #b4c8ff);
    }
    
    #flex-start {
      justify-content: flex-start;
    }
    
    #center {
      justify-content: center;
    }
    
    #flex-end {
      justify-content: flex-end;
    }
    
    #space-between {
      justify-content: space-between;
    }
    
    #space-around {
      justify-content: space-around;
    }
    

Results in:



[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/flex-grow "The CSS flex-grow property specifies the flex grow factor of a flex item."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/display "The display CSS property specifies the type of rendering box used for an element. In HTML, default display property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is inline."
[3]: http://dev.w3.org/csswg/css3-align/#justify-content "http://dev.w3.org/csswg/css3-align/#justify-content"
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/Using_CSS_flexible_boxes "CSS/Using_CSS_flexible_boxes"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."