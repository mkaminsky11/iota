## position\_value

### Summary

The `<position>` [CSS][0] data type denotes a coordinate in a 2D space used to set a location relative to a box.

![](/files/3797/position_type.png)A specific coordinate can be given by a two keywords, with specific offsets. A keyword represent one edge of the element's box or the medium line between two edges: `left`, `right`, `top`, `bottom` or `center` (which represents either the center between the left and right edges, or the center between the top or bottom edges, depending on the context).

__An offset can be either a relative value, expressed as a [`<percentage>`][1], or an absolute [`<length>`][2] value. Positive values are offset towards the right or towards the bottom, whichever is suitable. Negative values are offset in the other directions.

The final position described by the `<position>` value does not need to be inside the element's box.

If an offset is given without an associated keywords, this one is assumed to be `center`.

### Interpolation

Both the abscissa and ordinate values are interpolated independently. As the speed is defined by the same [`<timing-function>`][3] for both, the point will move following a line.

### Values

    Formal grammar: [ [ left | center | right | top | bottom | _<percentage>_ | _<length>_ ] |
                      [ left | center | right | _<percentage>_ | _<length>_ ] [ top | center | bottom | _<percentage>_ | _<length>_ ] |
                      [ center | [ left | right ] [ _<percentage>_ | _<length>_ ]? ] && 
                      [ center | [ top | bottom ] [ _<percentage>_ | _<length>_ ]? ]
                    ]
    

    /* 1-value syntax */
    _keyword                  /* The corresponding edge, the other direction is corresponding to center, the middle of the edge */
    <length> or <percentage> /* The position on the x-axis, 50% for the y-axis */_
    
    /* 2-value syntax */
    _keyword_ _keyword_          /* A keyword for each direction, the order is irrelevant */
    _keyword __value__            _/* The value is the offset for the edge defined by the keyword */
    
    /* 2-value syntax with fixed offset */
    

### Specification
Specification
Status
Comment

[CSS Values and Units Module Level 3][4]
Candidate Recommendation
Relists links to both definition, with the requirement to be coherent: if [CSS Backgrounds and Borders Module Level 3][5] is supported, its definition of `<position>` must be used too.

[CSS Backgrounds and Borders Module Level 3][6]
Candidate Recommendation
Defines `<position>` explicitly and extends it to support offsets from any edge. __

[CSS Level 2 (Revision 1)][7]
Recommendation
Allows combination of a keyword with a [`<length>`][2], or [`<percentage>`][1] value.

[CSS Level 1][8]
Recommendation
Defines `<position>` anonymously as the value of [`background-position`][9].

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari

Basic support
1.0
1.0 (1.7 or earlier)
4.0
3.5
1.0 (85)

Combination of a keyword and a [`<length>`][2] or [`<percentage>`][1]
1.0
1.0 (1.7 or earlier)
4.0
3.5
1.0 (85)

Four-value syntax (support for offset from any edge) __
Not supported [WebKit bug 37514][10]
[13.0][11] (13.0)
Not supported
10.5
Not supported [WebKit bug 37514][10]

Feature
Android
Firefox Mobile (Gecko)
IE Mobile
Opera Mobile
Safari Mobile

Basic support
(Yes)
1.0 (1)
(Yes)
(Yes)
(Yes)

Combination of a keyword and a [`<length>`][2] or [`<percentage>`][1]
(Yes)
1.0 (1)
(Yes)
(Yes)
(Yes)

Four-value syntax (support for offset from any edge) __
Not supported
13.0 (13.0)
?
?
Not supported

### See also

* CSS Data Types : `[<angle>][12]`, `[<blend-mode>][13]`, `[<color>][14]`, `[<frequency>][15]`, `[<gradient>][16]`, `[<image>][17]`, `[<length>][18]`, `[<number>][19]`, `[<percentage>][20]`, `[<position>][21]`, `[<ratio>][22]`, `[<resolution>][23]`, `[<shape>][24]`, `[<string>][25]`, `[<time>][26]`, `[<timing-function>][27]`, `[<uri>][28]`, `[<user-ident>][29]`


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/percentage
[2]: https://developer.mozilla.org/en/docs/Web/CSS/length
[3]: https://developer.mozilla.org/en/docs/Web/CSS/timing-function
[4]: http://dev.w3.org/csswg/css3-values/#position "The definition of '<position>' in that specification."
[5]: http://dev.w3.org/csswg/css3-background/ "The 'CSS Backgrounds and Borders Module Level 3' specification"
[6]: http://dev.w3.org/csswg/css3-background/#ltpositiongt "The definition of '<position>' in that specification."
[7]: http://www.w3.org/TR/CSS2/colors.html#background-properties "The definition of '<position>' in that specification."
[8]: http://www.w3.org/TR/CSS1/#background-position "The definition of '<position>' in that specification."
[9]: https://developer.mozilla.org/en/docs/Web/CSS/background-position
[10]: https://bugs.webkit.org/show_bug.cgi?id=37514
[11]: https://developer.mozilla.org/en/Firefox/Releases/13 "Released on 2012-06-05."
[12]: https://developer.mozilla.org/en/docs/CSS/angle
[13]: https://developer.mozilla.org/en/docs/CSS/blend-mode
[14]: https://developer.mozilla.org/en/docs/CSS/color_value
[15]: https://developer.mozilla.org/en/docs/CSS/frequency
[16]: https://developer.mozilla.org/en/docs/CSS/gradient
[17]: https://developer.mozilla.org/en/docs/CSS/image
[18]: https://developer.mozilla.org/en/docs/CSS/length
[19]: https://developer.mozilla.org/en/docs/CSS/number
[20]: https://developer.mozilla.org/en/docs/CSS/percentage
[21]: https://developer.mozilla.org/en/docs/CSS/position
[22]: https://developer.mozilla.org/en/docs/CSS/ratio
[23]: https://developer.mozilla.org/en/docs/CSS/resolution
[24]: https://developer.mozilla.org/en/docs/CSS/shape
[25]: https://developer.mozilla.org/en/docs/CSS/string
[26]: https://developer.mozilla.org/en/docs/CSS/time
[27]: https://developer.mozilla.org/en/docs/CSS/timing-function
[28]: https://developer.mozilla.org/en/docs/CSS/uri
[29]: https://developer.mozilla.org/en/docs/CSS/user-ident