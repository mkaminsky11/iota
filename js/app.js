var gui = require('nw.gui');
var fs = require('fs');
var md = require('markdown-it')();
var win = gui.Window.get();

//
//
win.showDevTools(); //show dev tools
//
//
//

//menu.append(new gui.MenuItem({ type: 'separator' }));


var nativeMenuBar = new gui.Menu({ type: "menubar" });
if (typeof nativeMenuBar.createMacBuiltin === "function"){
  nativeMenuBar.createMacBuiltin("iota");
  win.menu = nativeMenuBar;
}
$(document).ready(function(){
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
  $(".edit").click(function(){
    if(current_open !== null){
      editors.open(current_open);
    }
  });
  $('form').submit(function () {
   return false;
  });

  $(window).resize(function(){

  });
});

/**
* SETUP
**/
var store = md.render(fs.readFileSync("README.md", "utf8").replace(/(#)\1{0,}/g, "$& "));

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

displayDefault();

/**
* GET DOCS
**/
var docs = [];
var defaults = [];
var current_open = null;
var id_counter = 1;
var search_options = {
  keys: ['name'],
  id: 'id'
}
var fuse = null;

function displayDefault(){
  fav.reset();
  current_open = null;
  $("#display").html($("#store").html());
  highlight();
}

function searchFav(){
  //don't change what's opened, just what's displayed
  $("#results").html("");

  for(var i = 0; i < docs.length; i++){
      var obj = docs[i];
      if(fav.isFav(obj.path)){
        var img_path_arr = obj.path.split("/");
        var img_path = "docs/" + img_path_arr[1] + "/icon.png";

        var base = "<div class=\"sidebar-item\" data-path='"+obj.path+"' onclick=\"openPath('"+obj.path+"');browse.doclick('"+obj.path+"')\"><img src=\""+img_path+"\"><p>" + obj.name + "</p></div>";
        $("#results").append(base);
      }
  }
}

function init(){
  docs = [];
  id_counter = 1;
  var folders = fs.readdirSync("docs");
  for(var i = 0; i < folders.length; i++){
    if(folders[i][0] !== "." && folders[i].indexOf(".png") === -1 && folders[i] !== "docs.json"){

      var doc = fs.readdirSync("docs/" + folders[i]);
      for(var j = 0; j < doc.length; j++){
        if(doc[j][0] !== "." && doc[j].indexOf(".png") === -1 && doc[j] !== "script.js" && doc[j] !== "script.py" && doc[j] !== "doc.json"){
          var text = fs.readFileSync("docs/" + folders[i] + "/" + doc[j], "utf8");
          var name = text.trim().split("\n")[0].replace("<h2>","").replace("</h2>","").replace("##","").replace("\\#\\#","");
          name = name.replace(/\\/g, "");

          var section = {
            name: name,
            html: text.trim(),
            path: "docs/" + folders[i] + "/" + doc[j],
            icon: "docs/" + folders[i] + "/icon.png",
            folder: folders[i],
            id: id_counter
          };

          docs.push(section);
          id_counter++;
        }
      }

    }
  }

  docsets.refresh();

  fuse = new Fuse(docs, search_options);
}

init();
searchDefault();
browse.init();

/**
* DETECT INPUT
**/

function search(term){
  var val = term;
  if(val === ""){
		searchDefault();
	}
	else{
    var res = fuse.search(val);

    $("#results").html("");

    for(var c = 0; c < res.length; c++){
      if(res[c] !== null){
        var id_index = res[c] - 1;
        var obj = docs[id_index];

          var img_path_arr = obj.path.split("/");
          var img_path = "docs/" + img_path_arr[1] + "/icon.png";

          var base = "<div class=\"sidebar-item\" data-path='"+obj.path+"' onclick=\"openPath('"+obj.path+"');browse.doclick('"+obj.path+"')\"><img src=\""+img_path+"\"><p>" + obj.name + "</p></div>";
          $("#results").append(base);

      }
    }
  }
}

function reset(){
  searchDefault();
  $(".trash .edit .next .prev").removeClass("active");
  current_open = null;
}

function searchDefault(){
  fav.toggleOff(false);
	$("#results").html("");
	var _html = "";
	for(var i = 0; i < defaults.length; i++){
		var name = defaults[i].name;
		var data = defaults[i].data;
		var icon = "docs/" + defaults[i].path + "/icon.png";
		_html = _html + "<div class=\"sidebar-header\"><span>" + name + "</span></div>";
		for(var j = 0; j < data.length; j++){
			_html = _html + "<div class=\"sidebar-item\" data-path=\""+data[j].path+"\" onclick=\"openPath('"+data[j].path+"');browse.doclick('"+data[j].path+"')\"><img src=\""+icon+"\"><p>" + data[j].name + "</p></div>";
		}
	}
	$("#results").html(_html);
}

var ok_keys = [38, 40, 13, 27];

$("#type").keyup(function(e){
  if(ok_keys.indexOf(e.which) === -1){
      browse.reset();
      var val = $("#type").val();
      search(val);
  }
});

function openPath(path){
  current_open = path;
  stack.goTo(path);
  fav.setFav(path);
  configHistory();
  $(".trash").addClass("active");

  for(var i = 0; i < docs.length; i++){
    if(docs[i].path === path){

      var lang = path.split("/")[1];

      var my_html = docs[i].html;
      if(path.indexOf(".md") !== -1){
        my_html = md.render(my_html.replace(/^(#)\1{0,}/g, "$& "))
      }

      my_html.replace(/<pre>/g, "<pre><code>");
      my_html.replace(/<\/pre>/g, "</pre></code>");

      $("#display").html(my_html);
      highlight();
      $("#display img").remove();
      $("#display a").each(function(index){
          var href = $(this).attr("href");
          if(typeof href !== typeof undefined && href !== false){
            $(this).removeAttr("href");
            $(this).attr("onclick","openThis('"+href+"')");
          }
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

function trash(){
  if($(".trash").hasClass("active")){
    //path is current_open
    var r = confirm("are you sure you want to delete this file? It cannot be undone.");
    if (r == true) {
      browse.reset();
      fs.unlinkSync(current_open);
      editors.reset();
      displayDefault();
      $("#type").val("");
      //1. remove the sidebar item
      $("[data-path='"+current_open+"']").remove();
      //2. actually remove it...
      current_open = null;
      //3. reset the docs
      init();
      search($("#type").val());
    }
    else {
      //nothing
    }
  }
}

function highlight(){
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
}
