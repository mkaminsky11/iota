## height

### Summary

The `height` CSS property specifies the height of the content area of an element. The [content area][0] is _inside_ the padding, border, and margin of the element.

The [`min-height`][1] and [`max-height`][2] properties override [`height`][3].

* _[Initial value][4]_ `auto` 
* _Applies to_ all elements but non-replaced inline elements, table columns, and column groups 
* _[Inherited][5]_ no 
* _Percentages_ The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the value computes to `auto`. A percentage height on the root element is relative to the initial containing block. 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ a percentage or `auto` or the absolute length 
* _Animatable_ yes, as a [length][8], [percentage][9] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][10]: [<length> | <percentage>] && [border-box | content-box]? | available | min-content | max-content | fit-content | complex | auto
    

    height: auto     /* auto keyword */
    
    height: 120px    /* <length> values */
    height: 10em
    
    height: 75%      /* <percentage> values */
    
    height: inherit
    

### Values

**`<length>`**

> See [`<length>`][11] for possible units.

**`<percentage>`**

> Specified as a [`<percentage>`][12] of containing block's height.

**`border-box `__**

> If present, the preceding [`<length>`][11] or [`<percentage>`][12] is applied to the element's border box.

**`content-box` __**

> If present, the preceding [`<length>`][11] or [`<percentage>`][12] is applied to the element's content box.

**`auto`**

> The browser will calculate and select a height for the specified element.

**`max-content` __**

> The intrinsic preferred height.

**`min-content` __**

> The intrinsic minimum height.

**`available` __**

> The containing block height minus vertical margin, border and padding.

**`fit-content` __**

> The larger of:
> 
> * the intrinsic minimum height
> * the smaller of the intrinsic preferred height and the available height
> 

### Example

### HTML

    <div >
      <span>I'm 50 pixels tall.</span>
    </div>
    <div >
      <span>I'm 25 pixels tall.</span>
    </div>
    <div >
      <div >
        <span>I'm half the height of my parent.</span>
      </div>
    </div>
    

### CSS

    div {
      width: 250px;
      margin-bottom: 5px;
      border: 3px solid #999999;
    }
    
    #red {
      height: 50px;
    }
    
    #green {
      height: 25px;
    }
    
    #parent {
      height: 100px;
    }
    
    #child {
      height: 50%;
      width: 75%;
    }
    



[0]: https://developer.mozilla.org/en/docs/CSS/box_model#content "CSS/Box_model#content"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/min-height "The min-height CSS property is used to set the minimum height of a given element. It prevents the used value of the height property from becoming smaller than the value specified for min-height."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/max-height "The max-height CSS property is used to set the maximum height of a given element. It prevents the used value of the height property from becoming larger than the value specified for max-height."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/height "The height CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element."
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[12]: https://developer.mozilla.org/en/docs/Web/CSS/percentage "The documentation about this has not yet been written; please consider contributing!"