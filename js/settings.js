var settings = {};

var gui = require('nw.gui');

settings.open = function(path){
    settings.window = window.open('settings/index.html',{
      width: 400,
      height: 350
    });

    settings.gui = gui.Window.get(settings.window);
}

/*
a list of docsets


+------------------------+
|    docsets             +
+------------------------+
| node.js            | - | <--minus
+------------------------+
  ...

+---+
| + | <---add button
+---+

  ...

+--------------------+ <--dropdown
| [name           ]  | <--input
| [icon.png       ]  | <--get path of icon
+--------------------+

  ...
*/
