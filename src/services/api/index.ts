import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://seal-app-usz5j.ondigitalocean.app",
  timeout: 30000,
});

export default api;
