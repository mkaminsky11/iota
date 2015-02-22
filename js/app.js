var gui = require('nw.gui');
var fs = require('fs');

/**
* SET UP TOOLBAR
**/
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
nativeMenuBar.createMacBuiltin("iota");
win.menu = nativeMenuBar;
//win.showDevTools();

/**
* GET DOCS
**/
var docs = [];
var fuzzy = [];

function init(){
  var folders = fs.readdirSync("docs");
  for(var i = 0; i < folders.length; i++){
    if(folders[i][0] !== "." && folders[i].indexOf(".png") === -1){
      var doc = fs.readdirSync("docs/" + folders[i]);
      for(var j = 0; j < doc.length; j++){
        if(doc[j][0] !== "." && doc[j].indexOf(".png") === -1){
          var text = fs.readFileSync("docs/" + folders[i] + "/" + doc[j], "utf8").split("<!--next-->");
          for(var k = 0; k < text.length; k++){
            var name = text[k].trim().split("\n")[0].replace("<h2>","").replace("</h2>","").split("(")[0];
            var section = {
              name: name,
              html: text[k].trim(),
              path: "docs/" + folders[i] + "/" + name,
              icon: "docs/" + folders[i] + "/icon.png"
            };

            docs.push(section);
          }
        }
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
        var img_path_arr = fin[c].path.split("/");
        var img_path = "docs/" + img_path_arr[1] + "/icon.png";

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
      $("#display").html(docs[i].html);

      Prism.highlightAll();
    }
  }
  $(".result").velocity({
    opacity: 0
  },{
    duration: 500,
    queue: false
  });
  $("#display").slideDown();
}

function closePath(){
  $(".result").velocity({
    opacity: 1
  },{
    duration: 500,
    queue: false
  });
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
