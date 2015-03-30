## Console-and-timers

Node.js and Chromium each has its own implementation of `setTimeout` and `console`. Currently, for `console`, we use Chromium's implementation everywhere, because it can print in devtools and have more information exposed.

As for `setTimeout` family, we just keep things as they are. In webpages `setTimeout` will call `window.setTimeout`, e.g. the WebKit's implementation. In node modules `setTimeout` will call `global.setTimeout`, e.g. the node's implementation. In this way, we can make sure those low level hacks on timers will still work in node-webkit.

And please note that since we have implemented renderer's message loop in libuv, node's implementation of timers will be more accurate than WebKit's. So if you're doing something that needs accurate clock, please use `global.setTimeout`.