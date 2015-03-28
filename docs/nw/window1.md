## Window.get(\[window\_object\])

If `window_object` is not specifed, then return current window's `Window` object, otherwise return `window_object`'s `Window` object.

    // Get the current window
    var win = gui.Window.get();
    
    // Create a new window and get it
    var new_win = gui.Window.open('https://github.com');