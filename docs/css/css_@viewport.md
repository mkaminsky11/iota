## @viewport

### Summary

The `@viewport` [CSS][0] [at-rule][1] contains a set of nested descriptors in a CSS block that is delimited by curly braces. These descriptors control viewport settings, primarily on mobile devices.

### Syntax

(This MDN article is currently a stub and lacks a full description of the syntax.)

    @viewport {
      /* viewport-descriptor: viewport-value; */ 
    }

A _zoom factor_ of `1.0` or `100%` corresponds to no zooming. Larger values zoom in. Smaller values zoom out.

### Descriptors

Browsers are supposed to ignore unrecognized descriptors.

**[`min-width`][2]**

> Used in the determination of the width of the viewport when the document is first displayed.

**[`max-width`][3]**

> Used in the determination of the width of the viewport when the document is first displayed.

**[`width`][4]**

> A shorthand descriptor for setting both `min-width` and `max-width`

**[`min-height`][5]**

> Used in the determination of the height of the viewport when the document is first displayed.

**[`max-height`][6]**

> Used in the determination of the height of the viewport when the document is first displayed.

**[`height`][7]**

> A shorthand descriptor for setting both `min-height` and `max-height`

**[`zoom`][8]**

> Sets the initial zoom factor.

**[`min-zoom`][9]**

> Sets the minimum zoom factor.

**[`max-zoom`][10]**

> Sets the maximum zoom factor.

**[`user-zoom`][11]**

> Controls whether or not the user should be able to change the zoom factor.

**[`orientation`][12]**

> Control's the document's orientation.

### Examples

    @viewport {
      min-width: 640px;
      max-width: 800px;
    }
    @viewport {
      zoom: 0.75;
      min-zoom: 0.5;
      max-zoom: 0.9;
    }
    @viewport {
      orientation: landscape;
    }



[0]: https://developer.mozilla.org/en/CSS "CSS"
[1]: https://developer.mozilla.org/en/CSS/At-rule "en/CSS/At-rule"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/min-width
[3]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/max-width
[4]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/width
[5]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/min-height
[6]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/max-height
[7]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/height
[8]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/zoom
[9]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/min-zoom
[10]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/max-zoom
[11]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/user-zoom
[12]: https://developer.mozilla.org/en/docs/Web/CSS/@viewport/orientation