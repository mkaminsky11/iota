## Window.showDevTools(\[id | iframe, headless\])

Open the devtools to inspect the window.

The optional `id` argument is supported since v0.6.0\. It should be the value of `id` attribute of any `iframe` element in the window. It can be used to limit the devtools window to inspect only the iframe. If `id` is empty string, this feature is not effective.

The optional `headless` argument is supported since v0.6.0\. When it is `true`, the Devtools window will not be opened. Instead, a `devtools-opened` will be sent to the `Window` object after Devtools is ready.

The optional `iframe` argument is supported since v0.7.2\. It should be the iframe object. And it serves the same purpose with the `id` argument.

For more information, please read \[\[Devtools Jail Feature\]\].

Since v0.8.1, this function returns a `Window` object when `headless` is `false`, so the devtools Window can be manipulated. Note that the events on this object is not working yet.