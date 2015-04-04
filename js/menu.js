var gui = require('nw.gui')
var menu_body = new gui.Menu();
var menu_item = new gui.Menu();

var cut = new gui.MenuItem({
    label: "Cut",
    click: function() {
      document.execCommand("cut");
    }
});

var cut_item = new gui.MenuItem({
    label: "Cut",
    click: function() {
      document.execCommand("cut");
    }
});

var copy = new gui.MenuItem({
    label: "Copy",
    click: function() {
      document.execCommand("copy");
    }
});

var copy_item = new gui.MenuItem({
    label: "Copy",
    click: function() {
      document.execCommand("copy");
    }
});

var paste = new gui.MenuItem({
    label: "Paste",
    click: function() {
      document.execCommand("paste");
    }
});

var paste_item = new gui.MenuItem({
    label: "Paste",
    click: function() {
      document.execCommand("paste");
    }
});

var sep = new gui.MenuItem({ type: 'separator' });

var sep_item = new gui.MenuItem({ type: 'separator' });

var fav_check = new gui.MenuItem({
  type: "checkbox",
  label: "Filter by Favorites",
  checked: false,
  click: function(){
    $("#fav-dropdown input").prop('checked', fav_check.checked);
    $("#fav-dropdown input").trigger("change");
  }
});

menu_body.append(cut);
menu_body.append(copy);
menu_body.append(paste);
menu_body.append(sep);
menu_body.append(fav_check);

menu_item.append(cut_item);
menu_item.append(copy_item);
menu_item.append(paste_item);
menu_item.append(sep_item);
//delete
//edit


$(document).on("contextmenu", function(e) {
  e.preventDefault();
  menu_body.popup(e.originalEvent.x, e.originalEvent.y);
});

function menu_init(){
  $(".sidebar-item").on("contextmenu", function(e) {
    e.preventDefault();
    menu_item.popup(e.originalEvent.x, e.originalEvent.y);
  });
}
