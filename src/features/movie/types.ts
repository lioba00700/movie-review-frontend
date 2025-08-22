//2025.08.21 작성 - 박민서
//영화 관련 타입 선언

export interface Movie {
  poster: string,
  title: string,
  genre:string,
  releaseAt: string,
  director:string,
  explan?: string
}

export interface MovieListState {
  movies: Movie[] | [],

}

export type MovieAction = 
  | {type: "CHAGNE", payload:{key:string, value: string | File | null}}
  | {type: "RESET"};

export type MovieCreateState = {
  poster: File | null,
  title: string,
  genre: string,
  releaseAt: string,
  director: string
}