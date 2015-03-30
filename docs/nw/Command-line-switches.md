## Command-line-switches

Useful switches for `node-webkit`:

### --url="website-url"
Directly open "website-url".

### --no-toolbar
Force disabling toolbar.

### --data-path
Override the default data path (where cookies and localStorage etc. resides)

### --disable-transparency
Completely turn off the code handling window transparency.

### --disable-gpu --force-cpu-draw
force the drawing / compositing using cpu, needed for click through transparency, <br>
more info on transparency visit: https://github.com/rogerwang/node-webkit/wiki/Transparency

### And more: all the switches supported by [Content API of Chromium](http://src.chromium.org/svn/trunk/src/content/public/common/content_switches.cc)

All the command line arguments can be predefined in the application's manifest file. See `chromium-args` in [[Manifest-format]]