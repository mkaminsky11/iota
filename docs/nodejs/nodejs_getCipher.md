## tlsSocket.getCipher()

## 

Returns an object representing the cipher name and the SSL/TLS
protocol version of the current connection.

Example:
{ name: 'AES256-SHA', version: 'TLSv1/SSLv3' }

See SSL\_CIPHER\_get\_name() and SSL\_CIPHER\_get\_version() in
[http://www.openssl.org/docs/ssl/ssl.html\#DEALING\_WITH\_CIPHERS][0] for more
information.


[0]: http://www.openssl.org/docs/ssl/ssl.html#DEALING_WITH_CIPHERS