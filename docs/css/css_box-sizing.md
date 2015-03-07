## box-sizing

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `box-sizing` [CSS][1] property is used to alter the default [CSS box model][2] used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.

* _[Initial value][3]_ `content-box` 
* _Applies to_ all elements that accept width or height 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: content-box [|][8] padding-box [|][8] border-box
    

    box-sizing: content-box
    box-sizing: padding-box
    box-sizing: border-box
    
    box-sizing: inherit
    

### Values

**`content-box`**

> This is the default style as specified by the CSS standard. The [`width`][9] and [`height`][10] properties are measured including only the content, but not the padding, border or margin. Note: Padding, border & margin will be outside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 370px;}

**`padding-box`__**

> The [`width`][9] and [`height`][10] properties include the padding size, and do not include the border or margin. 

**`border-box`**

> The [`width`][9] and [`height`][10] properties include the padding and border, but not the margin. This is the [box model][2] used by Internet Explorer when the document is in Quirks mode. Note: Padding & border will be inside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 350px;}

### Examples

    /* support Firefox, WebKit, Opera and IE8+ */
    
    .example {
      -moz-box-sizing: border-box;
           box-sizing: border-box;
    }



[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS/Common_CSS_Questions"
[2]: https://developer.mozilla.org/en/docs/CSS/Box_model "CSS/Box_model"
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/width "The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/height "The height CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element."