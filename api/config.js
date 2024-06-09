import axios from "axios";

export const BASE_URL = "https://api-madeaeat.vercel.app";

const authAxiosInstance = axios.create({
  baseURL: BASE_URL + "/auth/client",
});

const nonAuthAxiosInstance = axios.create({
  baseURL: BASE_URL + "/client",
});

export { authAxiosInstance, nonAuthAxiosInstance };
