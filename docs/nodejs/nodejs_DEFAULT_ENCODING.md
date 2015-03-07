## crypto.DEFAULT\_ENCODING

## 

The default encoding to use for functions that can take either strings
or buffers. The default value is `'buffer'`, which makes it default
to using Buffer objects. This is here to make the crypto module more
easily compatible with legacy programs that expected `'binary'` to be
the default encoding.

Note that new programs will probably expect buffers, so only use this
as a temporary measure.