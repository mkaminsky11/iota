## width

### Summary

The `width` CSS property specifies the width of the content area of an element. The [content area][0] is _inside_ the padding, border, and margin of the element.

The [`min-width`][1] and [`max-width`][2] properties override [`width`][3].

* _[Initial value][4]_ `auto` 
* _Applies to_ all elements but non-replaced inline elements, table rows, and row groups 
* _[Inherited][5]_ no 
* _Percentages_ refer to the width of the containing block 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ the percentage or `auto` as specified or the absolute length 
* _Animatable_ yes, as a [length][8], [percentage][9] or calc(); when both values are lengths, they are interpolated as lengths; when both values are percentages, they are interpolated as percentages; otherwise, both values are converted into a calc() function that is the sum of a length and a percentage (each possibly zero), and these calc() functions have each half interpolated as real numbers. 
* _Canonical order_ the length or percentage before the keyword, if both are present

### Syntax

    [Formal syntax][10]: [[<length>][11] [|][12] [<percentage>][13]] [&&][14] [border-box [|][12] content-box][?][15] [|][12] available [|][12] min-content [|][12] max-content [|][12] fit-content [|][12] auto

    width: 300px        /* <length> values */
    width: 25em
    
    width: 75%          /* <percentage> values */
    
    width: border-box   /* Keyword values */
    width: content-box
    width: max-content
    width: min-content
    width: available
    width: fit-content
    width: auto
    
    width: inherit
    

### Values

**`<length>`**

> See [`<length>`][16] for possible units.

**`<percentage>`**

> Specified as a [`<percentage>`][17] of containing block's width.

**`border-box `__**

> If present, the preceding [`<length>`][16] or [`<percentage>`][17] is applied to the element's border box.

**`content-box` __**

> If present, the preceding [`<length>`][16] or [`<percentage>`][17] is applied to the element's content box.

**`auto`**

> The browser will calculate and select a width for the specified element.

**`max-content` __**

> The intrinsic preferred width.

**`min-content` __**

> The intrinsic minimum width.

**`available` __**

> The containing block width minus horizontal margin, border and padding.
> 
> **Note:** WebKit implements a variation of this value, under the name `fill-available` as of December 2013\.
> 

**`fit-content` __**

> The larger of:
> 
> * the intrinsic minimum width
> * the smaller of the intrinsic preferred width and the available width
> 
> **Note:** WebKit implements an earlier version of this value, under the name `intrinsic`, but as of June 2012, implements `fit-content` as well.
> 

### Examples

### Default width

    p.goldie { background: gold }

    <p >The Mozilla community produces a lot of great software.</p>

---

### Pixels and ems

    .px_length {
      width: 200px;
      background-color: red;
      color: white;
      border: 1px solid black;
    }
    .em_length {
      width: 20em;
      background-color: white;
      color: red;
      border: 1px solid black;
    }
    

    <div >Width measured in px</div>
    <div >Width measured in em</div>

### Percentage

    .percent {
    	width: 20%;
    	background-color: silver;
    	border: 1px solid red;
    }

    <div >Width in percentage</div>

### max-content

---

    p.maxgreen {
      background: lightgreen;
      width: intrinsic;           /* Safari/WebKit uses a non-standard name */
      width: -moz-max-content;    /* Firefox/Gecko */
      width: -webkit-max-content; /* Chrome */
    }

    <p >The Mozilla community produces a lot of great software.</p>

---

### min-content

    p.minblue {
      background: lightblue;
      width: -moz-min-content;    /* Firefox */
      width: -webkit-min-content; /* Chrome */
    }

    <p >The Mozilla community produces a lot of great software.</p>



[0]: https://developer.mozilla.org/en/docs/CSS/box_model#content "CSS/box_model#content"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/min-width
[2]: https://developer.mozilla.org/en/docs/Web/CSS/max-width
[3]: https://developer.mozilla.org/en/docs/Web/CSS/width
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[9]: https://developer.mozilla.org/en/docs/CSS/percentage#Interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers."
[10]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[11]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[13]: https://developer.mozilla.org/en/docs/CSS/percentage
[14]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Double_ampersand "Double ampersand: the two entities are mandatory, but may appear in any order."
[15]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Question_mark_(.3F) "Question mark multiplier: the previous entity is optional (it may be used once, or not at all)."
[16]: https://developer.mozilla.org/en/docs/Web/CSS/length
[17]: https://developer.mozilla.org/en/docs/Web/CSS/percentage