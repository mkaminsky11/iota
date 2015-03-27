#IOTA

##A documentation viewer built with [nw.js](http://nwjs.io/).
![demo](demo.gif)

To build:

```shell
git clone https://github.com/mkaminsky11/iota.git
nw iota #that's it! It should run!
```

###Features
+ searching
+ viewing documentation
+ icons
+ editing

###Todo
+ settings/themes
+ keyboard shortcut
+ create new
+ delete
+ refresh on edit
+ make sure editing is valid (only one `##` before updating)
+ error messages
+ create own docsets

###Docsets Done
+ nw (node webkit)
+ node.js/io.js (full!)
+ javascript (full!)
  + es6
+ CSS (full!)

###Docsets Todo
+ Swift?
+ Markdown
+ HTML

###Serious Problems
Two words: memory usage. This whole thing takes up ~40MB. That's ridiculous.

###Contributing
####Useful Links
+ [Dash docsets](http://kapeli.com/docset_links) (on Mac, do `right click + show packaged contents`)
+ [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

####Creating Docs
Go into `docs`, and you'll find a bunch of folders for each language (when this was last updated, just node.js). The name of the folder doesn't really matter, but you should add a nice icon named `icon.png` with a transparent background.

Inside the language folders, there are bunch of folders. Again, their names don't matter, but they should be logically organized.

Documentation is in markdown. The name of the documented item is an `<h2>`(`##` in markdown). There should be NO OTHER `##`s besides the title.
