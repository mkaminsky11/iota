## App

_Since v0.3.1_

## Synopsis

```javascript
// Load native UI library
var gui = require('nw.gui');

// Print arguments
console.log(gui.App.argv);

// Quit current app
gui.App.quit();

// Get the name field in manifest
gui.App.manifest.name
```

## Reference

### argv

**Get** the command line arguments when starting the app.

### fullArgv

**Get** all the command line arguments when starting the app. Because node-webkit itself used switches like `--no-sandbox` and `--process-per-tab`, it would confuse the app when the switches were meant to be given to node-webkit, so `App.argv` just filtered such switches (arguments' precedence were kept). You can get the switches to be filtered with `App.filteredArgv`.

### dataPath

_since v0.6.1_

**Get** the application's data path in user's directory. Windows: `%LOCALAPPDATA%/<name>`; Linux: `~/.config/<name>`; OSX: `~/Library/Application Support/<name>` where `<name>` is the field in the manifest.

### manifest

_since v0.7.0_

**Get** the JSON object of the manifest file.

### clearCache()

_Since v0.6.0_

Clear the HTTP cache in memory and the one on disk. This method call is synchronized.

### closeAllWindows()

_since v0.3.2_

Send the `close` event to all windows of current app, if no window is blocking the `close` event, then the app will quit after all windows have done shutdown. Use this method to quit an app will give windows a chance to save data.

### crashBrowser(), crashRenderer()

_since v0.8.0_

These 2 functions crashes the browser process and the renderer process respectively, to test the [[Crash dump]] feature.

### getProxyForURL(url)

_since v0.6.3_  
Query the proxy to be used for loading `url` in DOM. The return value is in the same format used in [PAC](http://en.wikipedia.org/wiki/Proxy_auto-config) (e.g. "DIRECT", "PROXY localhost:8080").

### setProxyConfig(config)
_since v0.11.1_  
Set the proxy config which the web engine will be used to request network resources.  
Rule: 
````
    // Parses the rules from a string, indicating which proxies to use.                                                                                                                        
    //                                                                                                                                                                                         
    //   proxy-uri = [<proxy-scheme>"://"]<proxy-host>[":"<proxy-port>]                                                                                                                        
    //                                                                                                                                                                                         
    //   proxy-uri-list = <proxy-uri>[","<proxy-uri-list>]                                                                                                                                     
    //                                                                                                                                                                                         
    //   url-scheme = "http" | "https" | "ftp" | "socks"                                                                                                                                       
    //                                                                                                                                                                                         
    //   scheme-proxies = [<url-scheme>"="]<proxy-uri-list>                                                                                                                                    
    //                                                                                                                                                                                         
    //   proxy-rules = scheme-proxies[";"<scheme-proxies>]                                                                                                                                     
    //                                                                                                                                                                                         
    // Thus, the proxy-rules string should be a semicolon-separated list of                                                                                                                    
    // ordered proxies that apply to a particular URL scheme. Unless specified,                                                                                                                
    // the proxy scheme for proxy-uris is assumed to be http.                                                                                                                                  
    //                                                                                                                                                                                         
    // Some special cases:                                                                                                                                                                     
    //  * If the scheme is omitted from the first proxy list, that list applies                                                                                                                
    //    to all URL schemes and subsequent lists are ignored.                                                                                                                                 
    //  * If a scheme is omitted from any proxy list after a list where a scheme                                                                                                               
    //    has been provided, the list without a scheme is ignored.                                                                                                                             
    //  * If the url-scheme is set to 'socks', that sets a fallback list that                                                                                                                  
    //    to all otherwise unspecified url-schemes, however the default proxy-                                                                                                                 
    //    scheme for proxy urls in the 'socks' list is understood to be                                                                                                                        
    //    socks4:// if unspecified.                                                                                                                                                            
    //                                                                                                                                                                                         
    // For example:                                                                                                                                                                            
    //   "http=foopy:80;ftp=foopy2"  -- use HTTP proxy "foopy:80" for http://                                                                                                                  
    //                                  URLs, and HTTP proxy "foopy2:80" for                                                                                                                   
    //                                  ftp:// URLs.                                                                                                                                           
    //   "foopy:80"                  -- use HTTP proxy "foopy:80" for all URLs.                                                                                                                
    //   "foopy:80,bar,direct://"    -- use HTTP proxy "foopy:80" for all URLs,                                                                                                                
    //                                  failing over to "bar" if "foopy:80" is                                                                                                                 
    //                                  unavailable, and after that using no                                                                                                                   
    //                                  proxy.                                                                                                                                                 
    //   "socks4://foopy"            -- use SOCKS v4 proxy "foopy:1080" for all                                                                                                                
    //                                  URLs.                                                                                                                                                  
    //   "http=foop,socks5://bar.com -- use HTTP proxy "foopy" for http URLs,                                                                                                                  
    //                                  and fail over to the SOCKS5 proxy                                                                                                                      
    //                                  "bar.com" if "foop" is unavailable.                                                                                                                    
    //   "http=foopy,direct://       -- use HTTP proxy "foopy" for http URLs,                                                                                                                  
    //                                  and use no proxy if "foopy" is                                                                                                                         
    //                                  unavailable.                                                                                                                                           
    //   "http=foopy;socks=foopy2   --  use HTTP proxy "foopy" for http URLs,                                                                                                                  
    //                                  and use socks4://foopy2 for all other                                                                                                                  
    //                                  URLs.                                          
````
### quit()

Quit current app. This method will **not** send `close` event to windows and app will just quit quietly.

### setCrashDumpDir(dir)

_since v0.8.0_

Set the directory where the minidump file will be saved on crash. For more information, see [[Crash dump]] 
### addOriginAccessWhitelistEntry(sourceOrigin, destinationProtocol, destinationHost, allowDestinationSubdomains)
_since v0.10.0-rc1_  
Add an entry to the whitelist used for controlling cross-origin access. Suppose you want to allow HTTP redirecting from `github.com` to the page of your app, use something like this with the [[App-protocol]]: 
```js
App.addOriginAccessWhitelistEntry('http://github.com/', 'app', 'myapp', true);
```  
Use `App.removeOriginAccessWhitelistEntry` with exactly the same arguments to do the contrary.
### removeOriginAccessWhitelistEntry(sourceOrigin, destinationProtocol, destinationHost, allowDestinationSubdomains)
_since v0.10.0-rc1_  
Remove an entry from the whitelist used for controlling cross-origin access. See `addOriginAccessWhitelistEntry` above.

### registerGlobalHotKey(shortcut);
_since v0.10.0_

Register a global keyboard shortcut (also known as system-wide hot key) to the system.

For more information, please see [[Shortcut]].

### unregisterGlobalHotKey(shortcut);
_since v0.10.0_

Unregisters a global keyboard shortcut.

For more information, please see [[Shortcut]].

## Events

Following events can be listened by using `App.on()` function, for more information on how to receive events, you can visit [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter).

### open

_Since v0.3.2_

Emitted when users opened a file with your app. There is a single parameter of this event callback: Since v0.7.0, it is the full command line of the program; before that it's the argument in the command line and the event is sent multiple times for each of the arguments. For more on this, see [[Handling files and arguments]].

### reopen

_since v0.7.3_

This is a Mac specific feature. This event is sent when the user clicks the dock icon for an already running application.