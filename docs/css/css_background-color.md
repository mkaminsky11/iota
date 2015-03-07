## background-color

### Summary

The `background-color` [CSS][0] property sets the background color of an element, either through a color value or the keyword `transparent`.

* _[Initial value][1]_ `transparent` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2] and [`::first-line`][3]. 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ \*Not in database (color)\* 
* _Animatable_ yes, as a [color][7] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][8]: [<color>][9]

    background-color: red
    background-color: rgb(255, 255, 128)
    background-color: hsla(50, 33%, 25%, 0.75)
    background-color: currentColor
    background-color: transparent
    background-color: #bbff00
    
    background-color: inherit
    

### Values

**`<color>`**

> Is a CSS [`<color>`][10] that describes the uniform color of the background. Even if one or several [`background-image`][11] are defined, this color can be affect the rendering, by transparency if the images aren't opaque. In CSS, `transparent` is a color.

### Examples

[View the live example][12]

    .exampleOne {
    	background-color: teal;
    	color: white;
    }
    
    .exampleTwo {
    	background-color: rgb(153,102,153);
    	color: rgb(255,255,204);
    }
    
    .exampleThree {
    	background-color: #777799;
    	color: #FFFFFF;
    }
    
    .exampleFour {
      background-color: hsla(300, 20%, 50%, 0.8);
      color: hsla(60, 100%, 90%, 0.8);
    }
    
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/color_value#Interpolation "Values of the <color> CSS data type are interpolated on each of their red, green, blue components, each handled as a real, floating-point number. Note that interpolation of colors happens in the alpha-premultiplied sRGBA color space to prevent unexpected grey colors to appear."
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax"
[9]: https://developer.mozilla.org/en/docs/Web/CSS/color_value
[10]: https://developer.mozilla.org/en/docs/Web/CSS/color_value "The documentation about this has not yet been written; please consider contributing!"
[11]: https://developer.mozilla.org/en/docs/Web/CSS/background-image "Technical review completed."
[12]: /samples/cssref/background-color.html