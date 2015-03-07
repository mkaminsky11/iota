## Perfect Forward Secrecy

## 

The term "\[Forward Secrecy\]" or "Perfect Forward Secrecy" describes a feature of
key-agreement (i.e. key-exchange) methods. Practically it means that even if the
private key of a (your) server is compromised, communication can only be
decrypted by eavesdroppers if they manage to obtain the key-pair specifically
generated for each session.

This is achieved by randomly generating a key pair for key-agreement on every
handshake (in contrary to the same key for all sessions). Methods implementing
this technique, thus offering Perfect Forward Secrecy, are called "ephemeral".

Currently two methods are commonly used to achieve Perfect Forward Secrecy (note
the character "E" appended to the traditional abbreviations):

* \[DHE\] - An ephemeral version of the Diffie Hellman key-agreement protocol.
* \[ECDHE\] - An ephemeral version of the Elliptic Curve Diffie Hellman
key-agreement protocol.

Ephemeral methods may have some performance drawbacks, because key generation
is expensive.