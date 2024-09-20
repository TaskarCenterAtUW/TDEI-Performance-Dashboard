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
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICItblZQcnZCMnQ5aDZsNzdYbXlEY3ZJN0NXaDMyNVROdnpaNGdhaE5RNFJVIn0.eyJleHAiOjE3MjY3NjA4NDgsImlhdCI6MTcyNjc1OTEwOCwianRpIjoiZmJjMmRhNjItYjBmNi00MzE4LTkyODUtMTRiNjg4MGI5ZGM2IiwiaXNzIjoiaHR0cHM6Ly90ZGVpLWtleWNsb2FrLmF6dXJld2Vic2l0ZXMubmV0L3JlYWxtcy90ZGVpIiwic3ViIjoiNTBhNDliZjctZmE5Mi00NmY4LWE1M2YtZjRiNzMyOTQ1MDEzIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidGRlaS1nYXRld2F5Iiwic2Vzc2lvbl9zdGF0ZSI6IjNkOWU0ODc0LTJhYzEtNGQxMi1iZTQ1LWU2NTJlODFlNTJkOCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiIiwiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy10ZGVpIl19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiIzZDllNDg3NC0yYWMxLTRkMTItYmU0NS1lNjUyZTgxZTUyZDgiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IkVtaWx5IEpvaG5zb24iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzaHdldGhhcEB2aW5kYWdvLmluIiwiZ2l2ZW5fbmFtZSI6IkVtaWx5IiwiZmFtaWx5X25hbWUiOiJKb2huc29uIiwiZW1haWwiOiJzaHdldGhhcEB2aW5kYWdvLmluIn0.ums5lhmTs2PmLpiYPQKBkRFyNEUyzsdIjz7BwvGo2NsV4yVCLWLuSU55ohyXnJdGVgAFbd4srpMr9gCwH7ZCE4iN7QTc45DfZADfgzbU213LENlYPLbY0sO1sk2zCq-QzafnS4RwT_r2nDjhWJIZnwdaQIKyoIjt_D98S0wlTjuXY2Sgq_9-wJC2h7G4LgxG_nbOcDCoVBMrnqsl7Z4QA30qPqQXvxwaj1FZF8V7s18Qj_2x93g0rA3iBfxbYxTDzk6Mekm-AweQUbs0al8efeUS6XErqwSPjS4ooh5TjI5GzDfJYIr5uN7-kOHq6fLQzDv-No0ldad78l2_pm3DJw";
    //localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
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
