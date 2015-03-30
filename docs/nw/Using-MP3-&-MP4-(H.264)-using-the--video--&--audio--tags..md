## Using-MP3-&-MP4-(H.264)-using-the--video--&--audio--tags.

Due to licensing issues, the pre-built binary doesn't ship with the necessary codecs for patented media formats. If you require support for these formats, see the instructions below.

_**Consult a lawyer if you do not understand the licensing constraints and require patented media formats in your application.**_

# Overview

In the pre-built libffmpegsumo.dll, the following codecs are supported:
```
theora,vorbis,vp8,pcm_u8,pcm_s16le,pcm_s24le,pcm_f32le,pcm_s16be,pcm_s24be
```
The following demuxers are supported:
```
ogg,matroska,wav
```

As nw.js is based on Chromium, the media components are essentially the same. In order to use MP3 and H.264, you'll need to compile ffmpeg with corresponding options. _(Please note that MP3 and H.264 codecs are licensed under the GPL in ffmpeg)._

Alternatively, you can try to use the media libraries from Chrome. It has been reported to work, but it hasn't been properly tested, so it may or may not work for you in latest version.

**Warning: linking code licensed under the GPL code requires you to license your code under the GPL as well**

# Windows

You will need files from the matching Chrome version. (For example, 0.6.x is based on Chromium 28)

1. Locate the Chrome\Application folder (e.g. C:\Program Files\Google)

2. Copy `ffmpegsumo.dll` to your nw.js distribution directory.

# Linux

The directory location may vary according to the Linux distribution you are using. Under Ubuntu, it's located at `/opt/google/chrome`. Copy `libffmpegsumo.so` to the nw.js folder.

# Mac

Head to your Applications folder and right-click on Google Chrome. Select Show Package Contents and navigate to Versions > Most recent # > Framework > Libraries.

Copy `ffmpegsumo.so` to `nwjs.app/Contents/Frameworks/nwjs Framework.framework/Libraries/`.

# Build it Yourself
If you are building nw.js, open `src/third_party/ffmpeg/chromium/scripts/build_ffmpeg.sh`, and search around line 379 for the following directives:
```sh
# Google Chrome & ChromeOS specific configuration.
add_flag_chrome --enable-decoder=aac,h264,mp3
add_flag_chrome --enable-demuxer=mp3,mov
add_flag_chrome --enable-parser=aac,h264,mpegaudio
```
Change them to:

```sh
add_flag_common --enable-decoder=aac,h264,mp3
add_flag_common --enable-demuxer=mp3,mov
add_flag_common --enable-parser=aac,h264,mpegaudio
```

Then follow the short directions here:
[http://src.chromium.org/svn/trunk/deps/third_party/ffmpeg/README.chromium](http://src.chromium.org/svn/trunk/deps/third_party/ffmpeg/README.chromium)

You'll also need to patch the ffmpeg repo (or define the `branding` gyp variable to `Chrome`, untested)

```patch
diff --git a/ffmpeg.gyp b/ffmpeg.gyp
index ac059f0..1b0424c 100644
--- a/ffmpeg.gyp
+++ b/ffmpeg.gyp
@@ -54,7 +54,7 @@
       ['chromeos == 1', {
         'ffmpeg_branding%': '<(branding)OS',
       }, {  # otherwise, assume Chrome/Chromium.
-        'ffmpeg_branding%': '<(branding)',
+        'ffmpeg_branding%': 'Chrome',
       }],
     ],
```
(see [https://github.com/nwjs/nw.js/issues/1461#issuecomment-32009915](https://github.com/nwjs/nw.js/issues/1461#issuecomment-32009915))

You'll also need to turn on the resource loader's support in Chromium's code, or your format will be treated as a non standard d MIME type and won't be loaded. See src/net/base/mime_util.cc for more. You might also want to look into code in other files guarded by the `'USE_PROPRIETARY_CODECS'` macro.