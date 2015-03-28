## App.addOriginAccessWhitelistEntry(sourceOrigin, destinationProtocol, destinationHost, allowDestinationSubdomains)

Add an entry to the whitelist used for controlling cross-origin access. Suppose you want to allow HTTP redirecting from `github.com` to the page of your app, use something like this with the \[\[App-protocol\]\]: 
    
    App.addOriginAccessWhitelistEntry('http://github.com/', 'app', 'myapp', true);
    

Use `App.removeOriginAccessWhitelistEntry` with exactly the same arguments to do the contrary.