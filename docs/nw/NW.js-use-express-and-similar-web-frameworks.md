## NW.js-use-express-and-similar-web-frameworks

Before develop an express base NW.js(node-webkit) APP, you should see [About Node.js server side script in nw.js](https://github.com/nwjs/nw.js/wiki/About-Node.js-server-side-script-in-nw.js), it provides some good ways to replace those framework.

But if you already have an express base webapp, you want to use NW.js make it use as desktop app, there has problmes.

First, express provide a web server and don't have `index.html` file, so what should I do at package.json `mian` property?

The solution is you can create a `index.html` file, and use the follow code to run the system:

```<script type="text/javascript" src="app.js"></script>```

In NW.js you can use node modules in html files, more details on this see: [Using Node modules](https://github.com/nwjs/nw.js/wiki/Using-Node-modules)

Second, express 3/4 use the `./bin/www` to start a web server, if you run the app.js it will fail to start. And sometimes if you want run a node app directly not through a html file, your can use the follow way:

We can setup `node-main` at package.json, `node-main` property is a command which will be call when NW.js app start, more details see: [Node main](https://github.com/nwjs/nw.js/wiki/Node-main). And for express case, we should also setup the main property to `http://localhost:3000`. If we setup a filename to that, NW.js will open it with file protocol, so you will see the source code, if you setup a url with http protocol, NW.js will open it just like a browser.

```
"node-main": "./bin/www",
"main": "http://localhost:3000"
```

Put the above code in your package.json, it's OK.