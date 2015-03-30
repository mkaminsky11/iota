## Extract-info-about-gpu

Chromium has GPU related diagnostic info page at url chrome://gpu
In node-webkit this page is broken but information may be extracted through devtools:

* 1. open chrome://gpu in nw
* 2. open devtools
* 3. enter in console
```javascript
var browserBridge = { onGpuInfoUpdate:function(arg){console.log(JSON.stringify(arg,null,1));}};
```
* 4. then
```javascript
chrome.send('browserBridgeInitialized');
```
* 5. Tada! You have JSON object describing graphic features of nw.
