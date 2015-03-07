## :hover

### Summary

The `:hover` CSS [pseudo-class][0] matches when the user designates an element with a pointing device, but does not necessarily activate it. This style may be overridden by any other link-related pseudo-classes, that is [`:link`][1], [`:visited`][2], and [`:active`][3], appearing in subsequent rules. In order to style appropriately links, you need to put the `:hover` rule after the `:link` and `:visited` rules but before the `:active` one, as defined by the _LVHA-order_: `:link` --- `:visited` --- `:hover` --- `:active`.

The `:hover` pseudo-class can be applied to any [pseudo-element][4]. __

Visual user agents, like Firefox, Internet Explorer, Safari, Opera or Chrome, apply the associated style when the cursor (mouse pointer) hovers over an element.

**Usage Note**: on touch screens `:hover` is problematic or impossible. Depending on the browser, the `:hover` pseudo-class might never match, or match only for a short moment after touching an element, or may continue to match even after the user has stopped touching and until the user touches another element. As touchscreen devices are very common, it is important for web developers not to have content be accessible only when hovering over it, as this content is more cumbersome or impossible for users of such devices to access.

### Examples

    :link:hover { outline: dotted red; }
    
    .foo:hover { background: gold; }
    

### Dropdown menu

With the `:hover` pseudo-class you can create complex cascade algorithms. This is a common technique used, for example, in order to create **pure-CSS dropdown menus** (that is only CSS, without using [JavaScript][5]). The essence of this technique is the creation of a rule like the following:

    div.menu-bar ul ul {
      display: none;
    }
    
    div.menu-bar li:hover > ul {
      display: block;
    }
    

to be applied to an HTML structure like the following:

    <div >
      <ul>
        <li>
          <a href="example.html">Menu</a>
          <ul>
            <li>
              <a href="example.html">Link</a>
            </li>
            <li>
              <a  href="example.html">Submenu</a>
              <ul>
                <li>
                  <a  href="example.html">Submenu</a>
                  <ul>
                    <li><a href="example.html">Link</a></li>
                    <li><a href="example.html">Link</a></li>
                    <li><a href="example.html">Link</a></li>
                    <li><a href="example.html">Link</a></li>
                  </ul>
                </li>
                <li><a href="example.html">Link</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    

See see our complete [CSS-based dropdown menu example][6] for a possible cue.

### Gallery with full-size images and previews

You can use the `:hover` pseudo-class in order to build an image gallery with full-size images shown only when mouse goes over previews. See [this demo][7] for a possible cue.

**Note:** For an analogous effect, but based on the [`:checked`][8] pseudo-class (applied to hidden radioboxes), see [this demo][9], taken from the [En/CSS/:checked][8] page.


[0]: https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes "Pseudo-classes"
[1]: https://developer.mozilla.org/en/docs/Web/CSS/:link "The :link CSS pseudo-class lets you select links inside elements. This will select any link, even those already styled using selector with other link-related pseudo-classes like :hover, :active or :visited. In order to style only non-visited links, you need to put the :link rule before the other ones, as defined by the LVHA-order: :link — :visited — :hover — :active. The :focus pseudo-class is usually placed right before or right after :hover, depending of the expected effect."
[2]: https://developer.mozilla.org/en/docs/Web/CSS/:visited "The :visited CSS pseudo-class lets you select only links that have been visited. This style may be overridden by any other link-related pseudo-classes, that is :link, :hover, and :active, appearing in subsequent rules. In order to style appropriately links, you need to put the :visited rule after the :link rule but before the other ones, defined in the LVHA-order: :link — :visited — :hover — :active."
[3]: https://developer.mozilla.org/en/docs/Web/CSS/:active "The :active CSS pseudo-class matches when an element is being activated by the user. It allows the page to give a feedback that the activation has been detected by the browser. When interacting with a mouse, this is typically the time between the user presses the mouse button and releases it. The :active pseudo-class is also typically matched when using the keyboard tab key. It is frequently used on <a> and <button> HTML elements, but may not be limited to just those."
[4]: https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-elements "Pseudo-classes"
[5]: https://developer.mozilla.org/en/JavaScript "en/JavaScript"
[6]: /@api/deki/files/6238/=css_dropdown_menu.html "css_dropdown_menu.html"
[7]: /@api/deki/files/6247/=css-gallery.zip "css-gallery.zip"
[8]: https://developer.mozilla.org/en/CSS/%3Achecked "en/CSS/:checked"
[9]: /@api/deki/files/6268/=css-checked-gallery.zip "css-checked-gallery.zip"