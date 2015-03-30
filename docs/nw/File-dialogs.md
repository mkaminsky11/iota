## File-dialogs

_Following content requires node-webkit >= v0.2.5_

One important factor of native apps is the ability to make use of native file dialogs. HTML5 does provided limited support for file dialogs, you can put `<input type='file' />` and make user click on it and then upload the file to somewhere, that's not enough for apps on node-webkit, so we extended the `input` tag.

**You may want to use [[Dragging files into page]] other than opening a file dialog to provide better experiences for some cases.**

# Differences between WebKit and node-webkit

In WebKit, certain operations are forbidden in javascript, for example, you can not generate a `click` event on `<input type='file' />`, and you can not set/get real values from it.

But in node-webkit, these restrictions are removed, and we will use `input` tag to create file dialogs.

Another thing is the `File` object of HTML5's file API, in WebKit the `path` attribute is hidden so developers will never know the real paths of files. In node-webkit we made it shown so much things are possible now.

# How to open a file dialog

To create a file dialog, we should first put a `input` tag on html page and make it hidden:

_In order to make examples simple we use jQuery or MooTools for DOM operations_

```html
<html>
<head>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
  <!-- OR -->
  <script src="http://ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js"></script>
  <!-- OR NONE IF YOU ARE USING PURE JAVASCRIPT -->

</head>
<body>
<input style="display:none;" id="fileDialog" type="file" />
<script>
  // ...
</script>
</body>
</html>
```

Then we trigger a `click` event on `input` tag, and use the `change` event to capture the file path:

## Pure JavaScript
```html
<script>
  function chooseFile(name) {
    var chooser = document.querySelector(name);
    chooser.addEventListener("change", function(evt) {
      console.log(this.value);
    }, false);

    chooser.click();  
  }
  chooseFile('#fileDialog');
</script>
```

## jQuery
```html
<script>
  function chooseFile(name) {
    var chooser = $(name);
    chooser.change(function(evt) {
      console.log($(this).val());
    });

    chooser.trigger('click');  
  }
  chooseFile('#fileDialog');
</script>
```

## MooTools
```html
<script>
  function chooseFile(name) {
    var chooser = $(name);
    chooser.addEvent("change", function() {
      console.log(this.value);
    });

    chooser.click();
  }
  chooseFile('fileDialog');
</script>
```

# Other types of dialogs

## Multiple

To make the dialog able to select multiple files, just add a `multiple` attribute, which is specified in HTML5:

```html
<input type="file" multiple />
```

And the `$('#fileDialog').val()` will return all selected files's paths separated with `;`.

## Filter File

To restrict list of file types dialog accept, just add an `accept` attribute. ~~Also works for `nwsaveas` dialogs.~~ Actually not.

```html
<input type="file" accept=".doc,.docx,.xml,application/msword">
```

## Select directory (webkit)

WebKit also adds a `webkitdirectory` attribute to show a directory select dialog:

```html
<input type="file" webkitdirectory />
```

But this attribute is not so useful since the value of `input` tag is not the path of directory we selected, but paths of all files under the directory.

## Select directory (node-webkit)

In order to provide complete set of file dialogs, node-webkit add another two attributes: `nwdirectory` and `nwsaveas`.

`nwdirectory` is a bit similar to `webkitdirectory` because it let user select a directory too, but it will not enumerate all files under the directory but directly returns the path of directory, developers may want to use `nwdirectory` to get the path of a directory:

```html
<input type="file" nwdirectory />
```

## Save file

`nwsaveas` will open a 'save as' dialog, which lets user enter the path of a file. It's possible to select a non-existing file, which is different from the default file input tag:

```html
<input type="file" nwsaveas />
```

Starting from v0.7.3 you can specify a value for the default file name to save:

```html
<input type="file" nwsaveas="filename.txt" />
```

# FileList

Instead of the value of `input` tag, HTML5 provides a `files` attribute to return all files selected in a `input` tag.  The standard usage is:

```javascript
var files = $('#fileDialog')[0].files;
for (var i = 0; i < files.length; ++i)
  console.log(files[i].name);
```

But in normal browser you will not be able to get real paths of files, so in node-webkit an extra `path` attribute is provided, so you can use this now:

```javascript
for (var i = 0; i < files.length; ++i)
  console.log(files[i].path);
```

If you make use of the `fs` module with this, you will do magics not possible in browser.

# Default path

_This feature requires node-webkit >= v0.5.0_

Sometimes the application may intelligently suggest where some files might be saved (or loaded) so that its users don't have to do any manual navigating where such suggestion is correct.

Such path suggestion is given as a value of yet another custom attribute (`nwworkingdir`):

### Windows 

```html
<input type="file" nwworkingdir="C:\Windows" />
```

### Unix

```html
<input type="file" nwworkingdir="/home/path/" />
```

The file dialog starts in the given directory when this element is activated.

# Choosing the same directory multiple times

Once the chooser has been used to select a directory (or the same file path + file name), the change event will not fire again since the value of the input is already set with the same value. For example, if a user is expected to select a directory to export a file to, if they choose the same directory multiple times, the change event will one fire once. This is only an issue if the selected value may potentially be the same multiple times, i.e. in the case of selecting an output directory.

In this case, re-setting the value of the input can ensure that the change event will always fire in subsequent selections.

## jQuery
```html
<script>
  function chooseFile(name) {
    var chooser = $(name);
    chooser.change(function(evt) {
      console.log($(this).val());
      // Reset the selected value to empty ('')
      $(this).val('');
    });

    chooser.trigger('click');  
  }
  chooseFile('#fileDialog');
</script>
```

# Why not provide API in javascript

We do not provide file dialog API in javascript for following reasons now:

* Our way is the standard way of HTML, it will not cause errors if you move to other platforms.
* Better code reusing.

But if the need is very strong, we will provide it in future.