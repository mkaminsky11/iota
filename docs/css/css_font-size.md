## font-size

### Summary

The `font-size` [CSS][0] property specifies the size of the font -- specifically the desired height of glyphs from the font. Setting the font size may, in turn, change the size of other items, since it is used to compute the value of `em` and `ex` length units.

* _[Initial value][1]_ `medium` 
* _Applies to_ all elements 
* _[Inherited][2]_ yes 
* _Percentages_ refer to the parent element's font size 
* _Media_ [`visual`][3] 
* _[Computed value][4]_ as specified, but with relative lengths converted into absolute lengths 
* _Animatable_ yes, as a [length][5] 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: [<absolute-size>][7] [|][8] [<relative-size>][9] [|][8] [<length>][10] [|][8] [<percentage>][11]

    font-size: xx-small  /* <absolute-size> values */
    font-size: x-small
    font-size: small
    font-size: medium
    font-size: large
    font-size: x-large
    font-size: xx-large
    
    font-size: larger    /* <relative-size> values */
    font-size: smaller
    
    font-size: 12px      /* <length> values */
    font-size: 0.8em
    
    font-size: 80%       /* <percentage> values */
    
    font-size: inherit
    

### Values

**`xx-small, x-small, small, medium, large, x-large, xx-large`**

> A set of absolute size keywords based on the user's default font size (which is `medium`). Similar to presentational HTML's `<font size="1">` through `<font size="7">` where the user's default font size is `<font size="3">`.

**`larger, smaller`**

> Larger or smaller than the parent element's font size, by roughly the ratio used to separate the absolute size keywords above.

**`<length>`__**

> A positive [`<length>`][12]. When the units are specified in `em` or `ex`, the size is defined relative to the size of the font on the parent element of the element in question. For example, 0.5em is half the font size of the parent of the current element.

**`<percentage>`**

> A positive [`<percentage>`][13] of the parent element's font size.

It is best to use values that are relative to the user's default font size, and avoid absolute values such as lengths with units other than `em` or `ex`. However, if such absolute values must be used, `px` are preferred over other units because their meaning does not vary depending on what the operating system thinks (generally incorrectly) the resolution of the monitor is.

### Possible approaches

There are several ways to specify the font size, with keywords or numerical values for pixels or ems. Choose the appropriate method based on the needs for the particular web page.

### Keywords

Keywords are a good way to set the size of fonts on the web. By setting a keyword font size on the body element, you can set relative font-sizing everywhere else on the page, giving you the ability to easily scale the font up or down on the entire page accordingly.

### Pixels

Setting the font size in pixel values (`px`) is a good choice when you need pixel accuracy. A px value is static. This is an OS-independent and cross-browser way of literally telling the browsers to render the letters at exactly the number of pixels in height that you specified. The results may vary slightly across browsers, as they may use different algorithms to achieve a similar effect.

Font sizing settings can also be used in combination. For example, if a parent element is set to `16px` and its child element is set to `larger`, the child element displays larger than the parent element in the page.

**Note:** Defining font sizes in pixel is _not accessible_, because the user cannot change the font size from the browser. (For example, users with limited vision may wish to set the font size much larger than the size chosen by a web designer.) Therefore, avoid using pixels for font sizes if you wish to create an inclusive design.

### Ems

Another way of setting the font size is with `em` values. The size of an `em` value is dynamic. When defining the `font-size` property, an em is equal to the size of the font that applies to the parent of the element in question. If you haven't set the font size anywhere on the page, then it is the browser default, which is probably 16px. So, by default 1em = 16px, and 2em = 32px. If you set a `font-size` of 20px on the body element, then 1em = 20px and 2em = 40px. Note that the value 2 is essentially a multiplier of the current em size.

In order to calculate the em equivalent for any pixel value required, you can use this formula:

    em = desired element pixel value / parent element font-size in pixels

For example, suppose the font-size of the body of the page is set to 1em, with the browser standard of 1em = 16px; if the font-size you want is 12px, then you should specify 0.75em (because 12/16 = 0.75). Similarly, if you want a font size of 10px, then specify 0.625em (10/16 = 0.625); for 22px, specify 1.375em (22/16).

A popular technique to use throughout the document is to set the the font-size of the body to 62.5% (that is 62.5% of the default of 16px), which equates to 10px, or 0.625em. Now you can set the font-size for any elements using em units, with an easy-to-remember conversion, by dividing the px value by 10\. This way 6px = 0.6em, 8px = 0.8em, 12px = 1.2em, 14px = 1.4em, 16px = 1.6em. For example:

    body {
      font-size: 62.5%; /* font-size 1em = 10px */
    }
    p {
      font-size: 1.6em; /* 1.6em = 16px */
    }

The em is a very useful unit in CSS, since it can adapt automatically to the font that the reader chooses to use.

### Examples

### Example 1

    /* Set paragraph text to be very large. */
    p { font-size: xx-large }
    
    /* Set h1 (level 1 heading) text to be 2.5 times the size
     * of the text around it. */
    h1 { font-size: 250% }
    
    /* Sets text enclosed within span tag to be 16px */
    span { font-size: 16px; }
    

### Example 2

    .small {
    	font-size: xx-small;
    }
    .larger {
    	font-size: larger;
    }
    .point {
    	font-size: 24pt;
    }
    .percent {
    	font-size: 200%;
    }
    

    <h1 >Small H1</h1>
    <h1 >Larger H1</h1>
    <h1 >24 point H1</h1>
    <h1 >200% H1</h1>

#### Live Sample

### Notes

`em` and `ex` units on the [`font-size`][14] property are relative to the parent element's font size (unlike all other properties, where they're relative to the font size on the element). This means `em` units and percentages do the same thing for [`font-size`][14].


[0]: https://developer.mozilla.org/en/docs/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/CSS/length#Interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-absolute-size "xx-small | s-small | small | medium | large | x-large | xx-large"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: the two entities are optional, but exactly one must be present."
[9]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-relative-size "larger | smaller"
[10]: https://developer.mozilla.org/en/docs/CSS/length "Possible value: a number followed by 'em', 'ex', 'ch', 'rem', 'px', 'cm', 'mm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'px', like 3px, 1.5cm, -0.5em, 0."
[11]: https://developer.mozilla.org/en/docs/CSS/percentage
[12]: https://developer.mozilla.org/en/docs/Web/CSS/length
[13]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[14]: https://developer.mozilla.org/en/docs/Web/CSS/font-size