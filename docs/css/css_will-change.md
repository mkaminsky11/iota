## will-change

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

The `will-change` [CSS][1] property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can setup appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.

Proper usage of this property can be a bit tricky:

* _Don't apply will-change to too many elements._ The browser already tries as hard as it can to optimize everything. Some of the stronger optimizations that are likely to be tied to `will-change` end up using a lot of a machine's resources, and when overused like this can cause the page to slow down or consume a lot of resources.
* 
_Use sparingly._ The normal behavior for optimizations that the browser make is to remove the optimizations as soon as it can and revert back to normal. But adding `will-change` directly in a stylesheet implies that the targeted elements are always a few moments away from changing and the browser will keep the optimizations for much longer time than it would have otherwise. So it is a good practice to switch `will-change` on and off on using script code before and after the change occurs.
* 
_Don't apply will-change to elements to perform premature optimization_. If your page is performing well, don't add the `will-change` property to elements just to wring out a little more speed. `will-change` is intended to be used as something of a last resort, in order to try to deal with existing performance problems. It should not be used to anticipate performance problems. Excessive use of `will-change` will result in excessive memory use and will cause more complex rendering to occur as the browser attempts to prepare for the possible change. This will lead to worse performance.
* 
_Give it sufficient time to work_. This property is intended as a method for authors to let the user-agent know about properties that are likely to change ahead of time. Then the browser can choose to apply any ahead-of-time optimizations required for the property change before the property change actually happens. So it is important to give the the browser some time to actually do the optimizations. Find some way to predict at least slightly ahead of time that something will change, and set `will-change` then.

* _[Initial value][2]_ `auto` 
* _Applies to_ all elements 
* _[Inherited][3]_ no 
* _Media_ [`all`][4] 
* _[Computed value][5]_ as specified 
* _Animatable_ no 
* _Canonical order_ the unique non-ambiguous order defined by the formal grammar

### Syntax

    [Formal syntax][6]: auto [|][7] [<animateable-feature>][8][#][9]
    

    will-change: auto
    will-change: scroll-position
    will-change: contents
    will-change: transform        // Example of <custom-ident> 
    will-change: opacity          // Example of <custom-ident>
    will-change: left, top        // Example of two <animateable-feature>
    
    will-change: unset
    will-change: initial
    will-change: inherit
    

### Values

**`auto`**

> This keyword expresses no particular intent; the user agent should apply whatever heuristics and optimizations it normally does.

The `<animateable-feature>` can be one of the following values:

**`scroll-position`**

> Indicates that the author expects to animate or change the scroll position of the element in the near future.

**`contents`**

> Indicates that the author expects to animate or change something about the element's contents in the near future.

**[`<custom-ident>`][10]**

> Indicates that the author expects to animate or change the property with the given name on the element in the near future. If the property given is a shorthand, it indicates the expectation for all the longhands the shorthand expands to. It cannot be one of the following values: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position`, or `contents`.

### Examples

    .sidebar {
      will-change: transform;
    }
    

The above example adds the `will-change` property directly to the stylesheet, which will cause the browser to keep the optimization in memory for much longer than it is needed and we've already seen why that should be avoided. Below is another example showing how to apply the `will-change` property through scripting, which is probably what you should be doing in most cases.

    var el = document.getElementById('element');
    
    // Set will-change when the element is hovered
    el.addEventListener('mouseenter', hintBrowser);
    el.addEventListener('animationEnd', removeHint);
    
    function hintBrowser() {
      // The optimizable properties that are going to change
      // in the animation's keyframes block
      this.style.willChange = 'transform, opacity';
    }
    
    function removeHint() {
      this.style.willChange = 'auto';
    }

It may however be appropriate to include will-change in your style sheet for an application that does page flips on key presses like an album or a slide deck presentation where the pages are large and complex. This will let browser prepare the transition ahead of time and allow for snappy transitions between the pages as soon as the key is pressed.

    .slide {
      will-change: transform;
    }

### Specification
Specification
Status
Comment

[CSS Will Change Module Level 1  
The definition of 'will-change' in that specification.][11]
Working Draft
Initial definition

### Browser compatibility

* Desktop
* Mobile

Feature
Chrome
Firefox (Gecko)
Internet Explorer
Opera
Safari (WebKit)

Basic support
36
[36][12] (36) \[1\]
Not supported
24
Not supported

Feature
Android
Firefox Mobile (Gecko)
IE Phone
Opera Mobile
Safari Mobile

Basic support
37
36.0 (36) \[1\]
Not supported
Not supported
Not supported

\[1\] From Firefox 31 to 35, `will-change` was available, but only if the user flipped the `layout.css.will-change.enabled` flag to `true`.


[0]: #Browser_compatibility
[1]: https://developer.mozilla.org/en/docs/Web/CSS
[2]: https://developer.mozilla.org/en/docs/CSS/initial_value
[3]: https://developer.mozilla.org/en/docs/CSS/inheritance
[4]: https://developer.mozilla.org/en/docs/CSS/@media#Media_groups
[5]: https://developer.mozilla.org/en/docs/CSS/computed_value
[6]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax "CSS/Value_definition_syntax"
[7]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Single_bar "Single bar: The two entities are optional, but exactly one must be present."
[8]: https://developer.mozilla.org/en/docs/CSS/CSS_values_syntax#syntax-animateable-feature "scroll-position | contents | <custom-ident>"
[9]: https://developer.mozilla.org/en/docs/CSS/Value_definition_syntax#Hash_mark_(.23) "Hash mark multiplier: The previous entity may appear 0, 1 or several times, each occurrence being separated from the previous one by a comma."
[10]: https://developer.mozilla.org/en/docs/Web/CSS/custom-ident "The documentation about this has not yet been written; please consider contributing!"
[11]: http://dev.w3.org/csswg/css-will-change/#will-change
[12]: https://developer.mozilla.org/en/Firefox/Releases/36 "Released on 2015-02-24."