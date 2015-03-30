## Control-camera-and-microphone-with-getusermedia-api

_getUserMedia API requires node-webkit >= v0.2.5_

The [getUserMedia API](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) lets users grant web apps access to their camera and microphone without a plug-in. This is the first step in enabling high quality video and audio communication as part of WebRTC, a powerful new real-time communications standard for the open web platform.

In addition, getUserMedia can be combined with other platform features like CSS filters and WebGL to render effects as the <video> is captured. For example, you can [rotate the video and add hipstery filters](http://www.youtube.com/watch?v=PNzmXDa1JLA), [play a xylophone with motion detection](http://www.soundstep.com/blog/experiments/jsdetection/), [try on glasses with face detection](http://neave.github.com/face-detection/), and [step into a photobooth with crazy effects like “Snow” and “Fire”](http://neave.com/webcam/html5/). The good news is, those features are all possible in node-webkit.

### How to use

First, since the getUserMedia API is currently an experimental feature, the API name is called `navigator.webkitGetUserMedia`, not the `navigator.getUserMedia`, you may want to dynamically detect it if you also develop apps on mobile platforms.

To use the webcam or microphone, we need to request permission. The first parameter to getUserMedia() is an object specifying the type of media you want to access. For example, if you want to access the webcam, the first parameter should be {video: true}. To use both the microphone and camera, pass {video: true, audio: true}:

```html
<!DOCTYPE html>
<html>
<head>
<title>webRTC Test</title>
</head>
<body onload="init();" style="background-color:#ababab;" >
<div style="width:352px; height:625px; margin:0 auto; background-color:#fff;" >
    <div>
      <video id="camFeed" width="320" height="240" autoplay>
    </video>
  </div>

    <div>
        <canvas id="photo" width="320" height="240">
        </canvas>
    </div>

    <div style="margin:0 auto; width:82px;">
        <input type="button" value="Take Photo" onclick="takePhoto();">
    </div>
</div>
<script>
function init()
{
    if(navigator.webkitGetUserMedia)
    {
        navigator.webkitGetUserMedia({video:true}, onSuccess, onFail);
    }
    else
    {
        alert('webRTC not available');
    }
}

function onSuccess(stream)
{
    document.getElementById('camFeed').src = webkitURL.createObjectURL(stream);
}

function onFail()
{
    alert('could not connect stream');
}

function takePhoto()
{
    var c = document.getElementById('photo');
    var v = document.getElementById('camFeed');
    c.getContext('2d').drawImage(v, 0, 0, 320, 240);
}
</script>
</body>
</html>
```

### Applying effects

Using CSS Filters, we can apply some gnarly effects to the video as it is captured:

```html
<style>
video {
  width: 307px;
  height: 250px;
  background: rgba(255,255,255,0.5);
  border: 1px solid #ccc;
}
.grayscale {
  +filter: grayscale(1);
}
.sepia {
  +filter: sepia(1);
}
.blur {
  +filter: blur(3px);
}
/* ... */
</style>

<video autoplay></video>

<script>
var idx = 0;
var filters = ['grayscale', 'sepia', 'blur', 'brightness', 'contrast', 'hue-rotate',
               'hue-rotate2', 'hue-rotate3', 'saturate', 'invert', ''];

function changeFilter(e) {
  var el = e.target;
  el.className = '';
  var effect = filters[idx++ % filters.length]; // loop through filters.
  if (effect) {
    el.classList.add(effect);
  }
}

document.querySelector('video').addEventListener('click', changeFilter, false);
</script>
```