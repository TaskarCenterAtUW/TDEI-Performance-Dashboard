import axios from 'axios';
import CryptoJS from 'crypto-js';
import { PKI, ENCRYPTED_KEY } from '../utils/contants';

// Create an Axios instance
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to decrypt the API key
const decrypt = () => {
  const bytes = CryptoJS.AES.decrypt(ENCRYPTED_KEY, PKI);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const decryptedVal = decrypt(); 
    if (decryptedVal) {
      config.headers['X-API-KEY'] = decryptedVal;  
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 403:
          console.log('Forbidden access');
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error: ", error.response.data.message);
          break;
        default:
          console.error("Unexpected error: ", error.response.status);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
