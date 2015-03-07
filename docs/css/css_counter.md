## counter

CSS counters are, in essence, variables maintained by CSS whose values may be incremented by CSS rules to track how many times they're used. This lets you adjust the appearance of content based on its placement in the document. CSS counters are an implementation of [Automatic counters and numbering][0] in CSS 2.1\.

The value of a counter is manipulated through the use of [`counter-reset`][1] and [`counter-increment`][2] can be displayed on a page using the `counter()` or `counters()` function of the `[content][3]` property.

### Using counters

To use a CSS counter, it must first be reset to a value, 0 by default. To add the value of a counter to an element, use the `counter()` function. The following CSS adds to the beginning of each h3 element "Section <the value of the counter\>:".

    body {
      counter-reset: section;                   /* Set the section counter to 0 */
    }
    h3::before {
      counter-increment: section;               /* Increment the section counter*/
      content: "Section" counter(section) ": "; /* Display the counter */
    }
    

Example:

    <h3>Introduction</h3>
    <h3>Body</h3>
    <h3>Conclusion</h3>

### Nesting counters

A CSS counter can be especially useful to make outlined lists because a new instance of a CSS counter is automatically created in child elements. Using the `counters()` function, a string can be inserted between different levels of nested counters. For example this CSS:

    ol {
      counter-reset: section;                /* Creates a new instance of the
                                                section counter with each ol
                                                element */
      list-style-type: none;
    }
    li::before {
      counter-increment: section;            /* Increments only this instance
                                                of the section counter */
      content: counters(section,".") " ";    /* Adds the value of all instances
                                                of the section counter separated
                                                by a ".". */
                                             /* if you need to support < IE8 then
                                                make sure there is no space after 
                                                the ','
    }
    

Combined with the following HTML:

    <ol>
      <li>item</li>          <!-- 1     -->
      <li>item               <!-- 2     -->
        <ol>
          <li>item</li>      <!-- 2.1   -->
          <li>item</li>      <!-- 2.2   -->
          <li>item           <!-- 2.3   -->
            <ol>
              <li>item</li>  <!-- 2.3.1 -->
              <li>item</li>  <!-- 2.3.2 -->
            </ol>
            <ol>
              <li>item</li>  <!-- 2.3.1 -->
              <li>item</li>  <!-- 2.3.2 -->
              <li>item</li>  <!-- 2.3.3 -->
            </ol>
          </li>
          <li>item</li>      <!-- 2.4   -->
        </ol>
      </li>
      <li>item</li>          <!-- 3     -->
      <li>item</li>          <!-- 4     -->
    </ol>
    <ol>
      <li>item</li>          <!-- 1     -->
      <li>item</li>          <!-- 2     -->
    </ol>

Yields this result:



[0]: http://www.w3.org/TR/CSS21/generate.html#counters
[1]: https://developer.mozilla.org/en/docs/Web/CSS/counter-reset "The counter-reset CSS property is used to reset CSS Counters to a given value."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/counter-increment "The counter-increment CSS property is used to increase the value of CSS Counters by a given value. The counter's value can be reset using the counter-reset CSS property."
[3]: https://developer.mozilla.org/en/docs/CSS/content "CSS/content"