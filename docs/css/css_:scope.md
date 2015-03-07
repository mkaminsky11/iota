## :scope

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `:scope` CSS [pseudo-class][1] matches the elements that are a reference point for selectors to match against. In HTML, a new reference point can be defined using the `[scoped][2]` attribute of the [`<style>`][3]. If no such attribute is used on an HTML page, the reference point is the [`<html>`][4] element.

### Syntax

    :scope { _style properties_ }

### Example

    <article>
      The element selected by :scope has a lime background if your browser supports scoped stylesheet.
      <section> 
        <p>Outside scope.</p>
      </section>
      <section>
        <style scoped>
          :scope { background-color: lime; }
        </style>
        <p>Inside scope.</p>
      </section>
    <section> 
        <p>Outside scope.</p>
      </section>
    </article>
    

### Live result


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/CSS/Pseudo-classes "Pseudo-classes"
[2]: https://developer.mozilla.org/en/docs/Web/HTML/Element/style#attr-scoped
[3]: https://developer.mozilla.org/en/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or a part of document. The specific style information is contained inside of this element, usually in the CSS."
[4]: https://developer.mozilla.org/en/docs/Web/HTML/Element/html "The HTML root element (<html>) represents the root of an HTML document. All other elements must be descendants of this element."