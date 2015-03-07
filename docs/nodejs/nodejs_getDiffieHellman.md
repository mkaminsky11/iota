## crypto.getDiffieHellman(group\_name)

## 

Creates a predefined Diffie-Hellman key exchange object. The
supported groups are: `'modp1'`, `'modp2'`, `'modp5'` (defined in \[RFC
2412\]\[\]) and `'modp14'`, `'modp15'`, `'modp16'`, `'modp17'`,
`'modp18'` (defined in \[RFC 3526\]\[\]). The returned object mimics the
interface of objects created by \[crypto.createDiffieHellman()\]\[\]
above, but will not allow to change the keys (with
\[diffieHellman.setPublicKey()\]\[\] for example). The advantage of using
this routine is that the parties don't have to generate nor exchange
group modulus beforehand, saving both processor and communication
time.

Example (obtaining a shared secret):

    var crypto = require('crypto');
    var alice = crypto.getDiffieHellman('modp5');
    var bob = crypto.getDiffieHellman('modp5');
    
    alice.generateKeys();
    bob.generateKeys();
    
    var alice_secret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
    var bob_secret = bob.computeSecret(alice.getPublicKey(), null, 'hex');
    
    /* alice_secret and bob_secret should be the same */
    console.log(alice_secret == bob_secret);