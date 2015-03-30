## Node-main

`node-main` is a field in the [manifest format](Manifest-format), with which you can specify the path to a Javascript file to run on startup. It is treated in the same way as the 'main module' you would run in Node.js.

The script will be running in Node's context which won't be destroyed across page navigation in Webkit, so it can be used to write some 'background' or 'daemon' like code.

Besides Node's symbols, the following symbols are available in Node's context:

*  **window**: defined as a property of 'global', points to the DOM window global object. Note that it would be updated upon page navigation. This symbol is not available at the time the script is loaded, because the script is executed before the DOM window load.

Since the `node-main` script is the main module of Node.js, it can be referred from DOM context with `process.mainModule`.

# Example 
*the following code works with node-webkit* **>=0.3.3**

After refreshing the page you can see that the number is increased.

index.html
````html
<html>
<head>
<title>Hello World!</title>
</head>
<body onload="process.mainModule.exports.callback0()">
<h1>Hello World!</h1>
We are using node.js <script>document.write(process.version); </script>
</body>
</html>
````
index.js
````javascript
(function(){
  var i = 0;
  exports.callback0 = function () {
    console.log(i + ": " + window.location);
    window.alert ("i = " + i);
    i = i + 1;
  }
})();
````
package.json
````json
{
  "name": "nw-demo",
  "node-main": "index.js",
  "main": "index.html"
}
````