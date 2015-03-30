## How-node.js-is-integrated-with-chromium

## Overview

We keep the modification minimal on both Node and Chromium. Only 2 things are done: main loop integration and context bridging.

Both `node.js` and `Chromium` have their main loops. So it would take some efforts to make it run in `Chromium`. One of the founding feature of node-webkit is to call Node functions **directly** from DOM, so we integrate them into the same thread. That requires the integration of the main loop of Node and the one from Chromium Render process.

In order to make the objects from Node and DOM to refer to each other, Node is made to use the same V8 engine instance as the one in Chromium. The objects from the 2 worlds are in 2 `contexts` respectively, to keep their namespace clean.

## Main Loop Integration

`Chromium` internally use class `MessageLoop` and `MessagePump` to support its events loop, since `node` uses `libuv` to support its events loop, we need to implement a new `MessagePump` which uses `libuv` as its underlying events library. The new type of Message Pump is used only in the render process, where the WebKit engine resides.

See `base/message_pump_uv.cc`, `base/message_pump_uv.cc`, `base/message_loop.cc` and `base/message_loop.h` to understand our work.

On Mac things are a lot different, see `base/message_pump_mac.h` and `base/message_pump_mac.mm`.

## Context bridging: Insert node's symbols into webkit

This is the most important and trickiest part of `node-webkit`, first we initialize a context for `node`, and make `node` setup all its stuff under it, see `content/renderer/renderer_main.cc`, then when WebKit has installed DOM into its context, we move everything from `node` to `WebKit`, see `third_party/WebKit/Source/WebCore/bindings/v8/V8DOMWindowShell.cpp` in line 346.

## Make Node start with render process

Though `node` has a `Start` function that setups everything, it will redirect everything into its own message loop, so we split the `Start` function into several parts, see `third_party/node/src/node.cc`.

And since `node` itself expects to execute a script file, there are many logics that deal with script execution in `third_party/node/src/node.js`, we heavily modified that part and used some tricks to make its module system run under `node-webkit`.

Another modification resided under `third_party/WebKit/Source/WebCore/bindings/v8/V8DOMWindowShell.cpp` in line 363, we inserted some script after WebKit is initialized, so `node` can get a right `pathname` and `filename` which is vital to `require` function.