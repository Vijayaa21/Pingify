import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pingify-19j86.sevalla.app/api",
  withCredentials: true,
});