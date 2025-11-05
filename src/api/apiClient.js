import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || "http://localhost:8000",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Optional: request interceptor to add auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token"); // or cookie
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Optional: response interceptor for common error handling
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    // e.g. handle 401 centrally
    if (err.response && err.response.status === 401) {
      // redirect to login or refresh token flow
    }
    return Promise.reject(err);
  }
);

export default apiClient;
