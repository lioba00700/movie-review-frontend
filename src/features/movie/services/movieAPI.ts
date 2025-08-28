//2025.08.25 영화 관련 API 요청 - 박민서
import { publicAxios } from "@/common/publicAxios";
import type { MovieCreateState } from "../types";
import { adminAxios } from "@/common/adminAxios";
import useAdminStore from "@/common/store/useAdminStore";
import axios from "axios";

//영화 게시판 목록 조회
export const getMovieList = async (pageParam: number) => {
  try {
    const res = await publicAxios.get(`/movie/list?page=${pageParam}`);
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
  console.log(movie);
  const formData = new FormData();
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
  console.log(formData);
  try {
    const res = await adminAxios.put(`/movie/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
    const res = await adminAxios.post(`/movie`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    return { pass: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { pass: false, data: error };
  }
};

//영화 이미지 받아오기
export const getMovieImage = async (imageUrl: string) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_API}${imageUrl}`,
      { responseType: "blob" },
    );
    const blob = res.data;
    return { pass: true, data: new File([blob], "movie_image") };
  } catch (error) {
    return { pass: false, data: error };
  }
};
