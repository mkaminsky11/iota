## url.format(urlObj)

## 

Take a parsed URL object, and return a formatted URL string.

Here's how the formatting process works:

* `href` will be ignored.
* `protocol` is treated the same with or without the trailing `:` (colon).
  * The protocols `http`, `https`, `ftp`, `gopher`, `file` will be
postfixed with `://` (colon-slash-slash).
  * All other protocols `mailto`, `xmpp`, `aim`, `sftp`, `foo`, etc will
be postfixed with `:` (colon)
* `slashes` set to `true` if the protocol requires `://` (colon-slash-slash)
  * Only needs to be set for protocols not previously listed as requiring
slashes, such as `mongodb://localhost:8000/`
* `auth` will be used if present.
* `hostname` will only be used if `host` is absent.
* `port` will only be used if `host` is absent.
* `host` will be used in place of `hostname` and `port`
* `pathname` is treated the same with or without the leading `/` (slash).
* `search` will be used in place of `query`.
  * It is treated the same with or without the leading `?` (question mark)
* `query` (object; see `querystring`) will only be used if `search` is absent.
* `hash` is treated the same with or without the leading `#` (pound sign, anchor).