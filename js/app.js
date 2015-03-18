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
  $(".prev").click(function(){
    if(stack.canGoBack() === true){
      openPath(stack.goBack());
    }
    configHistory();
  });
  $(".next").click(function(){
    if(stack.canGoForwards() === true){
      openPath(stack.goForwards());
    }
    configHistory();
  });

  $(window).resize(function(){

  });
});

//win.showDevTools();

/**
* SETUP
**/
var store = markdown.toHTML(fs.readFileSync("README.md", "utf8"));

$("#store").html(store);
$("#store img").attr("style", "width: 50%;display:block;margin-bottom:20px;margin-left:auto;margin-right:auto;margin-top:20px;");
$("#store h1, #store h2").attr("style","text-align:center");
$("#store a").each(function(index){
    var href = $(this).attr("href");
    if(typeof href !== typeof undefined && href !== false){
      $(this).removeAttr("href");
      $(this).attr("onclick","openThis('"+href+"')");
    }
});

$("#display").html($("#store").html());
$('pre code').each(function(i, block) {
  hljs.highlightBlock(block);
});

/**
* GET DOCS
**/
var docs = [];
var fuzzy = [];
var defaults = [];
var current_open = null;


function init(){
  var folders = fs.readdirSync("docs");
  for(var i = 0; i < folders.length; i++){
    if(folders[i][0] !== "." && folders[i].indexOf(".png") === -1 && folders[i] !== "docs.json"){

      var doc = fs.readdirSync("docs/" + folders[i]);
      for(var j = 0; j < doc.length; j++){
        if(doc[j][0] !== "." && doc[j].indexOf(".png") === -1 && doc[j] !== "script.js" && doc[j] !== "doc.json"){
          var text = fs.readFileSync("docs/" + folders[i] + "/" + doc[j], "utf8").split("<!--next-->");
          for(var k = 0; k < text.length; k++){
            var name = text[k].trim().split("\n")[0].replace("<h2>","").replace("</h2>","").replace("##","").replace("\\#\\#","");
            name = name.replace(/\\/g, "");

            var section = {
              name: name,
              html: text[k].trim(),
              path: "docs/" + folders[i] + "/" + doc[j],
              icon: "docs/" + folders[i] + "/icon.png",
              folder: folders[i]
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

  var json = JSON.parse(fs.readFileSync("docs/docs.json", "utf8")).data;
  for(var x = 0; x < json.length; x++){
    var name = json[x].name;
    var path = json[x].path;

    var to_push = {
      name: name,
			path: path
    };

    to_push.data = [];

    for(var y = 0; y < docs.length; y++){
      if(docs[y].folder === path){
        to_push.data.push(docs[y]);
      }
    }

    defaults.push(to_push);
  }

}

init();
searchDefault();

/**
* DETECT INPUT
**/

function search(term){
  var val = term;
  if(val === ""){
		searchDefault();
	}
	else{
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
    length = fin.length;
    for(var c = 0; c < length; c++){
      if(fin[c] !== null){
        try{
          var img_path_arr = fin[c].path.split("/");
          var img_path = "docs/" + img_path_arr[1] + "/icon.png";

          var base = "<div class=\"sidebar-item\" data-path='"+fin[c].path+"' onclick=\"openPath('"+fin[c].path+"')\"><img src=\""+img_path+"\"><p>" + fin[c].name + "</p></div>";
          $("#results").append(base);
        } catch(e){
          console.log(fin[c]);
        }
      }
    }
  }
}

function searchDefault(){
  current_open = null;
	$("#results").html("");
	var _html = "";
	for(var i = 0; i < defaults.length; i++){
		var name = defaults[i].name;
		var data = defaults[i].data;
		var icon = "docs/" + defaults[i].path + "/icon.png";
		_html = _html + "<div class=\"sidebar-header\"><span>" + name + "</span></div>";
		for(var j = 0; j < data.length; j++){
			_html = _html + "<div class=\"sidebar-item\" data-path=\""+data[j].path+"\" onclick=\"openPath('"+data[j].path+"')\"><img src=\""+icon+"\"><p>" + data[j].name + "</p></div>";
		}
	}
	$("#results").html(_html);
}

$("#type").keyup(function(e){
  var val = $("#type").val();
  search(val);
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    //escape
  }
});

function openPath(path){
  current_open = path;
  stack.goTo(path);
  configHistory();

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
            $(this).removeAttr("href");
            $(this).attr("onclick","openThis('"+href+"')");
          }
      });

      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });

    }
  }
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

function configHistory(){
  if(stack.canGoBack() === true){
    $(".prev").addClass("active");
  }
  else{
    $(".prev").removeClass("active");
  }

  if(stack.canGoForwards() === true){
    $(".next").addClass("active");
  }
  else{
    $(".next").removeClass("active");
  }
}
