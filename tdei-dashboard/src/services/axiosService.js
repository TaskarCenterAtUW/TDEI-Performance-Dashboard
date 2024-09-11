import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
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
