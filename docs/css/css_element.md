## element

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

### Summary

The `element()` [CSS][1] function defines an [`<image>`][2] value generated from an arbitrary HTML element. This image is live, meaning that if the HTML element is changed, the CSS properties using the resulting value are automatically updated.

A particularly useful scenario for using this would be to render an image in an HTML [`<canvas>`][3] element, then use that as a background.

On Gecko browsers, you can use the non-standard [`document.mozSetImageElement()`][4] method to change the element being used as the background for a given CSS background element.

### Syntax

    element( _id_ )

where:

****`id`****

> The ID of an element to use as the background, specified using the HTML attribute \#_id_ on the element.

### Examples

These examples can be [viewed live][5] in builds of Firefox that support `-moz-element()`.

### A somewhat realistic example

This example uses a hidden [`<div>`][6] as a background. The background element uses a gradient, but also includes text that is rendered as part of the background.

    <div style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">
      <p>This box uses the element with the #myBackground1 ID as its background!</p>
    </div>
    
    <div style="overflow:hidden; height:0;">
      <div  style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">
      <p style="transform-origin:0 0; transform: rotate(45deg); color:white;">This text is part of the background. Cool, huh?</p>
      </div>
    </div>

The [`<div>`][6] element with the ID "myBackground1" is used as the background for the content including the paragraph "This box uses the element with the \#myBackground1 ID as its background!".

![example1.png](/@api/deki/files/4624/=example1.png)

### A somewhat more bizarre example

This example uses a hidden [`<button>`][7] element in a repeating pattern as its background. This demonstrates that you can use arbitrary elements as background, but doesn't necessarily demonstrate good design practices.

    <div style="width:400px; height:100px; background:-moz-element(#myBackground2);">
    </div>
    
    <div style="overflow:hidden; height:0;">
      <button  type="button">Evil button!</button>
    </div>
    

![example2.png](/@api/deki/files/4625/=example2.png)


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/CSS "CSS"
[2]: https://developer.mozilla.org/en/docs/Web/CSS/image "The documentation about this has not yet been written; please consider contributing!"
[3]: https://developer.mozilla.org/en/docs/Web/HTML/Element/canvas "The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled."
[4]: https://developer.mozilla.org/en/docs/Web/API/Document/mozSetImageElement "Changes the element being used as the CSS background for a background with a given background element ID."
[5]: /samples/cssref/moz-element.html "https://developer.mozilla.org/samples/cssref/moz-element.html"
[6]: https://developer.mozilla.org/en/docs/Web/HTML/Element/div "The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate."
[7]: https://developer.mozilla.org/en/docs/Web/HTML/Element/button "The HTML <button> Element represents a clickable button."