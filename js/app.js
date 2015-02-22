var gui = require('nw.gui');
var fs = require('fs');

/**
* SET UP TOOLBAR
**/
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("iota");
win.menu = nativeMenuBar;

/**
* GET DOCS
**/
var docs = [];
var fuzzy = [];

function init(){
  var folders = fs.readdirSync("docs");
  for(var i = 0; i < folders.length; i++){
    var doc = fs.readdirSync("docs/" + folders[i]);
    for(var j = 0; j < doc.length; j++){
      var text = fs.readFileSync("docs/" + folders[i] + "/" + doc[j], "utf8").split("\n==\n");
      for(var k = 0; k < text.length; k++){
        var section = {
          name: text[k].split("\n")[0],
          html: text[k].split("\n").slice(1).join("\n"),
          path: "docs/" + folders[i] + "/" + text[k].split("\n")[0],
          icon: "docs/" + folders[i] + "/icon.png"
        };

        docs.push(section);
      }
    }
  }

  for(var a = 0; a < docs.length; a++){
    var name = docs[a].name;
    var fuzz = new FuzzySet([name]);
    fuzz.path = docs[a].path;
    fuzzy.push(fuzz);
  }
}

init();

/**
* DETECT INPUT
**/
$("#type").keyup(function(e){
  closePath();
  //
  var val = $("#type").val();
  if(val !== ""){
    var res = [];

    for(var i = 0; i < fuzzy.length; i++){
      var fuzz = fuzzy[i].get(val);
      try{
        res.push({
          name: fuzz[0][1],
          value: fuzz[0][0],
          path: fuzzy[i].path
        });
      }catch(e){}
    }
    var fin = res.sort(compare);

    for( var i=0; i < fin.length; i++ ) {
      for(var j = 0; j < fin.length; j++){
        if(fin[i] !== null && fin[j] !== null && i !== j && fin[i].path === fin[j].path){
          fin[i] = null;
        }
      }
    }

    $("#results").html("");
    for(var c = 0; c < fin.length; c++){
      if(fin[c] !== null){
        var img_path = fin[c].path.split("/");
        img_path[img_path.length - 1] = "icon.png";
        img_path = img_path.join("/");

        var base = "<div class='result' data-path='"+fin[c].path+"' onclick='openPath(\""+fin[c].path+"\")'><img src=\""+img_path+"\"><h6>" + fin[c].name + "</h6></div>";
        $("#results").append(base);
      }
    }

    openResults();
  }
  else{
    closeResults();
  }
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closePath();
  }
});

function openResults(){
  win.resizeTo(win.width, 500);

  $("#input").velocity({
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px"
  },{
    duration: 500
  });

  $("#results").slideDown();
}

function closeResults(){
  win.resizeTo(win.width, 120);

  $("#input").velocity({
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px"
  },{
    duration: 500
  });

  $("#results").slideUp();
}

function openPath(path){
  for(var i = 0; i < docs.length; i++){
    if(docs[i].path === path){
      $("#display").html("<pre>" + docs[i].html + "</pre>");

      Prism.highlightAll();
    }
  }
  $("#display").slideDown();
}

function closePath(){
  $("#display").slideUp();
}

function compare(a,b) {
  if (a.value > b.value)
     return -1;
  if (a.value < b.value)
    return 1;
  if (a.name > b.name)
    return 1;
  if (b.name > a.name)
    return -1;
  return 0;
}
