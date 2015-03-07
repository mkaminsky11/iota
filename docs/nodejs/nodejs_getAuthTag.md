## cipher.getAuthTag()

## 

For authenticated encryption modes (currently supported: GCM), this
method returns a `Buffer` that represents the _authentication tag_ that
has been computed from the given data. Should be called after
encryption has been completed using the `final` method!