## Making-your-app-start-at-user-login-(OS-X)

One way to make your packaged application automatically launch on user login in OS X is to define a `launchd` job and use `child_process.exec` to run a series of system commands in order to configure launchd to run your app when the user logs in.

Let's assume we've already created a packaged OS X app called `sleep.app` and placed it in `/Applications/sleep.app`.

First, we'll define a job in the form of a .plist (XML) file and place it in our app directory at `./com.capablemonkey.sleepApp.plist`

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>com.capablemonkey.sleepApp</string>
    <key>ProgramArguments</key>
      <array>
          <string>/usr/bin/open</string>
          <string>-W</string>
          <string>/Applications/sleep.app</string>
      </array>
    <key>RunAtLoad</key>
    <true/>
  </dict>
</plist>
```

Then, we need our nw.js app to run the following commands:

`cp com.capablemonkey.sleepApp.plist ~/Library/LaunchAgents/` in order to move the plist into a directory where `launchd` will check for jobs to run at login.

`launchctl load ~/Library/LaunchAgents/com.capablemonkey.sleepApp.plist` which will tell `launchd` (via `launchctl`) to load our job.  With each login, our app, `/Applications/sleep.app` should be launched.

To achieve this, we'll run those commands from node using `child_process.exec`:

```js
var async = require('async');
var exec = require('child_process').exec;
 
function enableRunOnLogin(callback) {
  async.waterfall([
    function(callback) {
      exec('cp ./com.capablemonkey.sleepApp.plist ~/Library/LaunchAgents/', 
        function(error, stdout, stderr) {
          if (stderr) { return callback(stderr); }
          if (error !== null) { return callback(error); }
 
          return callback(null); 
        }
      );
    },
    function(callback) {
      exec('launchctl load ~/Library/LaunchAgents/com.capablemonkey.sleepApp.plist', 
        function(error, stdout, stderr) {
          if (stderr) { return callback(stderr); }
          if (error !== null) { return callback(error); }
 
          return callback(null); 
        }
      );
    }
 
  ], function(err, result) {
    if (err) {
      console.error("Exec error", err);
      return callback(err);
    }
 
    return callback(null);
  });
}
```

See [this guide](http://blog.gordn.org/2015/03/implementing-run-on-login-for-your-node.html) for more info.