## Window.open(url\[, options\])

Open a new window and load `url` in it, you can specify extra `options` with the window. All window subfields in \[\[Manifest format\]\] can be used. Since v0.4.0, a boolean field `new-instance` can be used to start a new Node instance (webkit process). Since v0.9.0 and 0.8.5, `inject-js-start` and `inject-js-end` field can be used to inject a javascript file, see \[\[Manifest format\]\] .

Since v0.7.3 the opened window is not focused by default. It's a result of unifying behavior across platforms. If you want it to be focused by default, you can set `focus` to `true` in `options`.

    var win = gui.Window.open('https://github.com', {
      position: 'center',
      width: 901,
      height: 127
    });