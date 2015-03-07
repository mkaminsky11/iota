## tlsSocket.getPeerCertificate(\[ detailed \])

## 

Returns an object representing the peer's certificate. The returned object has
some properties corresponding to the field of the certificate. If `detailed`
argument is `true` - the full chain with `issuer` property will be returned,
if `false` - only the top certificate without `issuer` property.

Example:

    { subject:
       { C: 'UK',
         ST: 'Acknack Ltd',
         L: 'Rhys Jones',
         O: 'node.js',
         OU: 'Test TLS Certificate',
         CN: 'localhost' },
      issuerInfo:
       { C: 'UK',
         ST: 'Acknack Ltd',
         L: 'Rhys Jones',
         O: 'node.js',
         OU: 'Test TLS Certificate',
         CN: 'localhost' },
      issuer:
       { ... another certificate ... },
      raw: < RAW DER buffer >,
      valid_from: 'Nov 11 09:52:22 2009 GMT',
      valid_to: 'Nov  6 09:52:22 2029 GMT',
      fingerprint: '2A:7A:C2:DD:E5:F9:CC:53:72:35:99:7A:02:5A:71:38:52:EC:8A:DF',
      serialNumber: 'B9B0D332A1AA5635' }

If the peer does not provide a certificate, it returns `null` or an empty
object.