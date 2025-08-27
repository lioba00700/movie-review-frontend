//2025.08.25 감독 관련 API 요청 - 박민서

import { axiosInstance } from "@/common/axiosInstance";
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
    const res = await axiosInstance.post("/director", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
