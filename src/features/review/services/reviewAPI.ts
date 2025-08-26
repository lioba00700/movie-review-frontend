//2025.08.25 리뷰 관련 API 요청 - 박민서
import { axiosInstance } from "@/common/axiosInstance";
import type { ReviewCreateState } from "../types";

//영화 리뷰 목록 조회
export const getReviewList = async (movieId: number) => {
  try {
    const res = await axiosInstance.get(`/review/all/${movieId}`);
    return { pass: true, data: res.data[0].movieReviewList };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//특정 영화 특정 리뷰 조회
export const getReviewDetail = async (movieId: number, reviewId: number) => {
  try {
    const res = await axiosInstance.get(
      `/review/${movieId}?reviewId=${reviewId}`,
    );
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//영화 리뷰 수정
export const putReview = async (
  movieId: number,
  reviewId: number,
  review: ReviewCreateState,
) => {
  console.log(review);
  try {
    const res = await axiosInstance.put(
      `/review/${movieId}?reviewId=${reviewId}`,
      review,
    );
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//영화 게시판 삭제
export const patchReview = async (movieId: number, reviewId: number) => {
  try {
    const res = await axiosInstance.patch(
      `/review/${movieId}?reviewId=${reviewId}`,
    );
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};

//영화 리뷰 작성
export const postReview = async (
  movieId: number,
  review: ReviewCreateState,
) => {
  console.log(review);
  try {
    const res = await axiosInstance.post(`/review/${movieId}`, review);
    return { pass: true, data: res.data };
  } catch (error) {
    return { pass: false, data: error };
  }
};
