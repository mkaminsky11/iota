## ::backdrop

**This is an experimental technology**  
Because this technology's specification has not stabilized, check the [compatibility table][0] for the proper prefixes to use in various browsers. Also note that the syntax and behavior of an experimental technology is subject to change in future versions of browsers as the spec changes.

Each element in the [top layer][1]'s stack has a _`::backdrop`_ [`pseudo-element`][2]. This pseudo-element is a box rendered immediately below the element (and above the element below the element in the stack, if any), within the same top layer.

The `::backdrop` pseudo-element can be used to create a backdrop that hides the underlying document for an element in the top layer's stack, e.g., for the element that is displayed fullscreen as described by this specification.

It does not inherit from any element and is not inherited from. No restrictions are made on what properties apply to this pseudo-element either.


[0]: #Browser_compatibility
[1]: https://fullscreen.spec.whatwg.org/#top-layer
[2]: https://developer.mozilla.org/en/docs/Web/CSS/pseudo-elements "The documentation about this has not yet been written; please consider contributing!"