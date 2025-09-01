//2025.08.25 감독 관련 API 요청 - 박민서

import { publicAxios } from "@/common/publicAxios";
import type { DirectorState } from "../types";

//감독 등록
export const postDirector = async (director: DirectorState) => {
  const formData = new FormData();
  Object.entries(director).map(([key, value]) => {
    if (key === "director_images") {
      formData.append("images", value as File);
      return;
    }
    formData.append(key, value as string);
  });
  try {
    const res = await publicAxios.post("/director", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//감독 전체 조회
export const getDirectors = async () => {
  try {
    const res = await publicAxios.get("/director");
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//감독 검색
export const searchDirectors = async (keyword: string) => {
  try {
    const res = await publicAxios.get(`/director/search?keyword=${keyword}`);
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};
