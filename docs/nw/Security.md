## Security

node-webkit adds Node.js support and enhancement in DOM for trusted code and content. **For untrusted code and content, it should remain in a normal `frame` or `iframe`**, which is the same as the one in browser. So there are 2 kinds of frames in node-webkit: `Node frame` and `normal frame`.

**As application developer, one should keep in mind that contents should be loaded in correct frames.**

Which frames are Node frames and which are not?

1. iframes that have the attribute `nwdisable` are normal frames. (NOTE: `nwfaketop` attribute should be specified with `nwdisable`. The reason is in https://github.com/rogerwang/node-webkit/issues/534)
2. Local files, [app protocol](App protocol) frames (or remote sites when URL matches the `node-remote` field) are Node frames. (`nodejs` field should not be set to false in this case)
3. Frames opened with `window.open` are normal frames when these flags are set: `new-instance` = `true` and `nodejs` = `false`

What can Node frames do?

1. Node support: access to `require`, `global`, `process`, `Buffer` and `root` from Node.
2. Universal access to other frames: this can get around all cross-domain security checks defined in DOM.
3. Ignore `X-Frame-Options` headers for child frames.
4. Others listed in [Changes to DOM](Changes to dom)

`nwdisable` is added in 0.5.0 rc2; `nwfaketop` is added in 0.5.1