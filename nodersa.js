const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
 
const text = 'Hello RSA!';

const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);

const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);

var public_key = key.exportKey('public');

var private_key = key.exportKey('public');

console.log(public_key + '\n' + private_key);
