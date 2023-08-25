import axios, { AxiosInstance } from "axios";
export var apiClient: AxiosInstance;

export function configureApi() {
  apiClient = axios.create({
    baseURL: "https://api.reactnative.be/",
  });
}
