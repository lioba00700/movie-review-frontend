//2025.08.25 Axios 인스턴스 생성

import axios, { AxiosError } from "axios";
import useAdminStore from "./store/useAdminStore";
import { tokenAdmin } from "./services/authAPI";

export const adminAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API + "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

adminAxios.interceptors.request.use(
  config => {
    const token = document.cookie.split(encodeURI("access-token") + "=");
    console.log(token)

    if (!token) {
      window.location.href = "/admin/login";
      return config;
    }

    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  async (error: AxiosError) => {
    const login = useAdminStore.getState().login;
    const { response, config } = error;
    if (response?.status == 401) {
      const res = await tokenAdmin();
      if (res.pass && config) {
        login();
        return adminAxios(config);
      } else {
        return Promise.reject(error);
      }
    }
  },
);
