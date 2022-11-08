// Axios
import axios from "axios";

// Axios instance
const axiosInstance = axios.create({
   baseURL: `https://luchismart-api.herokuapp.com/api/v1/auth/admin/login`,
 
 headers: {
   Accepted: "appication/json",
   "Content-Type": "application/json",
  },
});

// Inject token to the request header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
  );
  

export default axiosInstance;
