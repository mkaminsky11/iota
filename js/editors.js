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

    to_push.window = window.open('editor/index.html?path=' + path,{
      "width": 800,
      "height": 700,
      "min_width": 800,
      "min_height": 700,
      "transparent": false,
      "frame": true,
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
    if(editors.editors[i].path === path){
      editors.editors.splice(i, 1);
    }
  }
};

editors.refresh = function(path){
  //change docs
  for(var i = 0; i < docs.length; i++){
    if(docs[i].path === path){
      //change it

      var text = fs.readFileSync(path, "utf8")
      var name = text.trim().split("\n")[0].replace("<h2>","").replace("</h2>","").replace("##","").replace("\\#\\#","");
      name = name.replace(/\\/g, "");

      docs[i].name = name;
      docs[i].html = text;

      docsets.refresh();
      browse.reset();

      $("[data-path='"+path+"'] p").html(name);

      openPath(path);
    }
  }
};

editors.reset = function(){
  for(var i = 0; i < editors.editors.length; i++){
    editors.editors[i].gui.close(true); //close this
    editors.close(editors.editors[i].path);
  }
  editors.editors = []
}
