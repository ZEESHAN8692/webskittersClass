import axios from "axios";
import base_url from "../Api/base_url";


const axiosinstace = axios.create({
  baseURL: base_url,
});

export default axiosinstace;
