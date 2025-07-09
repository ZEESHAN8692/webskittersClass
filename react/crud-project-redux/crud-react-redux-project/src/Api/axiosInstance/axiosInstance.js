import axios from "axios";
import { base_url } from "../api_url";

const axiosInstance = axios.create({
  baseURL: base_url,
  headers: { "X-Custom-Header": "foobar" },
});

export default axiosInstance;
