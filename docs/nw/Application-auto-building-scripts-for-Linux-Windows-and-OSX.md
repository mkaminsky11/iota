## Application-auto-building-scripts-for-Linux-Windows-and-OSX

**You can use [node-webkit-builder](https://github.com/mllrsohn/node-webkit-builder) to automate this process.**

Structure of files for autobuild cross-platform app:

```
my-app/
├── Resources/
│   ├── package.json
│   ├── index.html
│   ├── build.sh
│   ├── build.bat
│   └── build.command
├── build/
│   ├── linux
│   ├── win32
│   └── osx
```

In Linux we can "install" node-webkit in: /opt/node-webkit

build.sh for Linux:
```
#zip all files to nw archive
zip -r my-app.nw ./*
#copy nw.pak from current build node-webkit
cp /opt/node-webkit/nw.pak ./nw.pak
#compilation to executable form
cat /opt/node-webkit/nw ./my-app.nw > ../build/linux/my-app && chmod +x ../build/linux/my-app
#move nw.pak to build folder
mv ./nw.pak ../build/linux/nw.pak
#remove my-app.nw
rm ./my-app.nw
#run application
../build/linux/my-app
```

In Windows we can "install" node-webkit in: c:\node-webkit

In Windows we must use for example 7-zip [http://www.7-zip.org/] batch file - in this system we cannot make zip archive from native console...

build.bat for Windows:
```bat
rem zip all files without git to zip archive -2 compression methods - fast (-mx0) or strong (-mx9)
7z.exe a -tzip my-app.nw * -xr!?git\* -mx0
rem copy nw.pak from current build node-webkit to current (%~dp0) folder
copy c:\node-webkit\nw.pak nw.pak
rem copy icudt.dll from current build node-webkit
copy c:\node-webkit\icudt.dll icudt.dll
rem compilation to executable form
copy /b c:\node-webkit\nw.exe+%~dp0my-app.nw ..\build\win32\my-app.exe
rem move nw.pak to build folder
copy nw.pak ..\build\win32\nw.pak
del nw.pak
rem move icudt.dll to build folder
copy icudt.dll ..\build\win32\icudt.dll
del icudt.dll
rem remove my-app.nw
del my-app.nw
rem run application
..\build\win32\my-app.exe
```
## PowerShell Script
[PowerShell Script](https://gist.github.com/romanov/abc494ee7b08f232f539)