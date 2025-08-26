//2025.08.25 감독 관련 API 요청 - 박민서

import { axiosInstance } from "@/common/axiosInstance";

//감독 등록
export const postDirector = async () => {
  try {
    const res = await axiosInstance.post("/movie/list");
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

export const getDirectors = async () => {
  try {
    const res = await axiosInstance.get("/movie/list");
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};
