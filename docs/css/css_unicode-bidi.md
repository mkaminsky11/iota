## unicode-bidi

### Summary

The `unicode-bidi` [CSS][0] property together with the [`direction`][1] property relates to the handling of bidirectional text in a document. For example, if a block of text contains both left-to-right and right-to-left text then the user-agent uses a complex Unicode algorithm to decide how to display the text. This property overrides this algorithm and allows the developer to control the text embedding.

The `unicode-bidi` and [`direction`][1] properties are the two only properties that are not affected by the [`all`][2] shorthand.

**Note:** This property is intended for DTD designers. Web designers and similar authors should not override it.

* _[Initial value][3]_ `normal` 
* _Applies to_ all elements, though some values have no effect on non-inline elements 
* _[Inherited][4]_ no 
* _Media_ [`visual`][5] 
* _[Computed value][6]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][7]: normal [|][8] embed [|][8] isolate [|][8] bidi-override [|][8] isolate-override [|][8] plaintext
    

    unicode-bidi: normal
    unicode-bidi: embed
    unicode-bidi: isolate
    unicode-bidi: bidi-override
    unicode-bidi: isolate-override
    unicode-bidi: plaintext
    
    unicode-bidi: inherit
    

### Values

**`normal`**

> The element does not offer a additional level of embedding with respect to the bidirectional algorithm. For inline elements implicit reordering works across element boundaries.

**`embed`**

> If the element is inline, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the [`direction`][1] property.

**`bidi-override`**

> For inline elements this creates an override. For block container elements this creates an override for inline-level descendants not within another block container element. This means that inside the element, reordering is strictly in sequence according to the [`direction`][1] property; the implicit part of the bidirectional algorithm is ignored.

**`isolate` __**

> This keyword indicates that the element's container directionality should be calculated without considering the content of this element. The element is therefore _isolated_ from its siblings. When applying its bidirectional-resolution algorithm, its container element treats it as one or several `U+FFFC Object Replacement Character`, i.e. like an image.

**`isolate-override`__**

> This keyword applies the isolation behavior of the `isolate` keyword to the surrounding content and the override behavior of the `bidi-override` keyword to the inner content.

**`plaintext`__**

> This keyword makes the elements directionality calculated without considering its parent bidirectional state or the value of the [`direction`][1] property. The directionality is calculated using the P2 and P3 rules of the Unicode Bidirectional Algorithm.  
> This value allows to display data which has already formatted using a tool following the Unicode Bidirectional Algorithm.

### Examples

    .bible-quote {
      direction: rtl;   
      unicode-bidi: embed;
    } 
    

### Specification
Specification
Status
Comment

[CSS Writing Modes Module Level 3  
The definition of 'unicode-bidi' in that specification.][9]
Candidate Recommendation
Added `plaintext`, `isolate`, and `isolate-override` keywords

[CSS Level 2 (Revision 1)  
The definition of 'unicode-bidi' in that specification.][10]
Recommendation

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
2.0
1.0 (1.7 or earlier)
5.5
9.2
1.3

`isolate`__
16 -webkit \[1\]
[10][11] (10) -moz \[2\]
Not supported
Not supported
Not supported

`plaintext`__
Not supported
[10][11] (10) -moz
Not supported
Not supported
Not supported

`isolate-override`__
Not supported
[17][12] (17) -moz
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
1.0
1.0 (1.0)
6
8
3.1

`isolate`__
?
10.0 (10) -moz
Not supported
Not supported
Not supported

`plaintext`__
Not supported
10.0 (10) -moz \[3\]
Not supported
Not supported
Not supported

`isolate-override`__
Not supported
17.0 (17) -moz
Not supported
Not supported
Not supported

\[1\] Since Chrome 19, the syntax from a previous version of the spec, where the `isolate` keyword could be used together with `bidi-override`, is allowed.

\[2\] From Firefox 10 to Firefox 16 included, the old version of the spec, where the `isolate` keyword could be used together with `bidi-override`, was implemented. From Firefox 17, this is no longer possible: only one value is allowed and the previous `isolate bidi-override` can be described using the new `isolate-override` keyword.

\[3\] Up to Firefox 15, `plaintext` didn't do anything to an inline element. The specification changed and the implementation was fixed in Firefox 15\.

### See also

* [`direction`][1]


[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/direction "Set the direction CSS property to match the direction of the text: rtl for languages written from right-to-left (like Hebrew or Arabic) text and ltr for other scripts. This is typically done as part of the document (e.g., using the dir attribute in HTML) rather than through direct use of CSS."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/all "The CSS all shorthand property resets all properties, but unicode-bidi and direction to their initial or inherited value."
[3]: https://developer.mozilla.org/en/docs/CSS/initial_value
[4]: https://developer.mozilla.org/en/docs/CSS/inheritance
[5]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[6]: https://developer.mozilla.org/en/docs/CSS/computed_value
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[8]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[9]: http://dev.w3.org/csswg/css3-writing-modes/#unicode-bidi
[10]: http://www.w3.org/TR/CSS2/visuren.html#propdef-unicode-bidi
[11]: https://developer.mozilla.org/en/Firefox/Releases/10 "Released on 2012-01-31."
[12]: https://developer.mozilla.org/en/Firefox/Releases/17 "Released on 2012-11-20."