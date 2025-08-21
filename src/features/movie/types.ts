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