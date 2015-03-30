## Debugging-with-Sublime-Text-2-and-3

Sublime Text 2 is a great cross-platform editor for building node-webkit apps, you can download it here: http://www.sublimetext.com/2

### Mac OS X

1. Download node-webkit.app and place it in /Applications folder
2. From the Sublime Text 2 menu select `Tools -> Build System -> New Build System`
3. Enter the following code:

    ````json
    {
        "cmd": ["nwjs", "--enable-logging", "${project_path:${file_path}}"],
        "working_dir": "${project_path:${file_path}}",
        "path": "/Applications/nwjs.app/Contents/MacOS/"
    }
    ````

4. Save the configuration as `nodeWebKit.sublime-build` on the suggested folder
5. Open a new window in Sublime Text 2 using `File -> New Window`
6. Add your project to the window using `Project -> Add Folder to Project...`
7. Open your main application file (ex.: index.html) from the left side menu 
8. Select `Tools -> Build System -> nodeWebKit` (required step just for Sublime Text 3)
9. Select `Tools -> Build`
10. At this point node-webkit application will launch with your project and you will be able to see the debugging output in Sublime Text 2

Work the same with Sublime Text 3, just notice step 8

### Windows
As above, but the commands for the build system are as follows (replacing the path with the location of nw.exe):

````json
{
    "cmd": ["nw.exe", "--enable-logging", "${project_path:${file_path}}"],
    "working_dir": "${project_path:${file_path}}",
    "path": "C:/Tools/nwjs/",
    "shell": true
}
````
