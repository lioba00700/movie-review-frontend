//2025.08.21 작성 - 박민서
//영화 관련 타입 선언

export interface Movie {
  id: number;
  poster: string;
  title: string;
  genre: string;
  releaseAt: string;
  director: string;
  explan?: string;
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
  movie_genre: string;
  movie_description: string;
  movie_image: File | null;
};
