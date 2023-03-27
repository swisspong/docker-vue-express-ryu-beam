import axios from "axios";

export const privateAPI = axios.create({
    baseURL: "/api",
  });
  privateAPI.interceptors.request.use((req) => {
    if (localStorage.access_token) {
      req.headers.Authorization = `Bearer ${localStorage.access_token}`;
    }
  
    return req;
  });