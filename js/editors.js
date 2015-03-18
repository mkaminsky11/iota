var gui = require('nw.gui');

var editors = {
  editors: []
};

editors.open = function(path){
  var already_open = false;
  for(var i = 0; i < editors.editors.length; i++){
    if(editors.editors[i].path === path){
      already_open = true;
    }
  }

  if(already_open === false){
    //ok, time to open
    var to_push = {
      path: path
    };

    to_push.window = window.open('editor/index.html',{
      "width": 800,
      "height": 700,
      "min_width": 400,
      "min_height": 200,
      "transparent": true,
      "frame": false,
      "toolbar": false
    });

    editors.editors.push(to_push);
  }
}
