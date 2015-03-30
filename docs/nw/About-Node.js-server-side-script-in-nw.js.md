## About-Node.js-server-side-script-in-nw.js

If you're used to writing server side scripts, and have little experience writing mobile HTML apps, then this guide is absolutely for you. And if you think you're an expert on node.js or mobile HTML apps, you should also read this guide carefully, too many 'experts' were restricted to their old experiences and failed to be aware of new possibilities.

## Express?

If you searched `write desktop apps in node.js` and found node-webkit, the first thing you may do is trying to figure out how to make `Express` or other node web frameworks work, and I've get questions like this far too many times.

The answer is, you can still use `Express` in the same way you use with Node.js (create a HTTP server, etc), but that's not the way in which you can fully unleash the power of node-webkit.

### Router

People who want `Express` are indeed finding two things: `router` and `template engine`.

As for `router`, it is used for showing different pages for different urls, like `/user/zcbenz` and `/article/901127`. You don't need a `router` in node-webkit, because you already have a better one: the `file:` protocol. For example, if you have an app like this:

```
app
├── index.html
└── views
    ├── user.html
    └── article.html
```

Then you you can navigate to a page by using `window.location = 'views/user.html#zcbenz'` and handle logics in `views/user.html` file.

However the recommended way is not opening a new window or changing the `window.location`, you should just replace part of your page with ajax, like `$('#main').load('views/user.html#zcbenz');`. Doing it this way users won't have bad experience of having the page refresh/flicker, and the current javascript context is also kept.

### Template Engine

For template engine, node.js developers have always been comfortable with rendering at server side and then sending the result to clients. In node-webkit everything is client side, you don't need to render the template and then feed it to node-webkit, you could just render everything after the page is loaded.

The basic idea is: use the template engine to generate contents on the fly, and then append dynamic contents into the DOM. like this:

```html
<script>
var jade = require('jade');
var gen_files_view = jade.compile([
    '- each file in files',
    '  .file(data-path="#{file.path}")',
    '    .icon',
    '      img(src="icons/#{file.type}.png")',
    '    .name #{file.name}',
].join('\n'));

$(document).ready(function() {
  // read sth to files
  // blabla...
  $('#content').html(gen_files_view({ files: files }));
});
</script>
```

Another example is how I refresh the address bar and folder view in [zcbenz/nw-file-explorer](https://github.com/zcbenz/nw-sample-apps/tree/master/file-explorer), see [node_modules/folder_view.js](https://github.com/zcbenz/nw-sample-apps/blob/master/file-explorer/node_modules/folder_view.js) and [node_modules/address_bar.js](https://github.com/zcbenz/nw-sample-apps/blob/master/file-explorer/node_modules/address_bar.js).

### Why not the router way?

One of the founding nature of node-webkit is that you can call any Node modules you want from DOM **directly**. 'directly' means the Javascript objects of Node and DOM reside in the same V8 heap. So variables references are made directly like a pointer, and function calls don't need to come across any kind of JSON marshalling/unmarshalling bridge between processes, or even threads.

Some may find their code in B/S architecture can be easily reused by launching a http server in node-webkit, but refactoring your code a little bit and making DOM calls to Node directly would give you a brand new way of writing applications, with benefits to both performance and architecture.

## CoffeeScript, LESS and more

Developers who code in node.js would also want languages that compile into javascript and CSS, the most famous ones are `CoffeeScript` and `LESS`. Usually people would compile the code on the server side and then send results to clients' browsers, but instead you can use them directly on the browser side, by installing the compiler first and then evaluate the code on the fly.

For `CoffeScript`, you should first tag your coffeescript with the type `text/coffeescript`, and then include [coffee-script.js](http://github.com/jashkenas/coffee-script/raw/master/extras/coffee-script.js) after all coffeescript is available on the page (this is the compiler that will evaluate and compile all coffeescript in order). Here is an example:

```html
<html>
<head>
<script type=”text/javascript” src=”http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js”></script>
<script type=”text/coffeescript”>
 $ -> $('#header').css 'background-color', 'green'
</script>
<script type=”text/javascript” src=”http://github.com/jashkenas/coffee-script/raw/master/extras/coffee-script.js”></script>
</head>
<body>
<h1 id=”header” style=”color:white”>CoffeeScript is alive!</h1>
</body>
</html>
```

You can also load `CoffeeScript` files using the `require` function from Node. In order to do so, you must first locally install the `coffee-script` module in your project directory (`npm install coffee-script`). After that, all you need to do is just require the `coffee-script/register` module, which registers `.coffee` extension. Example:

index.html
```html
<!DOCTYPE html>
<html>
 <head>
  <script>
   require('coffee-script/register');  // for versions < 1.7.0, use: require('coffee-script');
   require('./app.coffee');
  </script>
 </head>
 <body>
 </body>
</html>
```

app.coffee
```coffeescript
window.alert 'Hello!'
```

For `LESS`, it also has an online compiler that translates your `.less` file into `.css` file in browser, to use it, just add following lines in `<head>` tag:

```html
<link rel="stylesheet/less" href="/link/to/your.less" type="text/css" /> 
<script src="http://lesscss.googlecode.com/files/less-1.3.0.min.js"></script>
```

And of course you can always choose to compile the code before packing your app, and only deliver the complied files to end users.

## Page navigation and multiple windows

If you have written server side scripts, you would be familiar with navigating user to different pages when they click a link, and save users' session information in `cookies` or in server.

In node-webkit, you can basically do the same thing by using `window.location`, you can install it in the `onclick` event of a link and node-webkit will navigate to a new page when user clicks it. But by doing this you would lose everything in `window` context, you can save everything in cookies like old web pages, or you can save things in the `global` variable, which resides in Node.js's context and will live through your app.

But a better way is just refreshing part of your pages, not navigating to a new one, you can search for `ajax` to get basic ideas.

The `global` variable is also useful for apps that have multiple windows. Every opened window will share a same `global`, so you can use it to transfer messages across different windows. And the normal HTML way of using the return value of `window.open` is also available, for more you can have a look at [[Play with window]].