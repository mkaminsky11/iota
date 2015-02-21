#IOTA

A documentation viewer built with node-webkit.
![demo](demo.gif)

###Features
+ searching
+ viewing documentation

###Todo
+ themes
+ keyboard shortcut (duh)
+ icons

###Contributing
Go into `docs`, and you'll find a bunch of folder for each language (when this was last updated, just node.js). The name of the folder doesn't really matter, but you should add a nice icon named `icon.png` with a transparent background.

Inside the language folders, there are bunch of folders. Again, their names don't matter, but they should be logically organized.

Documentation items in each of these `.txt` files are seperated by `==` like this:
```
my_function
<h2>my_function(arg1, arg2)</h2>
This is my documentation
==
compare
<h2>compare(a,b)</h2>
<b>can have html</b>
```

Of course, you'll probably need to add code. Do it like this:
```
compare
<h2>compare(a,b)</h2>
<pre><code class="language-javascript">if(compare(a,b) === 1){
  alert("hi");
}
```
most langauges are supported.

> note: for html, use `<code class="language-markup"></code>`
