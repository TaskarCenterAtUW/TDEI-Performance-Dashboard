const CryptoJS = require('crypto-js')

const cryptoUtility = {
  encrypt: (text, secretKey) => {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
  },
  decrypt: (encryptedText, secretKey) => {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  },
};

const secretKey = 'dgwekjfhgwerkj';
const value = '2ca2c3d6-8d5b-443a-9c03-244c78e7b0de';

const encryptedApiKey = cryptoUtility.encrypt(value, secretKey);
console.log('Encrypted value:', encryptedApiKey);

const decryptedApiKey = cryptoUtility.decrypt(encryptedApiKey, secretKey);
console.log('Decrypted value:', decryptedApiKey);
