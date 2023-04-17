const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrypted = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        const mi = message[i].charCodeAt(0) - 65;
        const kj = key[j % key.length].charCodeAt(0) - 65;
        const ci = (mi + kj) % 26;
        encrypted += String.fromCharCode(ci + 65);
        j++;
      } else {
        encrypted += message[i];
      }
    }

    return this.reverse ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let message = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (/[A-Z]/.test(encryptedMessage[i])) {
        const ci = encryptedMessage[i].charCodeAt(0) - 65;
        const kj = key[j % key.length].charCodeAt(0) - 65;
        const mi = (ci - kj + 26) % 26;
        message += String.fromCharCode(mi + 65);
        j++;
      } else {
        message += encryptedMessage[i];
      }
    }

    return this.reverse ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
