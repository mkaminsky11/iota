#IOTA

A documentation viewer built with [nw.js](http://nwjs.io/).
![demo](demo.gif)

###Features
+ searching
+ viewing documentation

###Todo
+ themes
+ keyboard shortcut (duh)
+ icons

###Docsets Done
+ nw (node webkit)
+ node.js/io.js
+ javascript
  + es6

###Docsets Todo
+ css

###Contributing

####Versions
Keep track of the versions of each docset in [VERSIONS.md](VERSIONS.md). For example, if you have made the node.js docset accurate to version 0.12, say so!

###Useful Links
+ [Dash docsets](http://kapeli.com/docset_links) (on Mac, do `right click + show packaged contents`)
+ [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

####Creating Docs
Go into `docs`, and you'll find a bunch of folders for each language (when this was last updated, just node.js). The name of the folder doesn't really matter, but you should add a nice icon named `icon.png` with a transparent background.

Inside the language folders, there are bunch of folders. Again, their names don't matter, but they should be logically organized.

Documentation items in each of these `.html` files are separated by `<!--next-->` like this:
```html
<h2>my_function(arg1, arg2)</h2>
This is my documentation
<!--next-->
<h2>compare(a,b)</h2>
<b>can have html</b>
```

Of course, you'll probably need to add code. Do it like this:
```html
<h2>compare(a,b)</h2>
<pre><code class="language-javascript">if(compare(a,b) === 1){
  alert("hi");
}
```
most languages are supported. Although HTML is ok, **try to stick to conventions, and avoid links**.

> note: for html, use `<code class="language-markup"></code>`
