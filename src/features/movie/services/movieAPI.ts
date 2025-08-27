//2025.08.25 영화 관련 API 요청 - 박민서
import { publicAxios } from "@/common/publicAxios";
import type { MovieCreateState } from "../types";
import { adminAxios } from "@/common/adminAxios";
import useAdminStore from "@/common/store/useAdminStore";

//영화 게시판 목록 조회
export const getMovieList = async () => {
  try {
    const res = await publicAxios.get("/movie/list");
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//영화 게시판 상세 조회
export const getMovieDetail = async (id: number) => {
  try {
    const res = await publicAxios.get(`/movie/${id}`);
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//영화 게시판 수정
export const putMovie = async (id: number, movie: MovieCreateState) => {
  try {
    const res = await publicAxios.put(`/movie/${id}`);
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//영화 게시판 삭제
export const patchMovie = async (id: number) => {
  try {
    const res = await publicAxios.patch(`/movie/${id}`);
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//영화 게시판 작성
export const postMovie = async (movie: MovieCreateState) => {
  const formData = new FormData();
  const token = useAdminStore.getState().token;
  Object.entries(movie).map(([key, value]) => {
    if (key === "movie_image") {
      formData.append("images", value as File);
      return;
    } else if (key === "movie_genre" || key === "movie_cast_list") {
      const list = movie[key].join(", ");
      console.log(list);
      formData.append(key, list);
      return;
    }
    formData.append(key, value as string);
  });
  try {
    const res = await publicAxios.post(`/movie`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    return { pass: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { pass: false, data: error };
  }
};
