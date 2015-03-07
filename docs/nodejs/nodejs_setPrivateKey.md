## ECDH.setPrivateKey(private\_key\[, encoding\])

## 

Sets the EC Diffie-Hellman private key. Key encoding can be `'binary'`,
`'hex'` or `'base64'`. If no encoding is provided, then a buffer is
expected.

Example (obtaining a shared secret):

    var crypto = require('crypto');
    var alice = crypto.createECDH('secp256k1');
    var bob = crypto.createECDH('secp256k1');
    
    alice.generateKeys();
    bob.generateKeys();
    
    var alice_secret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
    var bob_secret = bob.computeSecret(alice.getPublicKey(), null, 'hex');
    
    /* alice_secret and bob_secret should be the same */
    console.log(alice_secret == bob_secret);