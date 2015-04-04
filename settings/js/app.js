var gui = require('nw.gui');
var fs = require('fs');

/**
* SET UP TOOLBAR
**/
var win = gui.Window.get();
//win.showDevTools(); //uncomment when needed



$(document).ready(function(){
  $(".close").click(function(){
    win.close();
  });
  $(".min").click(function(){
    win.minimize();
  });
  $(".max").click(function(){
    win.maximize();
  });
});
