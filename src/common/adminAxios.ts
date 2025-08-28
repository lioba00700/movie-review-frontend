//2025.08.25 Axios 인스턴스 생성

import axios, { AxiosError } from "axios";
import useAdminStore from "./store/useAdminStore";
import { logoutAdmin, tokenAdmin } from "./services/authAPI";

export const adminAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API + "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

adminAxios.interceptors.request.use(
  config => {
    const token = document.cookie.split(encodeURI("access-token") + "=");

    if (!token[1]) {
      return config;
    }

    config.headers["Authorization"] = `Bearer ${token[1]}`;

    return config;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  },
);

adminAxios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const { response, config } = error;
    const login = useAdminStore.getState().login;
    const logout = useAdminStore.getState().logout;

    //401 에러
    if (response?.status == 401 && config) {
      //토큰 재발급 요청
      const res = await tokenAdmin();
      console.log(res);
      //재발급 성공
      if (res.pass) {
        const token = document.cookie.split(encodeURI("access-token") + "=");
        console.log(token)
        config.headers["Authorization"] = `Bearer ${token[1]}`;
        login();
        return adminAxios(config);
        //재발급 실패
      } else {
        //로그인 상태 초기화
        logout();
        const res = await logoutAdmin();
        if (res.pass) {
          //로그인 화면 이동]
          return
        }
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
