## writing-mode

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The `writing-mode` [CSS][1] property defines whether lines of text are laid out horizontally or vertically and the direction in which blocks progress.

The property specifies the _block flow direction_, which is the direction in which block-level containers are stacked, and the direction in which inline-level content flows within a block container. Thus the `writing-mode` property also determines the ordering of block-level content.

* _[Initial value][2]_ `horizontal-tb` 
* _Applies to_ all elements except table row groups, table column groups, table rows, and table columns 
* _[Inherited][3]_ yes 
* _Media_ [`visual`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: horizontal-tb [|][7] vertical-rl [|][7] vertical-lr
    

    writing-mode: horizontal-tb
    writing-mode: vertical-rl
    writing-mode: vertical-lr
    
    writing-mode: inherit
    writing-mode: initial
    writing-mode: unsel
    

### Values

**`horizontal-tb`**

> Content flows horizontally from left to right, vertically from top to bottom. The next horizontal line is positioned below the previous line.

**`vertical-rl`**

> Content flows vertically from top to bottom, horizontally from left to right. The next vertical line is positioned to the right of the previous line.

**`vertical-lr`**

> Content flows vertically from top to bottom, horizontally from right to left. The next vertical line is positioned to the left of the previous line.

**`lr` __**

> Deprecated except for SVG1 documents. For CSS, use `horizontal-tb`.

**`lr-tb` __**

> Deprecated except for SVG1 documents. For CSS, use `horizontal-tb`.

**`rl` __**

> Deprecated except for SVG1 documents. For CSS, use `horizontal-tb`.

**`tb` __**

> Deprecated except for SVG1 documents. For CSS, use `vertical-rl`.

**`tb-rl` __**

> Deprecated except for SVG1 documents. For CSS, use `vertical-rl`.

### Example

    <p >Example text</p>
    

    .exampleText {
      writing-mode: vertical-rl;
    }

### Specification
Specification
Status
Comment

[CSS Writing Modes Module Level 3  
The definition of 'writing-mode' in that specification.][8]
Candidate Recommendation
Initial definition

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
(Yes) -webkit
[36][9] (36) [\[1\]][10]
9.0 -ms[\[2\]][11]
(Yes) -webkit
8.0 -webkit

SVG 1.1 values `lr`, `lr-tb`, `rl`, `tb`, `tb-rl`
(Yes)
Not supported
9.0 -ms[\[2\]][11]
(Yes)
?

Feature
Android
Firefox Mobile (Gecko)
IE Mobile
Opera Mobile
Safari Mobile

Basic support
?
36.0 (36) [\[1\]][10]
?
?
?

SVG 1.1 values `lr`, `lr-tb`, `rl`, `tb`, `tb-rl`
?
Not supported
?
?
?

\[1\] An experimental implementation is available since Gecko 36\. It is governed by the preference `layout.css.vertical-text.enabled` defaulting to `false`.

\[2\] The implementation in Internet Explorer differs from the specification. See the [related article in the Internet Explorer Dev Center][12].

### See also

* SVG `[writing-mode][13]` attribute


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: http://dev.w3.org/csswg/css3-writing-modes/#block-flow
[9]: https://developer.mozilla.org/en/Firefox/Releases/36 "Released on 2015-02-24."
[10]: #compat_hint1
[11]: #compat_hint2
[12]: https://msdn.microsoft.com/en-us/library/ie/ms531187%28v=vs.85%29.aspx
[13]: https://developer.mozilla.org/en/docs/Web/SVG/Attribute/writing-mode