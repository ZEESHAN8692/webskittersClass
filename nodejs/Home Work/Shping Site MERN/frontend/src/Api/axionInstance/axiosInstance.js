import axios from "axios";
import base_url from "../base_url";

const axiosInstance = axios.create({
  baseURL: base_url,
  //   timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
