var gui = require('nw.gui');
var fs = require('fs');

/**
* SET UP TOOLBAR
**/
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
if (typeof nativeMenuBar.createMacBuiltin === "function"){
  nativeMenuBar.createMacBuiltin("iota");
  win.menu = nativeMenuBar;
}
//win.showDevTools();

var dims = {w:win.width, h:win.height};

$(document).ready(function(){
  $(window).resize(function(){
    //dims = {w:win.width, h:win.height};

  });
});

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
        if(doc[j][0] !== "." && doc[j].indexOf(".png") === -1 && doc[j] !== "script.js"){
          var text = fs.readFileSync("docs/" + folders[i] + "/" + doc[j], "utf8").split("<!--next-->");
          for(var k = 0; k < text.length; k++){
            var name = text[k].trim().split("\n")[0].replace("<h2>","").replace("</h2>","").replace("##","").replace("\\#\\#","");
            name = name.replace(/\\/g, "");

            var section = {
              name: name,
              html: text[k].trim(),
              path: "docs/" + folders[i] + "/" + doc[j],
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

    $("#results").html("");
    var length = 21;
    if(fin.length < 20){
      length = fin.length;
    }
    for(var c = 0; c < length; c++){
      if(fin[c] !== null){
        try{
          var img_path_arr = fin[c].path.split("/");
          var img_path = "docs/" + img_path_arr[1] + "/icon.png";

          var base = "<div class='result' data-path='"+fin[c].path+"' onclick='openPath(\""+fin[c].path+"\")'><img src=\""+img_path+"\"><h6>" + fin[c].name + "</h6></div>";
          $("#results").append(base);
        } catch(e){
          console.log(fin[c]);
        }
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
  win.resizeTo(win.width, dims.h + 400);

  $("#results").slideDown();
}

function closeResults(){
  win.resizeTo(win.width, dims.h);

  $("#results").slideUp();
}

function openPath(path){

  for(var i = 0; i < docs.length; i++){
    if(docs[i].path === path){

      var lang = path.split("/")[1];

      var my_html = docs[i].html;
      if(path.indexOf(".md") !== -1){
        my_html = markdown.toHTML(my_html)
      }

      my_html.replace(/<pre>/g, "<pre><code>");
      my_html.replace(/<\/pre>/g, "</pre></code>");

      $("#display").html(my_html);
      $("#display img").remove();
      $("#display a").each(function(index){
          var href = $(this).attr("href");
          if(typeof href !== typeof undefined && href !== false){

            if(lang === "nodejs"){

            } else if(lang === "css"){

            } else if(lang === "javascript"){

            } else if(lang === "nw"){

            }

            $(this).removeAttr("href");
            $(this).attr("onclick","openThis('"+href+"')");
          }
      });

      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });

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

function openThis(path){
  gui.Shell.openExternal(path);
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
