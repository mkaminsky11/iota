## page-break-before

### Summary

The `page-break-before` CSS property adjusts page breaks _before_ the current element.

This properties applies to block elements that generate a box. It won't apply on an empty [`<div>`][0] that won't generate a box.

**Note:** this property is in progress of being replaced by the more generic [`break-before`][1]. This new property also handles column and region breaks and is syntactically compatible with `page-break-before`.

Before using `page-break-before`, check if you can use `break-before` instead. In the future `page-break-before` will be a mere alias for some values of it.

* _[Initial value][2]_ `auto` 
* _Applies to_ block-level elements in the normal flow of the root element. UA may also apply it to other elements like table-row elements. 
* _[Inherited][3]_ no 
* _Media_ [`visual, paged`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: auto [|][7] always [|][7] avoid [|][7] left [|][7] right
    

    page-break-before: auto
    page-break-before: always
    page-break-before: avoid
    page-break-before: left
    page-break-before: right
    
    page-break-before: inherit
    

### Values

**`auto`**

> Initial value. Automatic page breaks (neither forced nor forbidden).

**`always`**

> Always force page breaks before the element.

**`avoid`**

> Avoid page breaks before the element.

**`left`**

> Force page breaks before the element so that the next page is formatted as a left page.

**`right`**

> Force page breaks before the element so that the next page is formatted as a right page.

### Examples

    /* avoid page break before the div */
    div.note { 
        page-break-before: avoid;
    } 
    

### Specification
Specification
Status
Comment

[CSS Paged Media Module Level 3  
The definition of 'page-break-before' in that specification.][8]
Working Draft
Extends the element that this property applies to table rows and table row groups.

[CSS Level 2 (Revision 1)  
The definition of 'page-break-before' in that specification.][9]
Recommendation
Initial specification.

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari (WebKit)

Basic support (`auto`, `always`)
1.0
1.0 (1.7 or earlier)
4.0
7.0
1.2 (125)

`avoid`, `left`, `right`
1.0
Not supported ([bug 132035][10])
4.0
7.0
1.2 (125)

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
?
1.0 (1.0)
?
?
?

`avoid`, `left`, `right`
?
Not supported ([bug 132035][10])
?
?
?

### See also

* [`page-break-after`][11], [`page-break-inside`][12]
* [`orphans`][13], [`widows`][14]


[0]: https://developer.mozilla.org/en/docs/Web/HTML/Element/div "The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate."
[1]: https://developer.mozilla.org/en/docs/Web/CSS/break-before "The break-before CSS property describes how the page, column or region break behavior before the generated box. If there is no generated box, the property is ignored."
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: http://dev.w3.org/csswg/css3-page/#page-break-before
[9]: http://www.w3.org/TR/CSS2/page.html#propdef-page-break-before
[10]: https://bugzilla.mozilla.org/show_bug.cgi?id=132035 "Implement missing page-break-* CSS2.1 features"
[11]: https://developer.mozilla.org/en/CSS/page-break-after "en/CSS/page-break-after"
[12]: https://developer.mozilla.org/en/CSS/page-break-inside "en/CSS/page-break-inside"
[13]: https://developer.mozilla.org/en/CSS/orphans "de/CSS/orphans"
[14]: https://developer.mozilla.org/en/CSS/widows "en/CSS/widows"