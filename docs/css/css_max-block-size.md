## max-block-size

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The `max-block-size` [CSS][1] property defines the horizontal or vertical maximal size of an element's block depending on its writing mode. It corresponds to the [`max-width`][2] or the [`max-height`][3] property, depending on the value defined for [`writing-mode`][4]. If the writing mode is vertically oriented, the value of `max-block-size` relates to the maximal width of the element, otherwise it relates to the maximal height of the element. It relates to [`max-inline-size`][5], which defines the other dimension of the element.

* _[Initial value][6]_ `0` 
* _Applies to_ same as [`width`][7] and [`height`][8] 
* _[Inherited][9]_ no 
* _Percentages_ block-size of containing block 
* _Media_ [`visual`][10] 
* _[Computed value][11]_ same as [`max-width`][2] and [`max-height`][3] 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][12]: [<'max-width'>][13]
    

    max-block-size: 300px           /* <length> values */
    max-block-size: 25em
    
    max-block-size: 75%             /* <percentage> values */
    
    max-block-size: none            /* Keyword values */
    max-block-size: max-content
    max-block-size: min-content
    max-block-size: fit-content
    max-block-size: fill-available
    
    max-block-size: inherit

### Values

The `max-block-size` property takes the same values as the [`max-width`][2] and [`max-height`][3] properties.

### Example

### HTML Content

    <p >Example text</p>
    

### CSS Content

    .exampleText {
      writing-mode: vertical-rl;
      background-color: yellow;
      block-size: 100%;
      max-block-size: 200px;
    }

### Specification
Specification
Status
Comment

[CSS Logical Properties Level 1  
The definition of 'max-block-size' in that specification.][14]
Editor's Draft
Initial definition

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
Not supported
[38.0][15] (38.0)[\[1\]][16]
Not supported
Not supported
Not supported

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
Not supported
38.0 (38.0)[\[1\]][16]
Not supported
Not supported
Not supported

\[1\] Available since Gecko 38, but behind the preference `layout.css.vertical-text.enabled`, disabled by default.

### See also

* The mapped physical properties: [`max-width`][2] and [`max-height`][3]
* [`writing-mode`][4]
* Logical CSS properties: 
[`block-size`][17], 
[`inline-size`][18], 
[`min-block-size`][19], 
[`min-inline-size`][20], 
[`max-block-size`][21], 
[`max-inline-size`][5], 
[`margin-block-start`][22], 
[`margin-block-end`][23], 
[`margin-inline-start`][24], 
[`margin-inline-end`][25], 
[`offset-block-start`][26], 
[`offset-block-end`][27], 
[`offset-inline-start`][28], 
[`offset-inline-end`][29], 
[`padding-block-start`][30], 
[`padding-block-end`][31], 
[`padding-inline-start`][32], 
[`padding-inline-end`][33], 
[`border-block-start-width`][34], 
[`border-block-end-width`][35], 
[`border-inline-start-width`][36], 
[`border-inline-end-width`][37], 
[`border-block-start-style`][38], 
[`border-block-end-style`][39], 
[`border-inline-start-style`][40], 
[`border-inline-end-style`][41], 
[`border-block-start-color`][42], 
[`border-block-end-color`][43], 
[`border-inline-start-color`][44], 
[`border-inline-end-color`][45], 
[`border-block-start`][46], 
[`border-block-end`][47], 
[`border-inline-start`][48], 
[`border-inline-end`][49]


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/max-width "The max-width CSS property is used to set the maximum width of a given element. It prevents the used value of the width property from becoming larger than the value specified for max-width."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/max-height "The max-height CSS property is used to set the maximum height of a given element. It prevents the used value of the height property from becoming larger than the value specified for max-height."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/writing-mode "CSS Writing Modes Level 3 defines CSS features to support various international script modes, such as left-to-right (e.g., Latin and Indic), right-to-left (e.g., Hebrew and Arabic), bidirectional (e.g., mixed Latin and Arabic) and vertical (e.g., Asian). This article is about the CSS writing-mode property."
[5]: https://developer.mozilla.org/en/docs/Web/CSS/max-inline-size "The max-inline-size CSS property defines the horizontal or vertical maximal size of an element's block depending on it's writing mode. It corresponds to the max-width or the max-height property depending on the value defined for writing-mode."
[6]: https://developer.mozilla.org/en/docs/CSS/initial_value
[7]: https://developer.mozilla.org/en/docs/Web/CSS/width "The width CSS property specifies the width of the content area of an element. The content area is inside the padding, border, and margin of the element."
[8]: https://developer.mozilla.org/en/docs/Web/CSS/height "The height CSS property specifies the height of the content area of an element. The content area is inside the padding, border, and margin of the element."
[9]: https://developer.mozilla.org/en/docs/CSS/inheritance
[10]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[11]: https://developer.mozilla.org/en/docs/CSS/computed_value
[12]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[13]: https://developer.mozilla.org/en/docs/CSS/max-width "<length> | <percentage> | none | max-content | min-content | fit-content | fill-available"
[14]: http://dev.w3.org/csswg/css-logical-props/#propdef-max-block-size
[15]: https://developer.mozilla.org/en/Firefox/Releases/38 "Released on 2015-05-19."
[16]: #compat_hint1
[17]: https://developer.mozilla.org/en/docs/Web/CSS/block-size "The block-size CSS property defines the horizontal or vertical size of an element's block depending on it's writing mode. It corresponds to the width or the height property depending on the value defined for writing-mode."
[18]: https://developer.mozilla.org/en/docs/Web/CSS/inline-size "The inline-size CSS property defines the horizontal or vertical size of an element's block depending on it's writing mode. It corresponds to the width or the height property depending on the value defined for writing-mode."
[19]: https://developer.mozilla.org/en/docs/Web/CSS/min-block-size "The min-block-size CSS property defines the horizontal or vertical minimal size of an element's block depending on it's writing mode. It corresponds to the min-width or the min-height property depending on the value defined for writing-mode."
[20]: https://developer.mozilla.org/en/docs/Web/CSS/min-inline-size "The min-inline-size CSS property defines the horizontal or vertical minimal size of an element's block depending on it's writing mode. It corresponds to the min-width or the min-height property depending on the value defined for writing-mode."
[21]: https://developer.mozilla.org/en/docs/Web/CSS/max-block-size "The max-block-size CSS property defines the horizontal or vertical maximal size of an element's block depending on it's writing mode. It corresponds to the max-width or the max-height property depending on the value defined for writing-mode."
[22]: https://developer.mozilla.org/en/docs/Web/CSS/margin-block-start "The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[23]: https://developer.mozilla.org/en/docs/Web/CSS/margin-block-end "The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[24]: https://developer.mozilla.org/en/docs/Web/CSS/margin-inline-start "The margin-inline-start CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[25]: https://developer.mozilla.org/en/docs/Web/CSS/margin-inline-end "The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction and text-orientation."
[26]: https://developer.mozilla.org/en/docs/Web/CSS/offset-block-start "The offset-block-start CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[27]: https://developer.mozilla.org/en/docs/Web/CSS/offset-block-end "The offset-block-end CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[28]: https://developer.mozilla.org/en/docs/Web/CSS/offset-inline-start "The offset-inline-start CSS property defines the logical inline start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[29]: https://developer.mozilla.org/en/docs/Web/CSS/offset-inline-end "The offset-inline-end CSS property defines the logical inline end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the top, right, bottom or left property depending on the values defined for writing-mode, direction and text-orientation."
[30]: https://developer.mozilla.org/en/docs/Web/CSS/padding-block-start "The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[31]: https://developer.mozilla.org/en/docs/Web/CSS/padding-block-end "The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[32]: https://developer.mozilla.org/en/docs/Web/CSS/padding-inline-start "The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[33]: https://developer.mozilla.org/en/docs/Web/CSS/padding-inline-end "The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the padding-top, padding-right, padding-bottom or padding-left property depending on the values defined for writing-mode, direction and text-orientation."
[34]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-width "The border-block-start-width CSS property defines the width of the logical block start border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[35]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-width "The border-block-end-width CSS property defines the width of the logical block end border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[36]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-width "The border-inline-start-width CSS property defines the width of the logical inline start border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[37]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-width "The border-inline-end-width CSS property defines the width of the logical inline end border of an element, which maps to a physical border width depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-width, border-right-width, border-bottom-width or border-left-width property depending on the values defined for writing-mode, direction and text-orientation."
[38]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-style "The border-block-start-style CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[39]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-style "The border-block-end-style CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[40]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-style "The border-inline-start-style CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[41]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-style "The border-inline-end-style CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-style, border-right-style, border-bottom-style or border-left-style property depending on the values defined for writing-mode, direction and text-orientation."
[42]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start-color "The border-block-start-color CSS property defines the color of the logical block start border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[43]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end-color "The border-block-end-color CSS property defines the color of the logical block end border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[44]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start-color "The border-inline-start-color CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[45]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end-color "The border-inline-end-color CSS property defines the color of the logical inline end border of an element, which maps to a physical border color depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top-color, border-right-color, border-bottom-color or border-left-color property depending on the values defined for writing-mode, direction and text-orientation."
[46]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-start "The border-block-start CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet. border-block-start can be used to set the values for one or more of: border-block-start-width, border-block-start-style, border-block-start-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[47]: https://developer.mozilla.org/en/docs/Web/CSS/border-block-end "The border-block-end CSS property is a shorthand property for setting the individual logical block end border property values in a single place in the style sheet. border-block-end can be used to set the values for one or more of: border-block-end-width, border-block-end-style, border-block-end-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[48]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-start "The border-inline-start CSS property is a shorthand property for setting the individual logical inline start border property values in a single place in the style sheet. border-inline-start can be used to set the values for one or more of: border-inline-start-width, border-inline-start-style, border-inline-start-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."
[49]: https://developer.mozilla.org/en/docs/Web/CSS/border-inline-end "The border-inline-end CSS property is a shorthand property for setting the individual logical inline end border property values in a single place in the style sheet. border-inline-end can be used to set the values for one or more of: border-inline-end-width, border-inline-end-style, border-inline-end-color. It maps to a physical border depending on the element's writing mode, directionality and text orientation. I.e. it corresponds to the border-top, border-right, border-bottom or border-left property depending on the values defined for writing-mode, direction and text-orientation."