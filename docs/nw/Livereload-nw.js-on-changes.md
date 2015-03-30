## Livereload-nw.js-on-changes

## Basic solution

When you are working on a prototype it's faster to reload the nodewebkit window
automatically on file changes.

To do this, you can add this script tag to the end of your main file:

```html
<script>
  var path = './';
  var fs = require('fs');
  
  fs.watch(path, function() {
    if (location)
      location.reload();
  });
</script>
```

## Recursive solution

You can add an option to the previous example to watch all subdirectories: `fs.watch(path, { recursive: true }, listener)`. Sadly, the recursive option is only currently supported on OS X. For a more robust solution, first you need to install "gaze", "chokidar" or "gulp", and then change the script tag content:

### gaze

`npm install gaze`

```html
  <script>
   var Gaze = require('gaze').Gaze;
   var gaze = new Gaze('**/*');

   gaze.on('all', function(event, filepath) {
     if (location)
       location.reload();
   });
  </script>
```

### chokidar

`npm install chokidar`

```html
  <script>
    var chokidar = require('chokidar');
    var watcher  = chokidar.watch('.', {ignored: /[\/\\]\./});
    watcher.on('all', function(event, path) {
      if (window.location)
        window.location.reload();
    });
  </script>
```

### gulp

`npm install gulp`

```html
<script>
  var gulp = require('gulp');
  gulp.task('reload', function () {
    if (location) location.reload();
  });

  gulp.watch('**/*', ['reload']);
</script>
```
Or if you don't want to reload the entire app when editing styles, you can attach a style task
in gulp only to css files.

```html
<script>
  var gulp = require('gulp');
  
  gulp.task('html', function () {
    if (location) location.reload();
  });

  gulp.task('css', function () {
    var styles = document.querySelectorAll('link[rel=stylesheet]');

    for (var i = 0; i < styles.length; i++) {
      // reload styles
      var restyled = styles[i].getAttribute('href') + '?v='+Math.random(0,10000);
      styles[i].setAttribute('href', restyled);
    };
  });

  gulp.watch(['**/*.css'], ['css']);
  gulp.watch(['**/*.html'], ['html']);
</script>
```

### Livereload script src format

Use format allowing file: URLs.
https://github.com/livereload/livereload-js#using-livereloadjs

```js
[
  'http://',
  (location.host || 'localhost').split(':')[0],
  ':35729/livereload.js'
].join('')
```

## Clearing the node modules cache

If you want to reload and re-run your node modules, you'll need to delete the global require cache (`global.require.cache`). [See this StackOverflow question](http://stackoverflow.com/questions/25143532/node-webkit-clear-cache). Note that this will remove ALL modules from the cache, possibly including the `node-main` module:

```coffee
# Define a new `reload` task in Gulp that simply refreshes the current page
gulp.task 'reload', ->
	# Log that we're reloading the app
	console.log 'Reloading app...'
	# Clear and delete node-webkit's global required modules cache.
	# See: http://stackoverflow.com/q/25143532/
	for module_name, module of global.require.cache
		delete global.require.cache[module_name]
	# Refresh the page
	window.location.reload()

# Set Gulp to watch all files, and reload the page when it detects a change.
gulp.watch '**/*', ['reload']
```


