import axios from "axios";
import base_url from "./Baseurl";


const axiosInstance = axios.create({
  baseURL:base_url,
  headers: { "Content-type": "application/x-www-form-urlencoded"}
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token =
      sessionStorage.getItem("token") || localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
      // config.headers.Authorization=token
      // config.headers.Authorization=Bearer ${token}
    }
    return config;
  },
  function (err) {
    Promise.reject(err);
  }
);
export default axiosInstance;