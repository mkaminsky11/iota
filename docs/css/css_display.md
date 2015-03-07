## display

### Summary

The `display` CSS property specifies the type of rendering box used for an element. In HTML, default `display` property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is `inline`.

In addition to the many different display box types, the value `none` lets you turn off the display of an element; when you use `none`, all descendant elements also have their display turned off. The document is rendered as though the element doesn't exist in the document tree.

* _[Initial value][0]_ `inline` 
* _Applies to_ all elements 
* _[Inherited][1]_ no 
* _Media_ [`all`][2] 
* _[Computed value][3]_ as the specified value, except for positioned and floating elements and the root element. In both cases the computed value may be a keyword other than the one specified. 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][4]: none [|][5] inline [|][5] block [|][5] list-item [|][5] inline-block [|][5] inline-table [|][5] table [|][5] table-cell [|][5] table-column [|][5] table-column-group [|][5] table-footer-group [|][5] table-header-group [|][5] table-row [|][5] table-row-group [|][5] flex [|][5] inline-flex [|][5] grid [|][5] inline-grid [|][5] run-in [|][5] ruby [|][5] ruby-base [|][5] ruby-text [|][5] ruby-base-container [|][5] ruby-text-container [|][5] contents
    

    display: none
    
    display: inline
    display: block
    display: contents
    display: list-item
    display: inline-block
    display: inline-table
    display: table
    display: table-cell
    display: table-column
    display: table-column-group
    display: table-footer-group
    display: table-header-group
    display: table-row
    display: table-row-group
    display: flex
    display: inline-flex
    display: grid
    display: inline-grid
    display: ruby
    display: ruby-base
    display: ruby-text
    display: ruby-base-container
    display: ruby-text-container 
    display: run-in
    
    display: inherit
    display: initial
    display: unset
    

### Values

_**display-value**_

> Is a keyword defining the rendering type to apply to the element. Its possible values and their meanings are:
> Value set
> Value
> Description
> 
> Basic values (CSS 1)
> `none`
> 
> Turns off the display of an element (it has no effect on layout); all descendant elements also have their display turned off. The document is rendered as though the element did not exist.
> 
> To render an element box's dimensions, yet have its contents be invisible, see the [`visibility`][6] property.
> 
> `inline`
> The element generates one or more inline element boxes.
> 
> `block`
> The element generates a block element box.
> 
> `list-item`
> The element generates a block box for the content and a separate list-item inline box.
> 
> Extended values (CSS 2.1)
> `inline-block`
> The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would)
> 
> Table model values (CSS 2.1)
> `inline-table`
> The` inline-table `value does not have a direct mapping in HTML. It behaves like a [`<table>`][7] HTML element, but as an inline box, rather than a block-level box. Inside the table box is a block-level context.
> 
> `table`
> These elements behaves like  [`<table>`][7] HTML elements. It defines a block-level box.
> 
> `table-caption`
> These elements behave like [`<caption>`][8] HTML elements.
> 
> `table-cell`
> These elements behave like [`<td>`][9] HTML elements.
> 
> `table-column`
> These elements behave like  [`<col>`][10] HTML elements.
> 
> `table-column-group`
> These elements behave like  [`<colgroup>`][11] HTML elements.
> 
> `table-footer-group`
> These elements behave like [`<tfoot>`][12] HTML elements.
> 
> `table-header-group`
> These elements behave like [`<thead>`][13] HTML elements.
> 
> `table-row`
> These elements behave like [`<tr>`][14] HTML elements.
> 
> `table-row-group`
> These elements behave like [`<tbody>`][15] HTML elements
> 
> Flexbox model values ([CSS3][16])
> `flex`
> The element behaves like a block element and lays out its content according to the flexbox model.
> 
> `inline-flex`
> The element behaves like an inline element and lays out its content according to the flexbox model.
> 
> Grid box model values ([CSS3][16]) __
> `grid`
> 
> The element behaves like a block element and lays out its content according to the grid model.
> 
> As this is experimental, [most browsers don't support it][17]. Especially pay attention that `-moz-grid` is not the prefixed version of this, but a [XUL layout model][18] that must not be used on a Web site.
> 
> `inline-grid`
> The element behaves like an inline element and lays out its content according to the grid model.
> 
> Ruby formatting model values ([CSS3][16])__
> `ruby`
> The element behaves like an inline element and lays out its content according to the ruby formatting model. It behaves like the corresponding [`<ruby>`][19] HTML elements.
> 
> `ruby-base`
> These elements behave like [`<rb>`][20] elements.
> 
> `ruby-text`
> These elements behave like [`<rt>`][21] elements.
> 
> `ruby-base-container`
> These elements behave like [`<rbc>`][22] elements generated as anonymous boxes.
> 
> `ruby-text-container`
> These elements behave like [`<rbc>`][22] elements.
> 
> Experimental values __
> `run-in`
> 
> * If the run-in box contains a block box, same as block.
> * If a block box follows the run-in box, the run-in box becomes the first inline box of the block box.
> * If an inline box follows, the run-in box becomes a block box.
> 
> `contents`
> These elements don't produce a specific box by themselves. They are replaced by their pseudo-box and their child boxes.
> 
> 

### Examples

[View Live Examples][23]

    p.secret  { display: none }
    <p style="display:none"> invisible text </p>
    



[0]: https://developer.mozilla.org/en/docs/CSS/initial_value
[1]: https://developer.mozilla.org/en/docs/CSS/inheritance
[2]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[3]: https://developer.mozilla.org/en/docs/CSS/computed_value
[4]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[5]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[6]: https://developer.mozilla.org/en/docs/Web/CSS/visibility "The visibility CSS property has two purposes:"
[7]: https://developer.mozilla.org/en/docs/Web/HTML/Element/table "The HTML Table Element (<table>) represents data in two dimensions or more."
[8]: https://developer.mozilla.org/en/docs/Web/HTML/Element/caption "The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table."
[9]: https://developer.mozilla.org/en/docs/Web/HTML/Element/td "The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model."
[10]: https://developer.mozilla.org/en/docs/Web/HTML/Element/col "The HTML <col> Element (or HTML Table Column Element) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element."
[11]: https://developer.mozilla.org/en/docs/Web/HTML/Element/colgroup "The HTML <colgroup> Element (or HTML Table Column Group Element) defines a group of columns within a table."
[12]: https://developer.mozilla.org/en/docs/Web/HTML/Element/tfoot "The HTML Table Foot Element (<tfoot>) defines a set of rows summarizing the columns of the table."
[13]: https://developer.mozilla.org/en/docs/Web/HTML/Element/thead "The HTML Table Head Element (<thead>) defines a set of rows defining the head of the columns of the table."
[14]: https://developer.mozilla.org/en/docs/Web/HTML/Element/tr "The HTML Table Row Element (<tr>) defines a row of cells in a table. Those can be a mix of <td> and <th> elements."
[15]: https://developer.mozilla.org/en/docs/Web/HTML/Element/tbody "The HTML Table Body Element (<tbody>) defines one or more rows as the body of its parent <table> element when no <tr> elements are children of the parent.  In conjunction with a preceding <tfoot> and <thead> element, (<tbody>) provides additional semantic information for devices such as printers and displays. Of the parent table's child elements, (<tbody>) will represent the content, if longer than a page, that will most likely differ for each page printed. The <tfoot> and <thead> elements' content will be consistent for each page printed. For displays, (<tbody>) will enable separate scrolling from the <tfoot>, <thead> and <caption> elements of the same parent <table> element."
[16]: https://developer.mozilla.org/en/docs/CSS/CSS3 "CSS3"
[17]: https://developer.mozilla.org/en/docs/CSS/display#Browser_Compatibility "https://developer.mozilla.orghttps://developer.mozilla.org/en/CSS/display#Browser_Compatibility"
[18]: https://bugzilla.mozilla.org/show_bug.cgi?id=616605#c10 "https://bugzilla.mozilla.org/show_bug.cgi?id=616605#c10"
[19]: https://developer.mozilla.org/en/docs/Web/HTML/Element/ruby "The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronounciation of East Asian characters."
[20]: https://developer.mozilla.org/en/docs/Web/HTML/Element/rb "This article hasn't been written yet. Please consider contributing!"
[21]: https://developer.mozilla.org/en/docs/Web/HTML/Element/rt "The HTML <rt> Element embraces pronunciation of character presented in a ruby annotations, which are for showing pronunciation of East Asian characters and the <rt> element is used inside of <ruby> element."
[22]: https://developer.mozilla.org/en/docs/Web/HTML/Element/rbc "This article hasn't been written yet. Please consider contributing!"
[23]: /samples/cssref/display.html