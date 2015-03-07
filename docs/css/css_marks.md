## marks

### Summary

The `marks` [CSS][0] property adds crop and/or cross marks to the presentation of the document. _Crop marks_ indicate where the page should be cut. _Cross marks_ are used to align sheets.

Crop marks and cross marks are printed outside the page box. To have room to show crop and cross marks, the final pages will have to be somewhat bigger than the page box.

* _[Initial value][1]_ `none`
* _Applies to_ page context
* _[Inherited][2]_ no
* _Media_ [`visual`][3], paged
* _[Computed value][4]_ specified value

### Syntax

    marks: [ crop || cross ] | none
    

### Values

**`crop`**

> Crop marks will be displayed.

**`cross`**

> Cross marks will be displayed.

**`none`**

> No marks will be displayed.

### Examples

    @page { marks: crop cross; }
    



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/Web/CSS/Media/Visual
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value