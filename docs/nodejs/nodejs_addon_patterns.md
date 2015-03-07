## Addon patterns

## 

Below are some addon patterns to help you get started. Consult the online
[v8 reference][0] for help with the various v8
calls, and v8's [Embedder's Guide][1]
for an explanation of several concepts used such as handles, scopes,
function templates, etc.

In order to use these examples you need to compile them using `node-gyp`.
Create the following `binding.gyp` file:

    {
      "targets": [
        {
          "target_name": "addon",
          "sources": [ "addon.cc" ]
        }
      ]
    }

In cases where there is more than one `.cc` file, simply add the file name to
the `sources` array, e.g.:

    "sources": ["addon.cc", "myexample.cc"]

Now that you have your `binding.gyp` ready, you can configure and build the
addon:

    $ node-gyp configure build



[0]: http://izs.me/v8-docs/main.html
[1]: http://code.google.com/apis/v8/embed.html