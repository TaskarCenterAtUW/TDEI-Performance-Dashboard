import CryptoJS from 'crypto-js';

export const PRIVATE_KEY = 'your-private-key-here';  
const originalKey = '071f739c-c88d-4c2c-9843-bda52d8097d7';

// Encrypt the API key
export const ENCRYPTED_KEY = CryptoJS.AES.encrypt(originalKey, PRIVATE_KEY).toString();

export const BASE_URL = "https://tdei-api-dev.azurewebsites.net/api/v1";  
