var gui = require('nw.gui');
var fs = require('fs');

/**
* SET UP TOOLBAR
**/
var win = gui.Window.get();
//win.showDevTools(); //uncomment when needed

/**
* THE PATH IS PASSED THROUGH A QUERY STRING
* editor/index.html?path=doc/css/blah_blah.md
**/
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var path = "" + getParameterByName("path");
document.getElementById("save").path = path;


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

  $(window).resize(function(){
    editor.refresh(); //refreshes the codemirror when resized
  });
});

var editor = CodeMirror(document.getElementById("display"),{
    lineNumbers: true,
    mode: "markdown",
    theme: "xq-light",
    lineWrapping: true,
    indentUnit: 4,
    indentWithTabs: true
});

var value = fs.readFileSync(path, "utf8");
editor.setValue(value);

function save(){
    if(is_valid(editor.getValue())){
      fs.writeFileSync(path, editor.getValue());
    }
    else{
        //uh-oh
        show_error("The first line of this file is the title. It should start with \"##\"");
    }
}

function is_valid(value){
    var first_line = value.trim().split("\n")[0].trim();
    if(first_line[0] === "#" && first_line[1] === "#" && first_line[2] !== "#"){
        return true;
    }
    return false;
}

function show_error(error){
    //TODO
}
