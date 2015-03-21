var gui = require('nw.gui');

var editors = {
  editors: [],
  watch: function(curr, prev){
    console.log(curr);
    console.log(prev);
  }
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

    to_push.window = window.open('editor/index.html?path=' + path,{
      "width": 800,
      "height": 700,
      "min_width": 400,
      "min_height": 200,
      "transparent": true,
      "frame": false,
      "toolbar": false
    });

    to_push.gui = gui.Window.get(to_push.window);
    to_push.gui.path = path;
    to_push.gui.on('focus', function(){
      this.window.document.getElementById("save").onclick = function(){
        editors.refresh(this.path);
      };
    });
    to_push.gui.on('close', function(){
      this.close(true);
      editors.close(this.path);
    });

    editors.editors.push(to_push);
  }
}

editors.close = function(path){
  for(var i = 0; i < editors.editors.length; i++){
    if(editors.editors.path === path){
      editors.editors.splice(i, 1);
    }
  }
};

editors.refresh = function(path){
  
};
