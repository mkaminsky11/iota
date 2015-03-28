## setProgressBar(progress)

  
valid values are 0 to 1   
val < 0 means remove the progress bar   
val \> 1 means indeterminate   
on linux, only Ubuntu is supported, you'll need to specify the application `.desktop` file through `NW_DESKTOP` env. if `NW_DESKTOP` env variable is not found, it will assume `nw.desktop`