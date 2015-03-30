## Get-version-of-nw.js-in-app

Sometimes you may need to know the version of node-webkit in app so you can determine whether certain APIs are available, to get it you can use:

```javascript
process.versions['node-webkit']
```

And to quickly know the node-webkit's version you are using now, you can type `nw:version` in the toolbar, then node-webkit would print the versions like:

```
node-webkit v0.3.5
node.js v0.8.14
```