//2025.08.25 Axios 인스턴스 생성

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  timeout: 500,
  headers: {
    "Content-Type": "application/json",
  },
});
