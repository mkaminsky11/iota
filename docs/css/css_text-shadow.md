## text-shadow

### Summary

The `text-shadow` CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and [`text-decorations`][0] of the element.

Each shadow is specified as an offset from the text, along with optional color and blur radius values.

Multiple shadows are applied front-to-back, with the first-specified shadow on top.

This property applies to both [`::first-line`][1] and [`::first-letter`][2] [pseudo-elements][3].

* _[Initial value][4]_ `none` 
* _Applies to_ all elements. It also applies to [`::first-letter`][2] and [`::first-line`][1]. 
* _[Inherited][5]_ yes 
* _Media_ [`visual`][6] 
* _[Computed value][7]_ a color plus three absolute lengths 
* _Animatable_ yes, as a shadow list 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    Formal grammar: none | [<shadow>,]* <shadow>
    
                    where <shadow> is: [ <color>? <offset-x> <offset-y> <blur-radius>? | <offset-x> <offset-y> <blur-radius>? <color>? ]

### Values

**<color\>**

> Optional. Can be specified either before or after the offset values. If the color is not specified, a UA-chosen color will be used. 
> 
> **Note:** If you want to ensure consistency across browsers, explicitly specify a color.

**<offset-x\> <offset-y\>**

> Required. These `<length>` values specify the shadow's offset from the text. `<offset-x>` specifies the horizontal distance; a negative value places the shadow to the left of the text. `<offset-y>` specifies the vertical distance; a negative value places the shadow above the text. If both values are `0`, then the shadow is placed behind the text (and may generate a blur effect when `<blur-radius>` is set).  
> To find out what units you can use, see [`<length>`][8].

**<blur-radius\>**

> Optional. This is a [`<length>`][8] value. If not specified, it defaults to `0`. The higher this value, the bigger the blur; the shadow becomes wider and lighter.

### Examples

    .red-text-shadow {
       text-shadow: red 0 -2px;
    }

    <p >
       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
       inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>

    .white-with-blue-shadow {
       text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
       color: white;
       font: 1.5em Georgia, "Bitstream Charter", "URW Bookman L", "Century Schoolbook L", serif;
    }

    <p >
       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
       veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>

    .gold-on-gold {
       text-shadow: rgba(0,0,0,0.1) -1px 0, rgba(0,0,0,0.1) 0 -1px,
       rgba(255,255,255,0.1) 1px 0, rgba(255,255,255,0.1) 0 1px,
       rgba(0,0,0,0.1) -1px -1px, rgba(255,255,255,0.1) 1px 1px; 
       color: gold;
       background: gold;
    }

    <p >
       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
       veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>

Specifications
Specification
Status
Comment

[CSS Transitions  
The definition of 'text-shadow' in that specification.][9]
Working Draft
Lists `text-shadow` as animatable.

[CSS Text-decoration Level 3  
The definition of 'text-shadow' in that specification.][10]
Candidate Recommendation

The CSS property `text-shadow` was [improperly defined in CSS2][11] and dropped in CSS2 (Level 1). The_CSS Text Module Level 3 _spec improved and precised the syntax. Later it was moved to new working draft _[CSS Text Decoration Module Level 3][12]_.

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari (WebKit)

Basic support
2.0.158.0
[3.5][13] (1.9.1)
10
9.5
1.1 (100)

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
?
?
?
?
?

* **Gecko** (Firefox) theoretically supports infinite text-shadows (don't try it).  
**Gecko 2** and later cap the blur radius at 300 for performance reasons.  
If the <color\> value is unspecified, then **Gecko** uses the value of the element's [`color`][14] property.
* **Opera** supports a maximum of 6-9 text-shadows for performance reasons. The blur radius is limited to 100px.  
**Opera 9.5-10.1** adheres to the old, reverse painting order (CSS2, the first specified shadow is on the _bottom_).
* **Internet Explorer 5.5** supports Microsoft's [_Shadow_ and _DropShadow_ Filter][15].
* **Safari: **Any shadows that do not explicitly specify a color are transparent.  
**Safari 1.1-3.2** only supports one text-shadow (displays the first shadow of a comma-separated list and ignores the rest).  
**Safari 4.0** (WebKit 528) and later support multiple text-shadows.
* **Konqueror** supports text-shadow starting with version 3.4\.

### See also

* [`box-shadow`][16]


[0]: https://developer.mozilla.org/en/docs/Web/CSS/text-decoration "The documentation about this has not yet been written; please consider contributing!"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/::first-line "The ::first-line CSS pseudo-element applies styles only to the first line of an element. The amount of the text on the first line depends of numerous factors, like the width of the elements or of the document, but also of the font size of the text. As all pseudo-elements, the selectors containing ::first-line does not match any real HTML element."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/::first-letter "The ::first-letter CSS pseudo-element selects the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements "https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements"
[4]: https://developer.mozilla.org/en/docs/CSS/initial_value
[5]: https://developer.mozilla.org/en/docs/CSS/inheritance
[6]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[7]: https://developer.mozilla.org/en/docs/CSS/computed_value
[8]: https://developer.mozilla.org/en/docs/Web/CSS/length "The documentation about this has not yet been written; please consider contributing!"
[9]: http://dev.w3.org/csswg/css-transitions/#animatable-css
[10]: http://dev.w3.org/csswg/css-text-decor-3/#text-shadow
[11]: http://www.w3.org/TR/2008/REC-CSS2-20080411/text.html#text-shadow-props "http://www.w3.org/TR/2008/REC-CSS2-20080411/text.html#text-shadow-props"
[12]: http://www.w3.org/TR/2012/WD-css-text-decor-3-20121113/ "http://www.w3.org/TR/2012/WD-css-text-decor-3-20121113/"
[13]: https://developer.mozilla.org/en/Firefox/Releases/3.5 "Released on 2009-06-30."
[14]: https://developer.mozilla.org/en/docs/Web/CSS/color "The CSS color property sets the foreground color of an element's text content, and its decorations. It doesn't affect any other characteristic of the element; it should really be called text-color and would have been named so, save for historical reasons and its appearance in CSS Level 1."
[15]: http://msdn.microsoft.com/en-us/library/ms673539(loband).aspx "http://msdn.microsoft.com/en-us/library/ms673539(loband).aspx"
[16]: https://developer.mozilla.org/en/docs/Web/CSS/box-shadow "Technical review completed."