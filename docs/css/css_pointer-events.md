## pointer-events

### Summary

The CSS property `pointer-events` allows authors to control under what circumstances (if any) a particular graphic element can become the [target][0] of mouse events. When this property is unspecified, the same characteristics of the `visiblePainted` value apply to SVG content.

In addition to indicating that the element is not the target of mouse events, the value `none` instructs the mouse event to go "through" the element and target whatever is "underneath" that element instead.

* _[Initial value][1]_ `auto`
* _Applies to_ all elements
* _[Inherited][2]_ yes
* _Media_ [`visual`][3]
* _[Computed value][4]_ the specified value, or else the inherited value

### Syntax

    pointer-events:  _auto_ | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit
    

### Values

**`auto`**

> The element behaves as it would if the `pointer-events` property was not specified. In SVG content, this value and the value `visiblePainted` have the same effect.

**`none`**

> The element is never the [target][0] of mouse events; however, mouse events may target its descendant elements if those descendants have `pointer-events` set to some other value. In these circumstances, mouse events will trigger event listeners on this parent element as appropriate on their way to/from the descendant during the event capture/[bubble][5] phases.

**`visiblePainted`**

> SVG only. The element can only be the target of a mouse event when the `visibility` property is set to `visible` and when the mouse cursor is over the interior (i.e., 'fill') of the element and the `fill` property is set to a value other than `none`, or when the mouse cursor is over the perimeter (i.e., 'stroke') of the element and the `stroke` property is set to a value other than `none`.

**`visibleFill`**

> SVG only. The element can only be the target of a mouse event when the `visibility` property is set to `visible` and when the mouse cursor is over the interior (i.e., fill) of the element. The value of the `fill` property does not effect event processing.

**`visibleStroke`**

> SVG only. The element can only be the target of a mouse event when the `visibility` property is set to `visible` and when the mouse cursor is over the perimeter (i.e., stroke) of the element. The value of the `stroke` property does not effect event processing.

**`visible`**

> SVG only. The element can be the target of a mouse event when the `visibility` property is set to `visible` and the mouse cursor is over either the interior (i.e., fill) or the perimeter (i.e., stroke) of the element. The values of the `fill` and `stroke` do not effect event processing.

**`painted`**

> SVG only. The element can only be the target of a mouse event when the mouse cursor is over the interior (i.e., 'fill') of the element and the `fill` property is set to a value other than `none`, or when the mouse cursor is over the perimeter (i.e., 'stroke') of the element and the `stroke` property is set to a value other than `none`. The value of the `visibility` property does not effect event processing.

**`fill`**

> SVG only. The element can only be the target of a mouse event when the pointer is over the interior (i.e., fill) of the element. The values of the `fill` and `visibility` properties do not effect event processing.

**`stroke`**

> SVG only. The element can only be the target of a mouse event when the pointer is over the perimeter (i.e., stroke) of the element. The values of the `stroke` and `visibility` properties do not effect event processing.

**`all`**

> SVG only. The element can only be the target of a mouse event when the pointer is over the interior (i.e., fill) or the perimeter (i.e., stroke) of the element. The values of the `fill`, `stroke` and `visibility` properties do not effect event processing.

### Examples

### Example 1

    /* Example 1: Makes all the img non-reactive to any mouse events such as dragging, hovering, clicking etc */
    img {
      pointer-events: none;
    }

### Example 2

Makes the link to http://example.com non-reactive.

    <ul>
      <li><a href="https://developer.mozilla.org">MDN</a></li>
      <li><a href="http://example.com">example.com</a></li>
    </ul>

    a[href="http://example.com"] {
      pointer-events: none;
    }

### Notes

Note that preventing an element from being the target of mouse events by using `pointer-events` does _not_ necessarily mean that mouse event listeners on that element _cannot_ or _will not_ be triggered. If one of the element's children has `pointer-events` explicitly set to _allow_ that child to be the target of mouse events, then any events targeting that child will pass through the parent as the event travels along the parent chain, and trigger event listeners on the parent as appropriate. Of course any mouse activity at a point on the screen that is covered by the parent but not by the child will not be caught by either the child or the parent (it will go "through" the parent and target whatever is underneath).

We would like to provide finer grained control (than just `auto` and `none`) in HTML for which parts of an element will cause it to "catch" mouse events, and when. To help us in deciding how `pointer-events` should be further extended for HTML, if you have any particular things that you would like to be able to do with this property, then please add them to the Use Cases section of [this wiki page][6] (don't worry about keeping it tidy).

This property can also be used to achieve better framerates while scrolling. Indeed, while scrolling, the mouse hovers some elements, so [hover][7] effects apply. However, these effects are often unnoticed by the user and mostly result in janky scrolling. Applying `pointer-events: none` to the `body` disables mouse events including `hover` which results in better scrolling performance.


[0]: https://developer.mozilla.org/en/docs/Web/API/event.target
[1]: https://developer.mozilla.org/en/docs/CSS/initial_value
[2]: https://developer.mozilla.org/en/docs/CSS/inheritance
[3]: https://developer.mozilla.org/en/docs/Web/CSS/Media/Visual
[4]: https://developer.mozilla.org/en/docs/CSS/computed_value
[5]: https://developer.mozilla.org/en/docs/Web/API/event.bubbles
[6]: https://wiki.mozilla.org/SVG:pointer-events
[7]: https://developer.mozilla.org/en/docs/Web/CSS/:hover