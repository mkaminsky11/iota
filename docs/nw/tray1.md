## new Tray(option)

Create a new `Tray`, `option` is an object contains initial settings for the `Tray`. `option` can have following fields: `title`, `tooltip`, `icon` and `menu`.

Every field has its own property in the `Tray`, see documentation of each property for details.

When you assign `new Tray(option)` to a variable/property take care about visibility and GC. 
    
    function init(){
     var tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });
     // In this case tray will be collected by GC after some time and icon will disappear
    }
    

here is correct variant

    var tray;
    function init(){
     tray = new gui.Tray({ title: 'Tray', icon: 'img/icon.png' });
    }