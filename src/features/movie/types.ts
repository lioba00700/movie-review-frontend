//2025.08.21 작성 - 박민서
//영화 관련 타입 선언

import type { Review } from "../review/types";

export interface Movie {
  movie_id: number;
  movie_name: string;
  movie_date: string;
  movie_time?: string;
  movie_director: string;
  movie_review_count?: number;
  movie_cast_list?: string;
  movie_rating: number;
  movie_genre: string;
  movie_description?: string;
  movie_image: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
  reviews?: {
    movieId: number;
    movieName: string;
    movieReviewList: Review[];
  };
}

export interface MovieListState {
  movies: Movie[] | [];
}

export type MovieCreateState = {
  movie_name: string;
  movie_date: string;
  movie_time: string;
  movie_director: string;
  movie_cast_list: string;
  movie_genre: string[];
  movie_description: string;
  movie_image: File | null;
};
