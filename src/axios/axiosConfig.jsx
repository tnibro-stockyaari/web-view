import axios from "axios";
import xhrAdapter from "axios/lib/adapters/xhr.js";
// ✅ Helper function: Get token from localStorage
const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.access_token;
  return token;
};

// ✅ Create axios instance
export const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  adapter: xhrAdapter,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// ✅ Add interceptor to attach token automatically
axiosConfig.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosConfig;
