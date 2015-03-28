## Window.close(\[force\])

Close current window, you can catch the `close` event to prevent the closing. If `force` is specified and equals to `true`, then the `close` event will be ignored.

Usually you would like to listen to the `close` event and do some shutdown work and then do a `close(true)` to really close the window.

    win.on('close', function() {
      this.hide(); // Pretend to be closed already
      console.log("We're closing...");
      this.close(true);
    });
    
    win.close();