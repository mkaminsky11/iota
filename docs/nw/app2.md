## App.fullArgv

**Get** all the command line arguments when starting the app. Because node-webkit itself used switches like `--no-sandbox` and `--process-per-tab`, it would confuse the app when the switches were meant to be given to node-webkit, so `App.argv` just filtered such switches (arguments' precedence were kept). You can get the switches to be filtered with `App.filteredArgv`.